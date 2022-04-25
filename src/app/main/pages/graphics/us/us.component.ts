import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { SensorService } from '../../sensor/Service/sensor.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  dataDistancia: number[] = []
  dataFecha: string[] = []
  dataTodo: any[] = []

  dataUS: any
  ir!: any

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor(private sensorService: SensorService, private router: Router) { 
    this.getall()
  }

  ngOnInit(): void {
    this.grafica()
  }
  grafica(): void {
    // this.getall()
    this.chartOptions = {
      series: [
        {
          name: "Datos",
          data: this.dataDistancia
        }
      ],
      chart: {
        height: 400,
        type: "line"
      },
      title: {
        text: "ULTRASONICO"
      },
      xaxis: {
        categories: this.dataFecha
      }
    };
  }

  getall(): void {
    this.sensorService.getall().subscribe((data: any) => {
      data.find.forEach((element: any) => {
        if (element.clave == 'US') {
          this.dataUS = element.data
          console.log(element)
        }
      })
      this.dataUS.forEach((element2: any) => {
        this.dataFecha.push(element2.fecha)
        this.dataDistancia.push(element2.valor)
        // console.log(element2)
      })
      // console.log(this.dataFecha)
      // console.log(this.dataTodo)
      // console.log(this.dataDistancia)
      // console.log(this.dataUS)
    })
  }

}
