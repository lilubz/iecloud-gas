import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseComponent } from './enterprise.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { LoginComponent } from '../login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EnterpriseRoutingModule
  ],
  declarations: [
    EnterpriseComponent,
    HomeComponent,
    LayoutComponent
  ],
  providers: [

  ]
})
export class EnterpriseModule { }
