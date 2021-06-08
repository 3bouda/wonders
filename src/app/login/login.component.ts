import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private t:ClientService,private router:Router) { }
  client!:FormGroup;
  ngOnInit(): void {
    this.client=this.fb.group({
      name: [''],
      password: ['']
    })
  }
  onSubmit(u: any){
    this.t.creatClient(u);
    this.router.navigate(['/accueil']);
  }

}
