import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { CylinderOverviewService } from './cylinder-overview.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../../../../core/userState.service';

@Component({
  selector: 'gas-cylinder-overview-enterprise',
  templateUrl: './cylinder-overview-enterprise.component.html'
})
export class CylinderOverviewEnterpriseComponent implements OnInit {
  loading = false;

  enterpriseCylinders: Array<{
    enterpriseName: string;
    totalCount: number;
    normalCount: number;
    expireCount: number;
    scrapCount: number;
    codeAbnormalCount: number;
    enterpriseNumber: string;
  }> = [];

  constructor(private cylinderOverviewService: CylinderOverviewService, private route: ActivatedRoute,
    private messageService: MessageService, private userStateService: UserStateService) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        // 企业管理员的organizationType为1，企业管理员和政府管理员获取企业数据时的接口不同。因为企业只需要获取自己企业的信息，而政府需要获取该区域下所有的企业信息，但这两个接口返回的数据结构是相同的。
        if (this.userStateService.getUser().organizationType === 1) {
          return this.cylinderOverviewService
            .getCylinderEnterpriseOverviewByOrganizationId({ organizationId: params.get('id') });
        } else {
          return this.cylinderOverviewService
            .getCylinderEnterpriseOverviewByAreaId({ regionId: params.get('id') });
        }
      }).subscribe(data => {
        if (data.status === 0) {
          this.enterpriseCylinders = data.data;
        } else {
          this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
        }
        this.loading = false;
      }, error => {
        this.messageService.add({ severity: 'error', summary: '获取信息异常', detail: error });
        this.loading = false;
      });
  }

  // TODO: 这里可能会有性能问题，因为首次加载会执行20次（4次调用*5列），再次点击会执行10次
  calculateTotal(prop: string, data: any) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      sum += element[prop];
    }
    return sum;
  }
}