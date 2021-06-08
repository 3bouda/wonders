import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private f:ProductsService,private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.aff();

  }
  e:any;
  aff = () =>
  this.f.getProduct().subscribe(Response =>(
    this.e=Response
  ));
}
