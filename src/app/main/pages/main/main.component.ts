import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/Service/auth.service';
import { Menu } from '../../Model/menu';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) {}
  
  ngOnInit(): void {
  }

  getRol(){
    const rol = localStorage.getItem('rol')
    if(rol=='1'){
      return true
    }
    return false
  }

  logout():void{
    this.authService.logout()
    this.router.navigate(['/auth/login'])
  }
}
