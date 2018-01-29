import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarComponent } from './car.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'car',
    redirectTo: 'car/search',
    pathMatch: 'full'
  },
  {
    path: 'car',
    component: CarComponent,
    data: {
      title: '监管档案'
    },
    children: [
      {
        path: 'search',
        component: SearchComponent,
        data: {
          title: '搜索车辆'
        }
      },
    ]
  },
  // {
  //   path: 'detail/',
  //   redirectTo: 'detail'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
