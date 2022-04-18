import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeccionComponent } from './seccion/seccion.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path:'', redirectTo:'table', pathMatch:'full' },
  { path:'table', component:TableComponent },
  { path:'seccion', component:SeccionComponent },
  { path:'**', redirectTo:'table' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
