import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CylinderOverviewTableComponent } from './cylinder-overview-table/cylinder-overview-table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CylinderOverviewTableComponent,
  ],
  declarations: [
    CylinderOverviewTableComponent,
  ]
})
export class ComponentsModule { }
