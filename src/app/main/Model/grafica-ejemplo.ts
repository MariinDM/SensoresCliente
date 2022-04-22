import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle
  } from "ng-apexcharts";

export interface GraficaEjemplo {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
}
