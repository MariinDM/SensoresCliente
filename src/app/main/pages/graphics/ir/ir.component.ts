import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { SensorService } from '../../sensor/Service/sensor.service';

@Component({
  selector: 'app-ir',
  templateUrl: './ir.component.html',
  styleUrls: ['./ir.component.css']
})
export class IrComponent implements OnInit {

  dataIR:any
  nombre!:string
  ir!:any

  constructor(private sensorService:SensorService, private router:Router) { }

  ngOnInit(): void {
    this.getall()
    interval(500000).subscribe(()=>{
      this.getall()
    })
  }
  getall():void{
    this.sensorService.getall().subscribe((data:any)=>{
      data.find.forEach((element: any) => {
        if (element.clave == 'IR') {
          this.nombre = element.nombre
          this.dataIR = element.data
        }
      })
      // console.log(this.dataIR)
    })
  }
}
