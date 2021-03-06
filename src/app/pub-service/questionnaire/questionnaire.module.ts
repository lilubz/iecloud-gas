import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionListService } from './questionnaire-list/question-list.service';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';
import { SurveyResultComponent } from './survey-result/survey-result.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
  AddquestionComponent,
  QuestionnaireListComponent,
  QuestionnaireDetailsComponent,
  SurveyResultComponent
],
  providers: [
    QuestionListService
  ]
})
export class QuestionnaireModule { }











