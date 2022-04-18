import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Invernadero } from 'src/app/main/Model/invernadero';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { InvernaderoService } from '../Service/invernadero.service';

@Component({
  selector: 'app-invernadero',
  templateUrl: './invernadero.component.html',
  styleUrls: ['./invernadero.component.css']
})
export class InvernaderoComponent implements OnInit {

  invForm!:FormGroup
  inv!:Invernadero
  dataUsers!:any[]

  constructor(private invernaderoService:InvernaderoService, private fb:FormBuilder, private router:Router) { 
    this.createFrom()
  }

  ngOnInit(): void {
  }

  getAllUsers():void{
    this.invernaderoService.getall().subscribe((data:any)=>{
      this.dataUsers=data.users
      console.log(this.dataUsers)
    })
  }
  register() {
    if(this.invForm.invalid){
      return Object.values(this.invForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setInv();
      this.invernaderoService.register(this.inv).subscribe({
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
    this.invForm = this.fb.group({
      invernadero:['', [Validators.required,Validators.minLength(3)]],
    });
  }

  setInv():void{
    this.inv = {
      invernadero: this.invForm.get('invernadero')?.value,
    }
  }
}
