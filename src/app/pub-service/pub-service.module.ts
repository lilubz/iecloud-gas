import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PubserviceRoutingModule } from './pub-service-routing.module';
import { PubServiceComponent } from './pub-service.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SecurityPublicityComponent } from './security-publicity/security-publicity.component';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { SecurityPublicityModule } from './security-publicity/security-publicity.module';
import { MessagesComponent } from './messages/messages.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuestionnaireModule,
    SecurityPublicityModule,
    PubserviceRoutingModule,
  ],
  declarations: [
    PubServiceComponent,
    QuestionnaireComponent,
    SecurityPublicityComponent,
    MessagesComponent
  ],
  providers: [

  ]
})
export class PubServiceModule { }
