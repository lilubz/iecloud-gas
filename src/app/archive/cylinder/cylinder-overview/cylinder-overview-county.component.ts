import { Component, OnInit } from '@angular/core';

import { CylinderOverviewService } from './cylinder-overview.service';
import { LoadingComponent } from './../../../shared/loading/loading.component';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../../../core/userState.service';
import { CylinderOverviewVO } from '../../../components/cylinder-overview-table/cylinder-overview.model';
@Component({
  selector: 'gas-cylinder-overview-county',
  templateUrl: './cylinder-overview-county.component.html'
})
export class CylinderOverviewCountyComponent implements OnInit {
  loading = false;
  countyCylinders: CylinderOverviewVO[] = [];

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
    let areaID = null;
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
}
