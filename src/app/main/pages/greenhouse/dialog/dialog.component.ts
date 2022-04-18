import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Invernadero } from 'src/app/main/Model/invernadero';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { InvernaderoService } from '../Service/invernadero.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  invForm!:FormGroup
  inv!:Invernadero
  dataInv!:any[]

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private invernaderoService:InvernaderoService, private fb:FormBuilder) { 
    this.createFrom()
  }

  ngOnInit(): void {
    this.getone()
    this.setInv2()
  }
  getAllUsers():void{
    this.invernaderoService.getall().subscribe((data:any)=>{
      this.dataInv=data.dato
      console.log(this.dataInv)
    })
  }
  getone(){
    this.invernaderoService.getone(this.data.id).subscribe({
      next:(v)=>{
        this.inv=v.dato
        //console.log(this.inv)
      },
      error:(e)=>errorMessage('Ocurrio un problema')
    })
  }
  update() {
    if(this.invForm.invalid){
      return Object.values(this.invForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setInv();
      this.invernaderoService.update(this.data.id, this.inv).subscribe({
        next: (v) => { 
          successDialog('Registro Actualizado')
        },
        error: (e) => errorMessage('Ocurrio un Error'),
        complete: () => this.getAllUsers() 
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
  setInv2():void{
    this.inv = {
      invernadero: ''
    }
  }

}
