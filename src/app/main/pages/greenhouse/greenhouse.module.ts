import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreenhouseRoutingModule } from './greenhouse-routing.module';
import { InvernaderoComponent } from './invernadero/invernadero.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InvernaderoComponent,
    TableComponent,
    DialogComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    GreenhouseRoutingModule,
    ModulesModule,
    ReactiveFormsModule
  ]
})
export class GreenhouseModule { }
