import { Component, OnInit } from '@angular/core';

import { CylinderOverviewService } from './cylinder-overview.service';
@Component({
  selector: 'gas-cylinder-overview-county',
  templateUrl: './cylinder-overview-county.component.html',
  styleUrls: ['./cylinder-overview-county.component.css']
})
export class CylinderOverviewCountyComponent implements OnInit {

  countyCylinders: {
    areaName: string,
    cylinderNum: number,
    normalNum: number,
    expireNum: number,
    scrapNum: number,
    areaID: string
  }[] = [];


  constructor(private cylinderOverviewService: CylinderOverviewService) { }

  ngOnInit() {
    for (let i = 0; i < 11; i++) {
      this.countyCylinders.push(
        {
          areaName: '鹿城区',
          cylinderNum: 235,
          normalNum: 235,
          expireNum: 235,
          scrapNum: 235,
          areaID: 'string'
        }
      );
    }
  }

  getCountiesOverview() {
    this.cylinderOverviewService.getCountiesOverview({

    }).then(data => {
      if (data.status === 0) {
        this.countyCylinders = data.data.list;
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
