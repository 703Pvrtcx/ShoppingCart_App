import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router:Router,
     private fb: FormBuilder,
     private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
   }
  ngOnInit(): void {
  }
  async onSubmit(){
     await this.authService.loginEmailPassword(this.loginForm.get('email').value,this.loginForm.get('password').value);
  }
  goRegister(){
    this.router.navigateByUrl('list');
  }
}
