import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CylinderRoutingModule } from './cylinder-routing.module';

import { CylinderComponent } from './cylinder.component';
import { CylinderListComponent } from './cylinder-list/cylinder-list.component';
import { CylinderDetailComponent } from './cylinder-detail/cylinder-detail.component';
import { CylinderOverviewEnterpriseComponent } from './cylinder-overview/cylinder-overview-enterprise.component';
import { CylinderOverviewCountyComponent } from './cylinder-overview/cylinder-overview-county.component';

import { CylinderOverviewService } from './cylinder-overview/cylinder-overview.service';
@NgModule({
  imports: [
    SharedModule,
    CylinderRoutingModule,

  ],
  declarations: [
    CylinderComponent,
    CylinderDetailComponent,
    CylinderListComponent,
    CylinderOverviewEnterpriseComponent,
    CylinderOverviewCountyComponent
  ],
  providers: [
    CylinderOverviewService
  ],
  exports: [
    // CylinderComponent
  ]
})
export class CylinderModule { }
