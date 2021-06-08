import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Commercant } from '../commercant';
import { CommercantService } from '../commercant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  commercant!:FormGroup;
  constructor(private fb:FormBuilder, private t:CommercantService,private router:Router) { }

  ngOnInit(): void {
    this.commercant=this.fb.group({
      name:[''],
      email:[''],
      date:[''],
      password:['']
 })
}

  onSubmit(u:Commercant){
    this.t.creatCommercant(u);
    this.router.navigate(['/commercant',u.name]);
  }
}
