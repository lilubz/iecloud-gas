import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CollaborativeComponent } from './collaborative.component';

import { CollaborativeRoutingModule } from './collaborative-routing.module';
import { MyAffairsComponent } from './my-affairs/my-affairs.component';
import { AllAffairsComponent } from './all-affairs/all-affairs.component';
import { ListComponent } from './component/list/list.component';
import { DetailsComponent } from './details/details.component';

import { CollaborativeService } from './collaborative.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CollaborativeRoutingModule
  ],
  declarations: [
    CollaborativeComponent,
    MyAffairsComponent,
    AllAffairsComponent,
    ListComponent,
    DetailsComponent
  ],
  providers: [
    CollaborativeService
  ]
})
export class CollaborativeModule { }
