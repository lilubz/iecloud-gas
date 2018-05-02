import { NgModule, } from '@angular/core';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseRoutingModule, } from './enterprise.routing';
import { SharedModule } from '../../shared/shared.module';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';
import { EnterpriseDetailService } from './enterprise-detail/enterprise-detail.service';
import { EnterpriseFoundComponent } from './enterprise-found/enterprise-found.component';

@NgModule({
  declarations: [
    EnterpriseComponent,
    EnterpriseDetailComponent,
    EnterpriseFoundComponent,
    // TODO: add components
    // DemoComponent
  ],
  imports: [
    SharedModule,
    // EnterpriseRoutingModule,
  ],
  providers: [
    EnterpriseDetailService
    // TODO: and services
    // DemoService
  ]
})
export class EnterpriseModule { }
