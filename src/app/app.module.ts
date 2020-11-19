import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AngularMaterialModule } from "./angular-material.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/shared/login/login.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { LayoutHomeComponent } from './components/shared/layout-home/layout-home.component';
import { AdminProductlistComponent } from './components/shared/admin-productlist/admin-productlist.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";


import { AuthService  } from "./services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkD6eaLuViQxNHiJC0InfdPhoEEQfFe1E",
  authDomain: "shoppingcart-ece62.firebaseapp.com",
  databaseURL: "https://shoppingcart-ece62.firebaseio.com",
  projectId: "shoppingcart-ece62",
  storageBucket: "shoppingcart-ece62.appspot.com",
  messagingSenderId: "588301936204",
  appId: "1:588301936204:web:2d55e54e7fada91aaff6e9",
  measurementId: "G-XHZ4Z56Q3E"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutHomeComponent,
    AdminProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule, 

    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
