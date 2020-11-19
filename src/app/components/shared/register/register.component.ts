import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    await this.authService.createUser(this.loginForm.get('email').value,this.loginForm.get('password').value);
  }
  goLogin(){
    this.router.navigateByUrl('login');
  }
}
