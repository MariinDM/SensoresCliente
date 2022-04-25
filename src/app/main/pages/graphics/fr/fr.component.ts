import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { SensorService } from '../../sensor/Service/sensor.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css']
})
export class FrComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  dataFoto: number[] = []
  dataFecha: string[] = []
  dataTodo: any[] = []

  dataFR:any

  constructor(private sensorService: SensorService) {
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
          data: this.dataFoto
        }
      ],
      chart: {
        height: 400,
        type: "line"
      },
      title: {
        text: "FOTORESISTENCIA"
      },
      xaxis: {
        categories: this.dataFecha
      }
    };
  }

  getall(): void {
    this.sensorService.getall().subscribe((data: any) => {
      data.find.forEach((element: any) => {
        if (element.clave == 'FR') {
          this.dataFR = element.data
        }
      })
      this.dataFR.forEach((element2: any) => {
        this.dataFecha.push(element2.fecha)
        this.dataFoto.push(element2.valor)
        // console.log(element2)
      })
      console.log(this.dataFR)
    })
  }
}
