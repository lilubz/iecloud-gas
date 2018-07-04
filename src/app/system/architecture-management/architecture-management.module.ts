import { NgModule, } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MangeMentComponent } from './mange-ment/mange-ment.component';

@NgModule({
  declarations: [
    MangeMentComponent
  ],
  imports: [
    SharedModule,
    // EnterpriseManagementRoutingModule,
  ],
  providers: [
  ]
})
export class EnterpriseManagementModule { }
