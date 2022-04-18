import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TSensor } from 'src/app/main/Model/t-sensor';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { TsensorService } from '../Service/tsensor.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  sensorForm!:FormGroup
  sen!: TSensor
  dataSensor!:any[]

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private tsensorService:TsensorService, private fb:FormBuilder) { 
    this.createFrom()
  }

  ngOnInit(): void {
    this.getone()
    this.setSeccion2()
  }
  getAllUsers():void{
    this.tsensorService.getall().subscribe((data:any)=>{
      this.dataSensor=data.dato
      console.log(this.dataSensor)
    })
  }
  getone(){
    this.tsensorService.getone(this.data.id).subscribe({
      next:(v)=>{
        this.sen=v.dato,
        console.log(this.sen)
      },
      error:(e)=>errorMessage('Ocurrio un problema')
    })
  }
  update() {
    if(this.sensorForm.invalid){
      return Object.values(this.sensorForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setSeccion();
      this.tsensorService.update(this.data.id, this.sen).subscribe({
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
    this.sensorForm = this.fb.group({
      sensor:['', [Validators.required,Validators.minLength(5)]],
      clave:['', [Validators.required,Validators.maxLength(2)]],
    });
  }

  setSeccion():void{
    this.sen = {
      sensor: this.sensorForm.get('sensor')?.value,
      clave: this.sensorForm.get('clave')?.value
    }
  }
  setSeccion2():void{
    this.sen = {
      sensor: '',
      clave:''
    }
  }

}
