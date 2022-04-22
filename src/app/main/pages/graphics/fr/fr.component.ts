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

  dataFR: any = []

  constructor(private sensorService: SensorService) {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [0.25, 0.62]
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
        categories: ['0','1']
      }
    };
  }

  ngOnInit(): void {
    this.getall()
  }
  getall(): void {
    this.sensorService.getall().subscribe((data: any) => {
      data.find.forEach((element: any) => {
        if (element.clave == 'FR') {
          this.dataFR.push(element)
        }
      })
      console.log(this.dataFR)
    })
  }
}
