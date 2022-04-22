import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { SensorService } from '../sensor/Service/sensor.service';

@Component({
  selector: 'app-grafica-ejemplo',
  templateUrl: './grafica-ejemplo.component.html',
  styleUrls: ['./grafica-ejemplo.component.css']
})
export class GraficaEjemploComponent implements OnInit {

  dataUS: any = []
  dataIR: any = []
  dataFR: any = []
  dataTH: any = []
  dataHG: any = []

  constructor(private sensoresService: SensorService) {}

  ngOnInit(): void {
    this.getall()
  }
  getall(): void {
    this.sensoresService.getall().subscribe((data: any) => {
      data.find.forEach((element: any) => {
        switch (element.clave) {
          case 'US':
            this.dataUS.push(element)
            break
          case 'FR':
            this.dataFR.push(element)
            break
          case 'IR':
            this.dataIR.push(element)
            break
          case 'HG':
            this.dataHG.push(element)
            break
          case 'TH':
            this.dataTH.push(element)
            break
        }
      })
    })
  }
}
