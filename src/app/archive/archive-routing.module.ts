import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderComponent } from './cylinder/cylinder.component';
import { ArchiveComponent } from './archive.component';
import { CylinderDetailComponent } from './cylinder/cylinder-detail/cylinder-detail.component';
import { CylinderListComponent } from './cylinder/cylinder-list/cylinder-list.component';
import { CylinderOverviewCountyComponent } from './cylinder/cylinder-overview/cylinder-overview-county.component';
import { CylinderOverviewEnterpriseComponent } from './cylinder/cylinder-overview/cylinder-overview-enterprise.component';
import { CylinderOverviewService } from './cylinder/cylinder-overview/cylinder-overview.service';
import { CustomerOverviewService } from './customer/customer-overview/customer-overview.service';
import { CustomerOverviewCountyComponent } from './customer/customer-overview/customer-overview-county.component';
import { CustomerOverviewEnterpriseComponent } from './customer/customer-overview/customer-overview-enterprise.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EnterpriseDetailComponent } from './enterprise/enterprise-detail/enterprise-detail.component';
import { CarComponent } from './car/car.component';
import { DispatcherComponent } from './employee/dispatcher.component';
import { GasHolderComponent } from './gasHolder/gasHolder.component';
import { FillingScaleListComponent } from './filling-scale-list/filling-scale-list.component';
import { EnterpriseFoundComponent } from './enterprise/enterprise-found/enterprise-found.component';
import { GasHolderStationComponent } from './gas-holder-station/gas-holder-station.component';
import { SupplyStationComponent } from './supply-station/supply-station.component';
import { UsingCylinderComponent } from './customer/using-cylinder/using-cylinder.component';
import { EnterpriseListComponent } from './enterprise/enterprise-list/enterprise-list.component';
import { GasHolderStationDetailComponent } from './gas-holder-station/gas-holder-station-detail/gas-holder-station-detail.component';
import { DispatcherDetailComponent } from './employee/dispatcher-detail/dispatcher-detail.component';
import { SupplyStationDetailComponent } from './supply-station/supply-station-detail/supply-station-detail.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '基础档案'
    },
    children: [
      {
        path: '',
        redirectTo: 'cylinder/overview',
        pathMatch: 'full'
      },
      {
        path: 'cylinder',
        component: CylinderComponent,
        data: {
          title: '气瓶档案'
        },
        children: [
          {
            path: '',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'detail',
            component: CylinderDetailComponent,
            data: {
              title: '气瓶详情'
            }
          },
          {
            path: 'list',
            component: CylinderListComponent,
            data: {
              title: '气瓶列表',
              keep: true
            },
          },
          {
            path: 'overview',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'overview/county',
            component: CylinderOverviewCountyComponent,
            canActivate: [CylinderOverviewService],
            data: {
              title: '区域概览'
            },
          },
          {
            path: 'overview/enterprise/:id',
            component: CylinderOverviewEnterpriseComponent,
            data: {
              title: '企业概览'
            },
          },
        ]
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: '用户档案'
        },
        children: [
          {
            path: '',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'detail',
            // data: {
            //   title: '用户详情'
            // },
            children: [
              {
                path: '',
                redirectTo: 'detail',
                pathMatch: 'full'
              },
              {
                path: 'customerDetail',
                component: CustomerDetailComponent,
                data: {
                  title: '用户详情'
                }
              },
              {
                path: 'usingCylinder',
                component: UsingCylinderComponent,
                data: {
                  title: '在用气瓶详情'
                },
              },
            ]

          },
          {
            path: 'list',
            component: CustomerListComponent,
            data: {
              title: '用户列表',
              keep: true
            },
          },
          {
            path: 'overview',
            redirectTo: 'overview/county',
            pathMatch: 'full'
          },
          {
            path: 'overview/county',
            component: CustomerOverviewCountyComponent,
            canActivate: [CustomerOverviewService],
            data: {
              title: '区域概览'
            },
          },
          {
            path: 'overview/enterprise/:id',
            component: CustomerOverviewEnterpriseComponent,
            data: {
              title: '企业概览'
            },
          },
        ]
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent,
        data: {
          title: '企业档案'
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: EnterpriseListComponent,
            data: {
              title: '企业列表',
              keep: true
            },
          },
          {
            path: 'detail',
            component: EnterpriseDetailComponent,
            data: {
              title: '企业详情',
            },
          },
          {
            path: 'enterpriseFound',
            component: EnterpriseFoundComponent,
            data: {
              title: '企业详情'
            },
          },
        ]
      },
      {
        path: 'car',
        component: CarComponent,
        data: {
          title: '车辆信息',
          keep: true
        }
      },
      {
        path: 'employee',
        data: {
          title: '送气工信息',
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: DispatcherComponent,
            data: {
              title: '送气工列表',
              keep: true
            },
          },
          {
            path: 'detail',
            component: DispatcherDetailComponent,
            data: {
              title: '送气工详情',
            },
          },
        ]
      },
      {
        path: 'gasHolder',
        component: GasHolderComponent,
        data: {
          title: '储气罐档案',
          keep: true
        },
      },
      {
        path: 'gasHolderStation',
        data: {
          title: '储配站档案',
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: GasHolderStationComponent,
            data: {
              title: '储配站列表',
              keep: true
            },
          },
          {
            path: 'detail',
            component: GasHolderStationDetailComponent,
            data: {
              title: '储配站详情',
            },
          },
        ],
      },
      {
        path: 'supplyStation',
        data: {
          title: '供应站档案',
          keep: true
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: SupplyStationComponent,
            data: {
              title: '供应站列表',
              keep: true
            },
          },
          {
            path: 'detail',
            component: SupplyStationDetailComponent,
            data: {
              title: '供应站详情',
            },
          },
        ],
      },
      {
        path: 'filling-scale',
        component: FillingScaleListComponent,
        data: {
          title: '充装秤档案',
          keep: true
        },
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'cylinder/overview',
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule { }
