import { NgModule } from '@angular/core';

import { HttpService } from "./http.service";
import { API } from "./api";

@NgModule({
  imports: [

  ],
  providers: [
    HttpService,
  ]
})
export class CoreModule { }
