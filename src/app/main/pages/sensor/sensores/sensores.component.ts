import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sensor } from 'src/app/main/Model/sensor';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { InvernaderoService } from '../../greenhouse/Service/invernadero.service';
import { SeccionService } from '../../section/Service/seccion.service';
import { SensorService } from '../Service/sensor.service';
import { TsensorService } from '../Service/tsensor.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css']
})
export class SensoresComponent implements OnInit {

  selectValue!:string

  sensorForm!:FormGroup

  sensor!:Sensor
  dataSensor!:any[]
  dataTsensor!:any[]
  dataSeccion!:any[]
  dataPines!:any[]
  dataInv!:any[]
  temporal:number[] = []

  pin1 = new FormControl('', Validators.required);
  pin2 = new FormControl('');

  constructor(
    private sensorService:SensorService,
    private tsensorService:TsensorService,
    private invService:InvernaderoService,
    private seccionService:SeccionService,
    private fb:FormBuilder, 
    private router:Router) { 
    this.createFrom()
  }

  ngOnInit(): void {
    this.getTsensor()
    this.getSeccion()
    this.getInvernaderos()
    this.getPines()
  }
  getPines():void{
    this.sensorService.getpines().subscribe((data:any)=>{
      this.dataPines=data.dato
      console.log(this.dataPines)
    })
  }
  getTsensor():void{
    this.tsensorService.getall().subscribe((data:any)=>{
      this.dataTsensor=data.dato
      console.log(this.dataTsensor)
    })
  }
  getSeccion():void{
    this.seccionService.getall().subscribe((data:any)=>{
      this.dataSeccion=data.dato
      console.log(this.dataSeccion)
    })
  }
  getInvernaderos():void{
    this.invService.getall().subscribe((data:any)=>{
      this.dataInv=data.dato
      console.log(this.dataInv)
    })
  }
  register() {
    // if(this.sensorForm.invalid){
    //   return Object.values(this.sensorForm.controls).forEach(control=>{
    //     control.markAsTouched();
    //   });
    // }else{
      this.pushArray()
      this.setSensor();
      console.log(this.sensor)
      this.sensorService.register(this.sensor).subscribe({
        next: (v) => { 
          successDialog('Registro Insertado')
        },
        error: (e) => errorMessage(e),
        complete: () => this.temporal = []
      })
    }
  // }

  createFrom():void{
    this.sensorForm = this.fb.group({
      clave:['', [Validators.required,Validators.maxLength(2)]],
      isActive:['', [Validators.required]],
      seccion:['', [Validators.required]],
      invernadero:['', [Validators.required]],
    });
  }
  pushArray():number[]{
    let pin = this.pin1.value
    this.temporal.push(pin)
    if(this.pin2.value){
      this.temporal.push(this.pin2.value) 
    }
    return this.temporal
  }
  setSensor():void{
    this.sensor = {
      pines: this.temporal,
      clave: this.sensorForm.get('clave')?.value,
      isActive: this.sensorForm.get('isActivate')?.value,
      seccion: this.sensorForm.get('seccion')?.value,
      invernadero: this.sensorForm.get('invernadero')?.value,
    }
  }

}
