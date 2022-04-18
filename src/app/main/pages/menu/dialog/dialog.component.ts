import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/auth/Model/user';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  loginForm!:FormGroup
  user!:User
  dataUsers!:any[]

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private userService:UserService, private fb:FormBuilder) { 
    this.createFrom()
  }

  ngOnInit(): void {
    this.getone()
    this.setUser2()
  }
  getAllUsers():void{
    this.userService.getall().subscribe((data:any)=>{
      this.dataUsers=data.users
      console.log(this.dataUsers)
    })
  }
  getone(){
    this.userService.getone(this.data.id).subscribe({
      next:(v)=>{
        this.user=v[0],
        console.log(this.user)
      },
      error:(e)=>errorMessage('Ocurrio un problema')
    })
  }
  update() {
    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setUser();
      this.userService.update(this.data.id, this.user).subscribe({
        next: (v) => { 
          successDialog('Registro Insertado')
          this.getAllUsers()
        },
        error: (e) => errorMessage('Ocurrio un Error'),
        complete: () => console.info('complete') 
      })
    }
  }

  createFrom():void{
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'), Validators.email]],
      // password:['',[Validators.required,Validators.minLength(8)]],
      is_activated:[0,[Validators.required]],
      rolid:[0,[Validators.required]],
    });
  }

  setUser():void{
    this.user = {
      email: this.loginForm.get('email')?.value,
      password: this.user.password, //this.loginForm.get('password')?.value,
      isActivated: this.loginForm.get('is_activated')?.value,
      rolid:this.loginForm.get('rolid')?.value
    }
  }
  setUser2():void{
    this.user = {
      email: '',
      password: '',
      isActivated: 0,
      rolid:0
    }
  }
}
