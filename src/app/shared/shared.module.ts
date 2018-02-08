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
  InputMaskModule,
  MegaMenuModule,
  MenuModule,
  MultiSelectModule,
  PanelModule,
  PaginatorModule,
  LightboxModule,
  SpinnerModule,
  TieredMenuModule,
  PickListModule,
  TreeModule,
  TreeNode,
  OverlayPanelModule,
  SharedModule as _SharedModule,
  ConfirmDialogModule,
  ToggleButtonModule,
  RadioButtonModule,
} from 'primeng/primeng';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DistrictsComponent } from './districts/districts.component';
import { PermissionRoleDirective } from './permission-role.directive';
import { DispatcherAutocompleteComponent } from './dispatcher-autocomplete/dispatcher-autocomplete.component';
import { DateFormat } from './dateFormat.pipe';

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
    InputMaskModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    PanelModule,
    PaginatorModule,
    LightboxModule,
    SpinnerModule,
    RouterModule,
    SpinnerModule,
    TieredMenuModule,
    ToggleButtonModule,
    RadioButtonModule,
    RadioButtonModule,
    PickListModule,
    TreeModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    _SharedModule
  ],
  declarations: [
    LoadingComponent,
    PageNotFoundComponent,
    DistrictsComponent,
    PermissionRoleDirective,
    DispatcherAutocompleteComponent,
    DateFormat
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
    ConfirmDialogModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    GrowlModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    PanelModule,
    PaginatorModule,
    LightboxModule,
    SpinnerModule,
    RouterModule,
    SpinnerModule,
    TieredMenuModule,
    ToggleButtonModule,
    RadioButtonModule,
    PickListModule,
    TreeModule,
    OverlayPanelModule,
    _SharedModule,
    ConfirmDialogModule,
    RadioButtonModule,

    LoadingComponent,
    PageNotFoundComponent,
    DistrictsComponent,
    PermissionRoleDirective,
    DispatcherAutocompleteComponent,
    DateFormat
  ]
})
export class SharedModule { }
