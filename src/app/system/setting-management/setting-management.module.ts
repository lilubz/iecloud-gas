import { NgModule, } from '@angular/core';
import { SettingManagementComponent } from './setting-management.component';
import { SettingManagementRoutingModule, } from './setting-management.routing';
import { GISSettingService } from './GIS-setting/GIS-setting.service';
import { GISSettingComponent } from './GIS-setting/GIS-setting.component';
import { SharedModule } from '../../shared/shared.module';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        SettingManagementComponent,
        GISSettingComponent
        // TODO: add components
        // DemoComponent
    ],
    imports: [
      SharedModule
        // SettingManagementRoutingModule,
    ],
    providers: [
      GISSettingService,
        // TODO: and services
        // DemoService
    ]
})
export class SettingManagementModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'setting-management',
    loadChildren: './setting-management/setting-management.module#SettingManagementModule',
    canActivate: [AuthGuard]
},

 */
