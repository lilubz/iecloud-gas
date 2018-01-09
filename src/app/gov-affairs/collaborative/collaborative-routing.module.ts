import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollaborativeComponent } from './collaborative.component';
import { MyAffairsComponent } from './my-affairs/my-affairs.component';
import { AllAffairsComponent } from './all-affairs/all-affairs.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'collaborative',
    redirectTo: 'collaborative/my-affairs',
    pathMatch: 'full'
  },
  {
    path: 'collaborative',
    component: CollaborativeComponent,
    data: {
      title: '协同管理'
    },
    children: [
      {
        path: 'my-affairs',
        component: MyAffairsComponent,
        data: {
          title: '我的事务'
        },
      },
      {
        path: 'all-affairs',
        component: AllAffairsComponent,
        data: {
          title: '所有事务'
        },
      },
      {
        path: 'details',
        component: DetailsComponent,
        data: {
          title: '事务详情'
        },
      },
      {
        path: '**',
        redirectTo: 'collaborative/my-affairs',
        data: {
          title: '所有事务'
        },
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborativeRoutingModule { }
