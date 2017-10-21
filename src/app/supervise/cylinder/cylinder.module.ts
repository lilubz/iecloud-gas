import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CylinderRoutingModule } from './cylinder-routing.module';

import { CylinderComponent } from './cylinder.component';
import { CylinderOverviewComponent } from './cylinder-overview/cylinder-overview.component';
import { CylinderListComponent } from './cylinder-list/cylinder-list.component';
import { CylinderDetailComponent } from './cylinder-detail/cylinder-detail.component';

@NgModule({
  imports: [
    SharedModule,
    CylinderRoutingModule
  ],
  declarations: [
    CylinderComponent,
    CylinderDetailComponent,
    CylinderListComponent,
    CylinderOverviewComponent
  ],
  providers: [

  ],
  exports: [
    // CylinderComponent
  ]
})
export class CylinderModule { }
