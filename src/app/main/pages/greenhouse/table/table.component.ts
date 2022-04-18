import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { DialogComponent } from '../dialog/dialog.component';
import { InvernaderoService } from '../Service/invernadero.service';
import { timer, interval } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataInv!:any[];
  inv!:any;

  constructor(private invService:InvernaderoService, private router:Router, public dialog: MatDialog) { }

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
    this.invService.getone(id).subscribe((data:any)=>{
      this.dataInv=data[0].dato
      //console.log(this.dataInv)
    })
  }
  getall():void{
    this.invService.getall().subscribe((data:any)=>{
      this.dataInv=data.dato
      //console.log(this.dataInv)
    })
  }
  delete(id:number):void{
    this.invService.delete(id).subscribe({
      next:(v)=>{successDialog('Registro Eliminado'),this.getall()},
      error:(e)=>errorMessage('Ocurrio un Error'),
      complete:()=>console.info('Completed')
    })
  }
}
