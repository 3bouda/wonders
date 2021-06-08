import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AccueillComponent } from './accueill/accueill.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { CommercantComponent } from './commercant/commercant.component';
import { LogcComponent } from './logc/logc.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupclientComponent } from './signupclient/signupclient.component';

const routes: Routes = [
  {path:'',redirectTo:'/accueill',pathMatch:'full'},
  {path:'accueill', component:AccueillComponent},


  {path:'accueil', component:AccueilComponent},
  {path:'login', component:LoginComponent},
  {path:'loginc', component:LogcComponent},

  {path:'signupclient', component:SignupclientComponent},
  {path:'signup', component:SignupComponent},
  {path:'commercant/:id', component:CommercantComponent},


  {path:'client', component:ClientComponent},
  {path:'admin', component:AdminComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
