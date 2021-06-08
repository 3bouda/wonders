import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-logc',
  templateUrl: './logc.component.html',
  styleUrls: ['./logc.component.css']
})
export class LogcComponent implements OnInit {

  constructor(private fb:FormBuilder,private t:ClientService,private router:Router) { }

  client!:FormGroup;
  ngOnInit(): void {
    this.client=this.fb.group({
      name: [''],
      password: ['']
    })
  }
  onSubmit(u: any){

    this.router.navigate(['/accueil']);
  }

}
