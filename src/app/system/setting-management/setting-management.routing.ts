import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingManagementComponent, } from './setting-management.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    {
        path: '', component: SettingManagementComponent,
        children: [
            // TODO: add route
            // { path: 'demo', component: DemoComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingManagementRoutingModule { }
