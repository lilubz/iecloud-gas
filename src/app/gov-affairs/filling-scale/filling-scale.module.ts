import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillingScaleComponent } from './filling-scale.component';
import { FillingScaleListComponent } from './filling-scale-list.component';
import { LockScaleHistoryComponent } from './lock-scale-history/lock-scale-history.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SetScaleRuleComponent } from './set-scale-rule/set-scale-rule.component';
import { FillingScaleService } from './filling-scale.service';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [
    FillingScaleComponent,
    FillingScaleListComponent,
    LockScaleHistoryComponent,
    SetScaleRuleComponent
  ],
  providers: [
    FillingScaleService
  ]
})
export class FillingScaleModule { }
