import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CylinderOverviewTableComponent } from './cylinder-overview-table/cylinder-overview-table.component';
import { SharedModule } from '../shared/shared.module';
import { FillingScaleListComponent } from './filling-scale-list/filling-scale-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CylinderOverviewTableComponent,
    FillingScaleListComponent
  ],
  declarations: [
    CylinderOverviewTableComponent,
    FillingScaleListComponent
  ]
})
export class ComponentsModule { }
