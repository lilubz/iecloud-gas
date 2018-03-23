import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CollaborativeComponent } from './collaborative.component';

import { CollaborativeRoutingModule } from './collaborative-routing.module';
import { MyAffairsComponent } from './my-affairs/my-affairs.component';
import { AllAffairsComponent } from './all-affairs/all-affairs.component';
import { DetailsComponent } from './details/details.component';

import { CollaborativeService } from './collaborative.service';
import { AddAffairsComponent } from './add-affairs/add-affairs.component';
import { TimeoutSearchComponent } from './timeout-search/timeout-search.component';
import { MassesReportComponent } from './masses-report/masses-report.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // CollaborativeRoutingModule
  ],
  declarations: [
    CollaborativeComponent,
    MyAffairsComponent,
    AllAffairsComponent,
    DetailsComponent,
    AddAffairsComponent,
    TimeoutSearchComponent,
    MassesReportComponent
  ],
  providers: [
    CollaborativeService
  ]
})
export class CollaborativeModule { }
