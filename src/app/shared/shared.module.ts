import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  FileUploadModule,
  GrowlModule,
  InputTextareaModule,
  InputTextModule,
  MegaMenuModule,
  MenuModule,
  PanelModule,
  SpinnerModule,
  TieredMenuModule,
  SharedModule as _SharedModule,
} from 'primeng/primeng';

import { LoadingComponent } from './loading/loading.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DistrictsComponent } from './districts/districts.component';

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
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    GrowlModule,
    InputTextareaModule,
    InputTextModule,
    MegaMenuModule,
    MenuModule,
    PanelModule,
    SpinnerModule,
    RouterModule,
    TieredMenuModule,
    _SharedModule
  ],
  declarations: [
    LayoutComponent,
    LoadingComponent,
    PageNotFoundComponent,
    DistrictsComponent
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
    FileUploadModule,
    FormsModule,
    FileUploadModule,
    GrowlModule,
    InputTextareaModule,
    InputTextModule,
    MegaMenuModule,
    MenuModule,
    PanelModule,
    SpinnerModule,
    RouterModule,
    TieredMenuModule,
    _SharedModule,
    LayoutComponent,
    LoadingComponent,
    PageNotFoundComponent,
    DistrictsComponent
  ]
})
export class SharedModule { }
