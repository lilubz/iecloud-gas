import { NgModule, } from '@angular/core';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseRoutingModule, } from './enterprise.routing';
import { SharedModule } from '../../shared/shared.module';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { EnterpriseFoundComponent } from './enterprise-found/enterprise-found.component';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';

@NgModule({
  declarations: [
    EnterpriseComponent,
    EnterpriseListComponent,
    EnterpriseFoundComponent,
    EnterpriseDetailComponent,
    // TODO: add components
    // DemoComponent
  ],
  imports: [
    SharedModule,
    // EnterpriseRoutingModule,
  ],
  providers: [
    EnterpriseService
    // TODO: and services
    // DemoService
  ]
})
export class EnterpriseModule { }
