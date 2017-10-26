import { Component, OnInit } from '@angular/core';

import { CustomerOverviewService } from './customer-overview.service';
@Component({
  selector: 'gas-customer-overview-county',
  templateUrl: './customer-overview-county.component.html'
})
export class CustomerOverviewCountyComponent implements OnInit {
  countyCustomers: {
    areaName: string,
    customerNum: number,
    areaID: string
  }[] = [];

  constructor(private customerOverviewService: CustomerOverviewService) { }

  ngOnInit() {
    for (let i = 0; i < 11; i++) {
      this.countyCustomers.push(
        {
          areaName: '鹿城区',
          customerNum: 235,
          areaID: 'string'
        }
      );
    }
  }

  getCountiesOverview() {
    this.customerOverviewService.getCountiesOverview({
      areaID: '330300'// 330300--温州市id
    }).then(data => {
      if (data.status === 0) {
        this.countyCustomers = data.data.list;
      } else {

      }
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
