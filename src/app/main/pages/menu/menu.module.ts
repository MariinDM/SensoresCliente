import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { TableComponent } from './table/table.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { UserComponent } from './user/user.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    TableComponent,
    UserComponent,
    DialogComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ModulesModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
