import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { SensorService } from '../../sensor/Service/sensor.service';

@Component({
  selector: 'app-hg',
  templateUrl: './hg.component.html',
  styleUrls: ['./hg.component.css']
})
export class HgComponent implements OnInit {

  dataHG:any
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
        if (element.clave == 'HG') {
          this.nombre = element.nombre
          this.dataHG = element.data
        }
      })
      // console.log(this.dataHG)
    })
  }
}
