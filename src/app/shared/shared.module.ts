import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  DataTableModule,
  DropdownModule,
  DialogModule,
  GrowlModule,
  InputTextModule,
  MegaMenuModule,
  MenuModule,
  PanelModule,
  TieredMenuModule,
  SharedModule as _SharedModule
} from 'primeng/primeng';

import { LoadingComponent } from './loading/loading.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    AutoCompleteModule,
    ButtonModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    CalendarModule,
    CheckboxModule,
    CommonModule,
    DropdownModule,
    DataTableModule,
    DialogModule,
    FormsModule,
    GrowlModule,
    InputTextModule,
    MegaMenuModule,
    MenuModule,
    PanelModule,
    RouterModule,
    TieredMenuModule,
    _SharedModule,
  ],
  declarations: [
    LayoutComponent,
    LoadingComponent
  ],

  exports: [
    AutoCompleteModule,
    // BrowserAnimationsModule,
    // BrowserModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    CommonModule,
    DataTableModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    GrowlModule,
    InputTextModule,
    MegaMenuModule,
    MenuModule,
    PanelModule,
    RouterModule,
    TieredMenuModule,
    _SharedModule,

    LayoutComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
