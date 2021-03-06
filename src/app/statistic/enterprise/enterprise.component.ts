import { UserStateService } from './../../core/userState.service';
import { Component, OnInit } from '@angular/core';
import { CommonRequestService } from '../../core/common-request.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { CylinderOverviewService } from './enterprise.service';
import { Params } from '@angular/router';
import { Util } from '../../core/util';
import { RoleType } from '../../common/RoleType';
@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
  providers: [CylinderOverviewService]
})
export class EnterpriseComponent implements OnInit {
  RoleType = RoleType;
  cities: SelectItem[] = [];
  selectedCities: string;
  datas: any = [];
  inflatableCount: number;
  dispatcherCount: number;
  customerCount: number;
  loading = false;

  constructor(
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private cylinderOverviewService: CylinderOverviewService,
    private userStateService: UserStateService,
    private util: Util,
  ) { }

  ngOnInit() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.cities = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
        // if (this.cities.length > 1) {
        //   this.cities.unshift(
        //     { label: this.userStateService.getUser().regionName, value: this.userStateService.getUser().regionId });
        // }
        this.selectedCities = this.cities[0].value;
        this.loading = true;
        this.getBusinessId();
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }
    });
  }

  // 获取企业信息统计
  getBusinessId() {
    this.cylinderOverviewService.getBusinessOverview({
      regionId: this.selectedCities, // 根据参数返回
    }).then(data => {
      if (data.status === 0) {
        this.datas = data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }
      this.loading = false;
    });
  }

  // 导出企业信息统计
  exportEnterpriseStatistic() {
    this.cylinderOverviewService.getBusinessOverview({
      regionId: this.selectedCities, // 根据参数返回
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      }
    });
  }

  calculateTotal(prop: string, datas: any) {
    let sum = 0;
    for (let i = 0; i < datas.length; i++) {
      const element = datas[i];
      sum += element[prop];
    }
    return sum;
  }

}
