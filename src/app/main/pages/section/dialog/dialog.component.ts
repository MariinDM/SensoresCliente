import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Seccion } from 'src/app/main/Model/seccion';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { SeccionService } from '../Service/seccion.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  seccionForm!:FormGroup
  sec!:Seccion
  dataSeccion!:any[]

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private seccionService:SeccionService, private fb:FormBuilder) { 
    this.createFrom()
  }

  ngOnInit(): void {
    this.getone()
    this.setSeccion2()
  }
  getAllUsers():void{
    this.seccionService.getall().subscribe((data:any)=>{
      this.dataSeccion=data.dato
      console.log(this.dataSeccion)
    })
  }
  getone(){
    this.seccionService.getone(this.data.id).subscribe({
      next:(v)=>{
        this.sec=v.dato,
        console.log(this.sec)
      },
      error:(e)=>errorMessage('Ocurrio un problema')
    })
  }
  update() {
    if(this.seccionForm.invalid){
      return Object.values(this.seccionForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setSeccion();
      this.seccionService.update(this.data.id, this.sec).subscribe({
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
    this.sec = {
      seccion: this.seccionForm.get('seccion')?.value,
    }
  }
  setSeccion2():void{
    this.sec = {
      seccion: '',
    }
  }
}
