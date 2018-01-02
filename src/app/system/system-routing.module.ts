import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'message',
        component: MessagesComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
