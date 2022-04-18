import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TSensor } from 'src/app/main/Model/t-sensor';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { TsensorService } from '../Service/tsensor.service';

@Component({
  selector: 'app-tiposensor',
  templateUrl: './tiposensor.component.html',
  styleUrls: ['./tiposensor.component.css']
})
export class TiposensorComponent implements OnInit {

  sensorForm!:FormGroup
  tsensor!:TSensor
  dataSensor!:any[]

  constructor(private tsensorService:TsensorService, private fb:FormBuilder, private router:Router) { 
    this.createFrom()
  }

  ngOnInit(): void {
  }

  getAllUsers():void{
    this.tsensorService.getall().subscribe((data:any)=>{
      this.dataSensor=data.users
      console.log(this.dataSensor)
    })
  }
  register() {
    if(this.sensorForm.invalid){
      return Object.values(this.sensorForm.controls).forEach(control=>{
        control.markAsTouched();
      });
    }else{
      this.setSeccion();
      this.tsensorService.register(this.tsensor).subscribe({
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
    this.tsensor = {
      sensor: this.sensorForm.get('sensor')?.value,
      clave: this.sensorForm.get('clave')?.value,
    }
  }

}
