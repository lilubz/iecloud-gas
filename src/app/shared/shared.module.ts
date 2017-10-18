import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AutoCompleteModule } from "primeng/primeng";

import { LoadingComponent } from './loading/loading.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    AutoCompleteModule,
  ],
  declarations: [
    LoadingComponent,
    LayoutComponent
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,

    AutoCompleteModule,

    LoadingComponent
  ]
})
export class SharedModule { }
