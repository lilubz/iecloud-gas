import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../../../core/userState.service';
import { CustomerOverviewService } from './customer-overview.service';
@Component({
  selector: 'gas-customer-overview-enterprise',
  templateUrl: './customer-overview-enterprise.component.html'
})
export class CustomerOverviewEnterpriseComponent implements OnInit {
  loading = false;

  enterpriseCustomers: Array<{
    enterpriseNumber: string;
    enterpriseName: number;
    userCountByEnterprise: string;
  }> = [];

  constructor(private customerOverviewService: CustomerOverviewService, private route: ActivatedRoute,
    private messageService: MessageService, private userStateService: UserStateService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        if (this.userStateService.getUser().organizationType === 1) {
          return this.customerOverviewService
            .getEnterprisesOverviewByOrganizationId({ organizationId: params.get('id') });
        } else {
          return this.customerOverviewService
            .getEnterprisesOverviewByReginId({ regionId: params.get('id') });
        }
      }).subscribe(data => {
        if (data.status === 0) {
          this.enterpriseCustomers = data.data;
        } else {
          this.messageService.add({ severity: 'error', summary: '获取信息失败', detail: data.msg });
        }
        this.loading = false;
      });
  }

  // TODO:这里可能会有性能问题，因为首次加载会执行20次（4次调用*5列），再次点击会执行10次
  calculateTotal(prop: string, data: any) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      sum += element[prop];
    }
    return sum;
  }
}
