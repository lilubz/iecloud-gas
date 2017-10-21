import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SuperviseRoutingModule } from './supervise-routing.module';

import { SuperviseComponent } from './supervise.component';
import { CylinderModule } from './cylinder/cylinder.module';

@NgModule({
  imports: [
    SharedModule,
    SuperviseRoutingModule,
    CylinderModule
  ],
  declarations: [
    SuperviseComponent
  ],
  providers: [

  ]
})
export class SuperviseModule { }
