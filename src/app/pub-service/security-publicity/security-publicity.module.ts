import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SecurityListComponent } from './security-list/security-list.component';
import { AddSecurityComponent } from './add-security/add-security.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    SecurityListComponent,
    AddSecurityComponent
  ],
  providers: [
  ]
})
export class SecurityPublicityModule { }
