import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TiposensorComponent } from './tiposensor/tiposensor.component';

const routes: Routes = [
  { path:'', redirectTo:'table', pathMatch:'full' },
  { path:'table', component:TableComponent },
  { path:'tsensor', component:TiposensorComponent },
  { path:'**', redirectTo:'table' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
