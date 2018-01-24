import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../../../../core/userState.service';
import { CustomerOverviewService } from './customer-overview.service';
@Component({
  selector: 'gas-customer-overview-county',
  templateUrl: './customer-overview-county.component.html'
})
export class CustomerOverviewCountyComponent implements OnInit {
  loading: boolean;
  countyCustomers: {
    regionName: string,
    userCount: number,
    regionId: string
  }[] = [];

  constructor(private customerOverviewService: CustomerOverviewService, private messageService: MessageService,
    private userStateService: UserStateService) { }

  ngOnInit() {
    this.loading = true;
    this.getCountiesOverview();
  }

  getCountiesOverview() {
    this.customerOverviewService.getCountiesOverview({}).then(data => {
      if (data.status === 0) {
        this.countyCustomers = data.data;
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
