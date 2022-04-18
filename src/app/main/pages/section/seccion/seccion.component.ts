import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seccion } from 'src/app/main/Model/seccion';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { SeccionService } from '../Service/seccion.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {

  seccionForm!:FormGroup
  seccion!:Seccion
  dataUsers!:any[]

  constructor(private seccionService:SeccionService, private fb:FormBuilder, private router:Router) { 
    this.createFrom()
  }

  ngOnInit(): void {
  }

  getAllUsers():void{
    this.seccionService.getall().subscribe((data:any)=>{
      this.dataUsers=data.users
      console.log(this.dataUsers)
    })
  }
  register() {
    if(this.seccionForm.invalid){
      return Object.values(this.seccionForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setSeccion();
      this.seccionService.register(this.seccion).subscribe({
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
    this.seccionForm = this.fb.group({
      seccion:['', [Validators.required,Validators.maxLength(1)]],
    });
  }

  setSeccion():void{
    this.seccion = {
      seccion: this.seccionForm.get('seccion')?.value,
    }
  }

}
