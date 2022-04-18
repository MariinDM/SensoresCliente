import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckSesionGuard } from '../auth/Guard/check-sesion.guard';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path:'home', component:MainComponent,canActivate:[CheckSesionGuard],children:[
    { path: 'prueba', loadChildren: () => import('./pages/menu/menu.module').then((m) => m.MenuModule) },
    { path: 'greenhouse', loadChildren: () => import('./pages/greenhouse/greenhouse.module').then((m) => m.GreenhouseModule) },
    { path: 'section', loadChildren: () => import('./pages/section/section.module').then((m) => m.SectionModule) },
    { path: 'sensor', loadChildren: () => import('./pages/sensor/sensor.module').then((m) => m.SensorModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
