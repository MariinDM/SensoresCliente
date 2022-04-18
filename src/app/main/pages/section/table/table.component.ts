import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SeccionService } from '../Service/seccion.service';
import { timer, interval } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSecciones!:any[];
  seccion!:any;

  constructor(private seccionService:SeccionService, private router:Router, public dialog: MatDialog) { }

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
    this.seccionService.getone(id).subscribe((data:any)=>{
      this.dataSecciones=data[0].dato
      //console.log(this.dataSecciones)
    })
  }
  getall():void{
    this.seccionService.getall().subscribe((data:any)=>{
      this.dataSecciones=data.dato
      //console.log(this.dataSecciones)
    })
  }
  delete(id:number):void{
    this.seccionService.delete(id).subscribe({
      next:(v)=>{successDialog('Registro Eliminado'),this.getall()},
      error:(e)=>errorMessage('Ocurrio un Error'),
      complete:()=>console.info('Completed')
    })
  }

}
