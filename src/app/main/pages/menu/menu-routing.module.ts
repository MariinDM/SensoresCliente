import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'', redirectTo:'table', pathMatch:'full' },
  { path:'table', component:TableComponent },
  { path:'user', component:UserComponent },
  { path:'**', redirectTo:'prueba1' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
