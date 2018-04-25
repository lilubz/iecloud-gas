import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SecurityPublicityComponent } from './security-publicity/security-publicity.component';
import { AddquestionComponent } from './questionnaire/addquestion/addquestion.component';
import { QuestionnaireListComponent } from './questionnaire/questionnaire-list/questionnaire-list.component';
import { SecurityListComponent } from './security-publicity/security-list/security-list.component';
import { AddSecurityComponent } from './security-publicity/add-security/add-security.component';
// import { StatisticComponent } from '../statistic/statistic.component';

import {QuestionnaireDetailsComponent} from './questionnaire/questionnaire-details/questionnaire-details.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '公众服务'
    },
    children: [
      {
        path: '',
        redirectTo: 'questionnaire',
        pathMatch: 'full'
      },
      {
        path: 'questionnaire',
        component: QuestionnaireComponent,
        data: {
          title: '调查问卷'
        },
        children: [
          {
            path: '',
            redirectTo: 'questionnaire-list',
            pathMatch: 'full'
          },
          {
            path: 'questionnaire-list',
            component: QuestionnaireListComponent,
            data: {
              title: '问卷列表'
            },
          },
          {
            path: 'addquestion',
            component: AddquestionComponent,
            data: {
              title: '添加问题'
            },
          },
          {
            path: 'questionnaire-details/:id',
            component: QuestionnaireDetailsComponent,
            data: {
              title: '问卷详情'
            },
          }
        ]
      },
      // {
      //   path: 'security-publicity',
      //   component: SecurityPublicityComponent,
      //   data: {
      //     title: '安全宣传'
      //   },
      // }
      ]
          },
    ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubserviceRoutingModule { }
