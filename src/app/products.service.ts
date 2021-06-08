import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public afs:AngularFirestore) { }
  getProduct(){
    return this.afs.collection('Products').snapshotChanges()
  }
  creatProduct(product : Product){
    return this.afs.collection('Products').add(product);
  }

}
