import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Commercant } from './commercant';

@Injectable({
  providedIn: 'root'
})
export class CommercantService {

  constructor(public afs:AngularFirestore) { }

  getCommercant(){
    return this.afs.collection('Commercants').snapshotChanges();
  }
  creatCommercant(commercant : Commercant){
    return this.afs.collection('Commercants').add(commercant);
  }

}
