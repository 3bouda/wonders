import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommercantService } from '../commercant.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-commercant',
  templateUrl: './commercant.component.html',
  styleUrls: ['./commercant.component.css']
})
export class CommercantComponent implements OnInit {

  ident!:string;
  constructor(private e:ProductsService,private afs:AngularFirestore, private ar:ActivatedRoute) {
   }
  ngOnInit(): void {
    this.aff();
    this.ident = this.ar.snapshot.params['id'];
  }
  se:any;
  aff = () =>
    this.e.getProduct().subscribe(Response=>(
      this.se=Response
    ));


}
