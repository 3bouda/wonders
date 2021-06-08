import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommercantComponent } from './commercant/commercant.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupclientComponent } from './signupclient/signupclient.component';
import { ProductsComponent } from './products/products.component';
import { AccueillComponent } from './accueill/accueill.component';
import { AboutComponent } from './about/about.component';
import { LandComponent } from './land/land.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogcComponent } from './logc/logc.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AccueilComponent,
    NavbarComponent,
    CommercantComponent,
    ClientComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    SignupclientComponent,
    ProductsComponent,
    AccueillComponent,
    AboutComponent,
    LandComponent,
    LogcComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
