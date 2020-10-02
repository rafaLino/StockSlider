import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Stock } from '../entities/stock.model';
import { FirebaseService } from './base/firebase.service';

@Injectable()
export class StockFirebaseService extends FirebaseService<Stock> {


  constructor(private firestore: AngularFirestore) {
    super(firestore.collection('stock'));
  }

  async create(entity: Stock): Promise<string> {
    entity.name = entity.name.toLocaleUpperCase();
    return super.create(entity);
  }



}
