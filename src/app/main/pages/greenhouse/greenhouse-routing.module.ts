import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvernaderoComponent } from './invernadero/invernadero.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path:'', redirectTo:'table', pathMatch:'full' },
  { path:'table', component:TableComponent },
  { path:'invernadero', component:InvernaderoComponent },
  { path:'**', redirectTo:'table' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreenhouseRoutingModule { }
