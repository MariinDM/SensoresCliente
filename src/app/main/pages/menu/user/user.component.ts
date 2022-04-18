import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/Model/user';
import { AuthService } from 'src/app/auth/Service/auth.service';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';

@Component({
  selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ngOnInit(): void {
  }
  loginForm!:FormGroup;
  user!:User;

  constructor(public authService: AuthService, public router:Router,private fb:FormBuilder) {
    this.createFrom();
  }

  register() {
    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setUser();
      this.authService.register(this.user).subscribe({
        next: (v) => { 
          successDialog('Registro Insertado')
          this.createFrom()
        },
        error: (e) => errorMessage('Ocurrio un Error'),
        complete: () => console.info('complete') 
      })
    }
  }

  createFrom():void{
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'), Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],

    });
  }

  setUser():void{
    this.user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
      isActivated: 1,
      rolid:2
    }
  }
}
