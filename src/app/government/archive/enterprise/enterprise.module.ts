import { NgModule, } from '@angular/core';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseRoutingModule, } from './enterprise.routing';
import { SharedModule } from '../../../shared/shared.module';
import { EnterpriseDetailComponent } from './enterprise-detail/enterprise-detail.component';
import { EnterpriseDetailService } from './enterprise-detail/enterprise-detail.service';

@NgModule({
    declarations: [
        EnterpriseComponent,
        EnterpriseDetailComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        EnterpriseRoutingModule,
        SharedModule,
    ],
    providers: [
      EnterpriseDetailService
        // TODO: and services
        // DemoService
    ]
})
export class EnterpriseModule { }
