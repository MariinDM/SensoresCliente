import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { SeccionComponent } from './seccion/seccion.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DialogComponent,
    TableComponent,
    SeccionComponent
  ],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    ModulesModule,
    ReactiveFormsModule
  ]
})
export class SectionModule { }
