import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(public firesevices:AngularFirestore) { }
  getClient(){
    return this.firesevices.collection('Clients').snapshotChanges();
  }
  creatClient(client : Client){
    return this.firesevices.collection('Clients').add(client);
  }
}
