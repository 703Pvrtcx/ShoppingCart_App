import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password).then( () => {
      window.alert('account created');
      this.router.navigateByUrl('login');
    }).catch((error) => {
      window.alert(error.message);
    });
  }
  loginEmailPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).then( () => {
      window.alert('email and password successful login');
      this.router.navigateByUrl('list');
    }).catch( (error) => {
      window.alert(error.message);
    });
  }

}
