import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { errorMessage, successDialog } from 'src/app/shared/alerts/alerts';
import { DialogComponent } from '../dialog/dialog.component';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataUsers!:any[];
  user!:any;

  constructor(private userService:UserService, private router:Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers()
    interval(5000).subscribe(()=>{
      this.getAllUsers()
    })
  }
  openDialog(id:number) {
    // this.userService.getone(id).subscribe({
    //   next:(v)=>{
    //     this.user=v[0],
    //     console.log(this.user)
    //   },
    //   error:(e)=>errorMessage('Ocurrio un Erro'),
    //   complete:()=>console.info('Completed')
    // })
    this.dialog.open(DialogComponent, {
      data: {
        id: id
      }
    });
  }
  getOne(id:number):void{
    this.userService.getone(id).subscribe((data:any)=>{
      this.user=data[0].users
      console.log(this.dataUsers)
    })
  }
  getAllUsers():void{
    this.userService.getall().subscribe((data:any)=>{
      this.dataUsers=data.users
      console.log(this.dataUsers)
    })
  }
  delete(id:number):void{
    this.userService.delete(id).subscribe({
      next:(v)=>{successDialog('Usuario Desactivado'),this.getAllUsers()},
      error:(e)=>errorMessage('Ocurrio un Error'),
      complete:()=>console.info('Completed')
    })
  }
}
