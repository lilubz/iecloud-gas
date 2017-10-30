import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { MessageService } from 'primeng/components/common/messageservice';
import { CylinderOverviewService } from './cylinder-overview.service';

@Component({
  selector: 'gas-cylinder-overview-enterprise',
  templateUrl: './cylinder-overview-enterprise.component.html'
})
export class CylinderOverviewEnterpriseComponent implements OnInit {
  loading = false;

  enterpriseCylinders: Array<{
    enterpriseName: string;
    cylinderNum: number;
    normalNum: number;
    expireNum: number;
    scrapNum: number;
    enterpriseID: string;
  }> = [];

  constructor(private cylinderOverviewService: CylinderOverviewService, private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.cylinderOverviewService.getEnterprisesOverview({ areaID: params.get('id') });
      }).subscribe(data => {
        if (data.status === 0) {
          this.enterpriseCylinders = data.data;
        } else {
          this.messageService.add({ severity: 'error', summary: '获取信息失败', detail: data.msg });
        }
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
