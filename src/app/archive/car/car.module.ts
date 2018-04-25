import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';

import { CarComponent } from './car.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule,
    // CarRoutingModule,
  ],
  declarations: [
    CarComponent,
    SearchComponent
  ],
  providers: [],
  exports: [
    // CylinderComponent
  ]
})
export class CarModule { }
