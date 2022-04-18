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

  fillerNav = Array.from({length: 4}, (_, i) => `Item ${i + 1}`);

  categoryData!:Menu[]

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );


  constructor(private authService:AuthService, private router:Router) {}
  
    
  ngOnInit(): void {
  }

  // getall():void{
  //   this.mainService.getall().subscribe({
  //     next:(v:any)=>{
  //       this.categoryData=v.data
  //       console.log(this.categoryData)
  //     }
  //   })
  // }
  logout():void{
    this.authService.logout()
    this.router.navigate(['/auth/login'])
  }
}
