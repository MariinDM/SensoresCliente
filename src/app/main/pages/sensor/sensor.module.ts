import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { TiposensorComponent } from './tiposensor/tiposensor.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogComponent,
    TableComponent,
    TiposensorComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    SensorRoutingModule,
    ModulesModule,
    ReactiveFormsModule
  ]
})
export class SensorModule { }
