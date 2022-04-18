import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { DialogComponent } from '../dialog/dialog.component';
import { TsensorService } from '../Service/tsensor.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSensor!:any[];
  sensor!:any;

  constructor(private tsensorService:TsensorService, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getall()
    interval(5000).subscribe(()=>{
      this.getall()
    })
  }
  openDialog(id:number) {
    this.dialog.open(DialogComponent, {
      data: {
        id: id
      }
    });
  }
  getOne(id:number):void{
    this.tsensorService.getone(id).subscribe((data:any)=>{
      this.dataSensor=data[0].dato
      //console.log(this.dataSensor)
    })
  }
  getall():void{
    this.tsensorService.getall().subscribe((data:any)=>{
      this.dataSensor=data.dato
      //console.log(this.dataSensor)
    })
  }
  delete(id:number):void{
    this.tsensorService.delete(id).subscribe({
      next:(v)=>{successDialog('Registro Eliminado'),this.getall()},
      error:(e)=>errorMessage('Ocurrio un Error'),
      complete:()=>console.info('Completed')
    })
  }

}
