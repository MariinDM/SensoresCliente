import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";

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

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor() { 
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
  }

  ngOnInit(): void {
  }

}
