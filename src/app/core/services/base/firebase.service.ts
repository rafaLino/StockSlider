import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { Entity } from '../../entities/entity.model';

export abstract class FirebaseService<T extends Entity> {

    constructor(protected collection: AngularFirestoreCollection<T>) { }

    async get(): Promise<Array<T>> {
        return this.collection.valueChanges({ idField: 'id' }).toPromise();
    }

    async getById(id: string): Promise<T> {
        return this.collection.doc(id).get().pipe(map(x => ({ ...x.data(), id: x.id } as T))).toPromise();
    }

    async create(entity: T): Promise<string> {
        return new Promise(async (resolve, reject) => {
            try {
                const docRef = await this.collection.add(entity);
                resolve(docRef.id);
            } catch (error) {
                reject(error);
            }
        });
    }

    async update(id: string, entity: T): Promise<void> {
        delete entity.id;
        return this.collection.doc(id).update(entity);
    }

    async delete(id: string): Promise<void> {
        return this.collection.doc(id).delete();
    }
}