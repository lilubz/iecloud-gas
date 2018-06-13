import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollaborativeComponent } from './collaborative/collaborative.component';
import { MyAffairsComponent } from './collaborative/my-affairs/my-affairs.component';
import { AllAffairsComponent } from './collaborative/all-affairs/all-affairs.component';
import { AddAffairsComponent } from './collaborative/add-affairs/add-affairs.component';
import { ReportComponent } from './report/report.component';
import { ManageComponent } from './report/manage/manage.component';
import { StatisticsComponent } from './report/statistics/statistics.component';
import { SubmitComponent } from './report/submit/submit.component';
import { DetailsComponent } from './collaborative/details/details.component';
import { DetailsComponent as ReportDetailsComponent } from './report/details/details.component';
import { TimeoutSearchComponent } from './collaborative/timeout-search/timeout-search.component';
import { MassesReportComponent } from './collaborative/masses-report/masses-report.component';
import { AnalysisComponent } from './report/analysis/analysis.component';
import { FillingScaleComponent } from './filling-scale/filling-scale.component';
import { FillingScaleListComponent } from './filling-scale/filling-scale-list.component';
import { LockScaleHistoryComponent } from './filling-scale/lock-scale-history/lock-scale-history.component';
import { SetScaleRuleComponent } from './filling-scale/set-scale-rule/set-scale-rule.component';

// 预警模块
import { WarningComponent } from './warning/warning.component';
import { GcExcessComponent } from './warning/gc-excess/gc-excess.component';
import { ThresholdComponent } from './warning/threshold/threshold.component';
import { GcDetectionComponent } from './warning/gc-detection/gc-detection.component';
import { GcScrapComponent } from './warning/gc-scrap/gc-scrap.component';
import { LicenseComponent } from './warning/license/license.component';
import { WarningRecordComponent } from './warning/warning-record/warning-record.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '监管事务'
    },
    children: [
      {
        path: '',
        redirectTo: 'collaborative',
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
            path: '',
            redirectTo: 'my-affairs',
            pathMatch: 'full'
          },
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
            path: 'add-affairs',
            component: AddAffairsComponent,
            data: {
              title: '添加事务'
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
            path: 'timeout-search',
            component: TimeoutSearchComponent,
            data: {
              title: '事务超期历史查询'
            },
          },
          {
            path: 'masses-report',
            component: MassesReportComponent,
            data: {
              title: '群众举报'
            },
          },
        ],
      },
      {
        path: 'report',
        component: ReportComponent,
        data: {
          title: '报表管理'
        },
        children: [
          {
            path: '',
            redirectTo: 'manage',
            pathMatch: 'full'
          },
          {
            path: 'manage',
            component: ManageComponent,
            data: {
              title: '报表管理'
            }
          },
          {
            path: 'statistics',
            component: StatisticsComponent,
            data: {
              title: '报表统计'
            }
          },
          {
            path: 'submit',
            component: SubmitComponent,
            data: {
              title: '报表提交'
            }
          },
          {
            path: 'details',
            component: ReportDetailsComponent,
            data: {
              title: '报表详情'
            }
          },
          {
            path: 'analysis',
            component: AnalysisComponent,
            data: {
              title: '报表统计下载'
            }
          },
        ]
      },
      {
        path: 'cylinder-warning',
        redirectTo: 'cylinder-warning/1',
        pathMatch: 'full'
      },
      {
        path: 'warning',
        component: WarningComponent,
        data: {
          title: '预警管理'
        },
        children: [
          {
            path: '',
            redirectTo: 'gc-count',
            pathMatch: 'full'
          },
          {
            path: 'gc-count',
            children: [
              {
                path: '',
                redirectTo: 'gc-excess',
                pathMatch: 'full'
              },
              {
                path: 'gc-excess',
                component: GcExcessComponent,
                data: {
                  title: '气瓶超量预警'
                },
              },
              {
                path: 'threshold',
                component: ThresholdComponent,
                data: {
                  title: '气瓶阈值设置'
                },
              },
            ]
          },
          {
            path: 'gc-detection',
            component: GcDetectionComponent,
            data: {
              title: '气瓶检测超期预警'
            },
          },
          {
            path: 'gc-scrap',
            component: GcScrapComponent,
            data: {
              title: '气瓶报废预警'
            },
          },
          {
            path: 'license',
            component: LicenseComponent,
            data: {
              title: '许可证超期预警'
            },
          },
          {
            path: 'warning-record',
            component: WarningRecordComponent,
            data: {
              title: '安检预警记录'
            },
          },
        ]
      },
      {
        path: 'filling-scale',
        component: FillingScaleComponent,
        data: {
          title: '充装监管'
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          },
          {
            path: 'list',
            component: FillingScaleListComponent,
            data: {
              title: '充装秤管理'
            }
          },
          {
            path: 'history',
            component: LockScaleHistoryComponent,
            data: {
              title: '锁称记录'
            }
          },
          {
            path: 'set-rule',
            component: SetScaleRuleComponent,
            data: {
              title: '充装监管规则设置'
            }
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovAffairsRoutingModule { }
