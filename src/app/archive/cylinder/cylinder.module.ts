import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { CylinderComponent } from './cylinder.component';
import { CylinderListComponent } from './cylinder-list/cylinder-list.component';
import { CylinderDetailComponent } from './cylinder-detail/cylinder-detail.component';
import { CylinderOverviewEnterpriseComponent } from './cylinder-overview/cylinder-overview-enterprise.component';
import { CylinderOverviewCountyComponent } from './cylinder-overview/cylinder-overview-county.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    CylinderComponent,
    CylinderDetailComponent,
    CylinderListComponent,
    CylinderOverviewEnterpriseComponent,
    CylinderOverviewCountyComponent
  ],
  providers: [
  ],
  exports: [
    // CylinderComponent
  ]
})
export class CylinderModule { }
