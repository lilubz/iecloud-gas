import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { CylinderOverviewService } from './cylinder-overview.service';

@Component({
  selector: 'gas-cylinder-overview-enterprise',
  templateUrl: './cylinder-overview-enterprise.component.html',
  styleUrls: ['./cylinder-overview-enterprise.component.css']
})
export class CylinderOverviewEnterpriseComponent implements OnInit {
  areaID;

  enterpriseCylinders: Array<{
    enterpriseName: string;
    cylinderNum: number;
    normalNum: number;
    expireNum: number;
    scrapNum: number;
    enterpriseID: string;
  }> = [];

  constructor(private cylinderOverviewService: CylinderOverviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.enterpriseCylinders = [
      {
        enterpriseName: '企业有限公司',
        cylinderNum: 1232,
        normalNum: 1232,
        expireNum: 1232,
        scrapNum: 1232,
        enterpriseID: '企业有限公司'
      }
    ];

    this.areaID = this.route.snapshot.paramMap.get('id');
    // this.getEnterprisesOverview();
  }

  getEnterprisesOverview() {
    console.log(this.areaID);
    this.cylinderOverviewService.getCountiesOverview({
      areaID: this.areaID
    }).then(data => {
      if (data.status === 0) {
        this.enterpriseCylinders = data.data.list;
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
