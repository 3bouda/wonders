import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupclient',
  templateUrl: './signupclient.component.html',
  styleUrls: ['./signupclient.component.css']
})
export class SignupclientComponent implements OnInit {
  client!:FormGroup;
  constructor(private fb:FormBuilder, private t:ClientService,private router:Router) { }

  ngOnInit(): void {
    this.client=this.fb.group({
      name: [''],
      email: [''],
      date: [''],
      password: ['']
    })
  }
  onSubmit(u:Client){
    this.t.creatClient(u);
    this.router.navigate(['/accueil']);
  }
}
