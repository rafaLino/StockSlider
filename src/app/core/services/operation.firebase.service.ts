import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Operation } from '../entities/operation.model';
import { FirebaseService } from './base/firebase.service';

@Injectable()
export class OperationFirebaseService extends FirebaseService<Operation> {

  constructor(private firestore: AngularFirestore) {
    super(firestore.collection('operation'));
  }
}
