import { Component, OnInit } from '@angular/core';
import { CommercantService } from '../commercant.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private e:CommercantService) { }

  ngOnInit(): void {
    this.aff();
  }
  se:any;
  aff = () =>
    this.e.getCommercant().subscribe(Response=>(
      this.se=Response
    ));
}
