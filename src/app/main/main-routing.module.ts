import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersGuard } from '../shared/Guards/users.guard';
import { GraficaEjemploComponent } from './pages/grafica-ejemplo/grafica-ejemplo.component';
import { THComponent } from './pages/graphics/th/th.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: 'home', component: MainComponent, children: [
      { path: 'prueba', loadChildren: () => import('./pages/menu/menu.module').then((m) => m.MenuModule), canActivate:[UsersGuard]},
      { path: 'greenhouse', loadChildren: () => import('./pages/greenhouse/greenhouse.module').then((m) => m.GreenhouseModule) },
      { path: 'section', loadChildren: () => import('./pages/section/section.module').then((m) => m.SectionModule) },
      { path: 'sensor', loadChildren: () => import('./pages/sensor/sensor.module').then((m) => m.SensorModule) },
      { path: 'graficas', component: GraficaEjemploComponent },
      { path: '**', redirectTo: 'graficas' },
      { path: '', redirectTo: 'graficas' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
