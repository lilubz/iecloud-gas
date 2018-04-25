import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  ButtonModule,
  CheckboxModule,
  DataTableModule,
  DropdownModule,
  DialogModule,
  FileUploadModule,
  GrowlModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  InputMaskModule,
  MegaMenuModule,
  MenuModule,
  MultiSelectModule,
  PanelModule,
  PaginatorModule,
  EditorModule,
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
  TooltipModule,
} from 'primeng/primeng';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DistrictsComponent } from './districts/districts.component';
import { PermissionRoleDirective } from './permission-role.directive';
import { DispatcherAutocompleteComponent } from './dispatcher-autocomplete/dispatcher-autocomplete.component';
import { DateFormat } from './dateFormat.pipe';
import { ExportFileDirective } from './export-file.directive';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AutoCompleteModule } from './autocomplete/autocomplete';
import { HeaderComponent } from './header/header.component';
import { DeliveryRegionCascadeComponent } from './delivery-region-cascade/delivery-region-cascade.component';
import { ExplanationComponent } from './explanation/explanation.component';
import { CalendarModule } from './calendar/calendar';

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
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    MegaMenuModule,
    MenuModule,
    EditorModule,
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
    _SharedModule,
    TooltipModule
  ],
  declarations: [
    LoadingComponent,
    PageNotFoundComponent,
    DistrictsComponent,
    PermissionRoleDirective,
    DispatcherAutocompleteComponent,
    DateFormat,
    ExportFileDirective,
    BreadcrumbComponent,
    HeaderComponent,
    DeliveryRegionCascadeComponent,
    ExplanationComponent,
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
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    InputMaskModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    PanelModule,
    EditorModule,
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
    TooltipModule,

    LoadingComponent,
    PageNotFoundComponent,
    DistrictsComponent,
    PermissionRoleDirective,
    DispatcherAutocompleteComponent,
    DateFormat,
    ExportFileDirective,
    BreadcrumbComponent,
    HeaderComponent,
    DeliveryRegionCascadeComponent,
    ExplanationComponent,
  ]
})
export class SharedModule { }
