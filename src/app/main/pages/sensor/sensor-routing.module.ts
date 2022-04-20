import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensoresComponent } from './sensores/sensores.component';
import { TableComponent } from './table/table.component';
import { TiposensorComponent } from './tiposensor/tiposensor.component';

const routes: Routes = [
  { path:'', redirectTo:'table', pathMatch:'full' },
  { path:'table', component:TableComponent },
  { path:'tsensor', component:TiposensorComponent },
  { path:'sensores', component:SensoresComponent },
  { path:'**', redirectTo:'table' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
