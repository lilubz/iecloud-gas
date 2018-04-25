import { NgModule, } from '@angular/core';
import { SystemUserComponent } from './system-user.component';
import { SystemUserRoutingModule, } from './system-user.routing';
import { SharedModule } from '../../shared/shared.module';
import { UserSearchService } from './user-search/user-search.service';
import { UserOpeningService } from './user-opening/user-opening.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserOpeningComponent } from './user-opening/user-opening.component';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        SystemUserComponent,
        UserSearchComponent,
        UserOpeningComponent
        // TODO: add components
        // DemoComponent
    ],
    imports: [
      SharedModule
        // SystemUserRoutingModule,
    ],
    providers: [
      UserSearchService,
      UserOpeningService
        // TODO: and services
        // DemoService
    ]
})
export class SystemUserModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'system-user',
    loadChildren: './system-user/system-user.module#SystemUserModule',
    canActivate: [AuthGuard]
},

 */
