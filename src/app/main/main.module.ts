import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ModulesModule } from '../shared/modules/modules.module';
import { GraficaEjemploComponent } from './pages/grafica-ejemplo/grafica-ejemplo.component';
import { THComponent } from './pages/graphics/th/th.component';
import { FrComponent } from './pages/graphics/fr/fr.component';
import { UsComponent } from './pages/graphics/us/us.component';
import { IrComponent } from './pages/graphics/ir/ir.component';
import { HgComponent } from './pages/graphics/hg/hg.component';


@NgModule({
  declarations: [
    MainComponent,
    GraficaEjemploComponent,
    THComponent,
    FrComponent,
    UsComponent,
    IrComponent,
    HgComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ModulesModule
  ]
})
export class MainModule { }
