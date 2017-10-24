import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerOverviewService } from './customer-overview.service';
@Component({
  selector: 'gas-customer-overview-enterprise',
  templateUrl: './customer-overview-enterprise.component.html',
  styleUrls: ['./customer-overview-enterprise.component.css']
})
export class CustomerOverviewEnterpriseComponent implements OnInit {
  areaID: string;

  enterpriseCustomers: Array<{
    enterpriseName: string;
    customerNum: number;
    enterpriseID: string;
  }> = [];

  constructor(private customerOverviewService: CustomerOverviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.enterpriseCustomers = [
      {
        enterpriseName: '企业有限公司',
        customerNum: 1232,
        enterpriseID: '企业有限公司'
      }
    ];

    this.areaID = this.route.snapshot.paramMap.get('id');
    // this.getEnterprisesOverview();
  }

  getEnterprisesOverview() {
    console.log(this.areaID);
    this.customerOverviewService.getCountiesOverview({
      areaID: this.areaID
    }).then(data => {
      if (data.status === 0) {
        this.enterpriseCustomers = data.data.list;
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
