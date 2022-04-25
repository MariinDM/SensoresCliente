import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";
import { SensorService } from '../../sensor/Service/sensor.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}

export interface TH {
  fecha:string
  hora:string
}

@Component({
  selector: 'app-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css']
})
export class THComponent implements OnInit {

  dataTemperatura: number[] = [33, 34, 35, 33, 32, 54, 35, 33, 32, 54,35, 33, 32, 54]
  dataHumedad: number[] = [76, 63, 25, 33, 42, 54, 35, 33, 32, 54, 35, 33, 32, 54,]
  dataFechaHora: any[] = ['23-04-2022', '4:15']
  dataTodo:any[] = [this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,this.dataFechaHora,]

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor(private sensorService: SensorService) {
    this.chartOptions = {
      series: [
        {
          name: "Temperatura",
          data: [this.dataTemperatura]
        },
        {
          name: "Humedad",
          data: this.dataHumedad
        }
      ],
      chart: {
        height: 400,
        type: "line"
      },
      title: {
        text: "TEMPERATURA Y HUMEDAD"
      },
      xaxis: {
        categories: this.dataTodo
      }
    };
  }

  ngOnInit(): void {
    this.getall()
  }
  getall(): void {
    // this.sensorService.getall().subscribe((data: any) => {
    //   data.find.forEach((element: any) => {
    //     if (element.clave == 'TH') {
    //       if(element.data)
    //       this.dataFR.push(element)
    //     }
    //   })
    //   console.log(this.dataFR)
    // })
  }

}
