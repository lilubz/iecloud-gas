import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureManagementComponent } from './architecture-management.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    {
        path: 'architecture-management',
        redirectTo: 'architecture-management/mange-ment',
        pathMatch: 'full'
    },
    {
        path: 'mange-ment',
        component: ArchitectureManagementComponent,
        data: {
            title: '管理'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnterpriseManagementRoutingModule { }
