import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { RedirectionPageComponent } from './redirectionPage/redirectionPage.component';
import { LayoutComponent } from './layout/layout.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingCache  } from './app-routing.cache';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RedirectionPageComponent,
    LayoutComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: RouteReuseStrategy, useClass: AppRoutingCache }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
