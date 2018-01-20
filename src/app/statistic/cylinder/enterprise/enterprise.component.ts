import { Component, OnInit } from '@angular/core';
import { CylinderOverviewService } from '../../../archive/cylinder/cylinder-overview/cylinder-overview.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from '../../../core/userState.service';

@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
  providers: [
    CylinderOverviewService
  ]
})
export class EnterpriseComponent implements OnInit {
  loading = false;
  countyCylinders: {
    name: string,
    totalCount: number,
    normalCount: number,
    expireCount: number,
    scrapCount: number,
    codeAbnormalCount: number,
    regionId: string,
    parentRegionId: string,
  }[] = [];


  constructor(
    private cylinderOverviewService: CylinderOverviewService,
    private messageService: MessageService,
    private userStateService: UserStateService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getCountiesOverview();
  }

  getCountiesOverview() {
    let areaID = '';
    if (this.userStateService.getUser()) {
      areaID = this.userStateService.getUser().regionId;
    }
    this.cylinderOverviewService.getCountiesOverview({})
      .then(data => {
        if (data.status === 0) {
          this.countyCylinders = data.data;
        } else {
          this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
        }
        this.loading = false;
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '获取信息异常', detail: error });
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
