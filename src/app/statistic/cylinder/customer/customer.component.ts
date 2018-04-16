import { SelectItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { StatisticCylinderService } from '../statistic-cylinder.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Util } from '../../../core/util';
import { CommonRequestService } from '../../../core/common-request.service';
import { RoleType } from '../../../common/RoleType';

@Component({
  selector: 'gas-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  RoleType = RoleType;
  loading = false;
  customerStatistics = [];
  customerStatisticsFilter = [];
  regionList: SelectItem[] = [];
  selectedRegion;

  calculateTotal = this.utilService.calculateTotal;
  constructor(
    public statisticCylinderService: StatisticCylinderService,
    private messageService: MessageService,
    private commonRequestService: CommonRequestService,
    private utilService: Util
  ) { }

  ngOnInit() {

    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.regionList = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
        // if (this.regionList.length > 1) {
        //   this.regionList.unshift(
        //     { label: this.userStateService.getUser().regionName, value: this.userStateService.getUser().regionId });
        //   this.regionList.unshift(
        //     { label: '温州市', value: '' });
        // }
        this.regionList.unshift({ label: '全部', value: '' });
        this.selectedRegion = this.regionList[0].value;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取区域列表失败', detail: data.msg });
      }
    });
    this.loading = true;
    this.getCustomerCylinder();
  }

  getCustomerCylinder() {
    this.statisticCylinderService.getCustomerCylinderCount().then(data => {
      if (data.status === 0) {
        this.customerStatistics = data.data;
        this.customerStatisticsFilter = data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取用户气瓶统计失败', detail: data.msg });
      }
      this.loading = false;
    });
  }

  exportCustomerStatistic() {
    this.statisticCylinderService.getCustomerCylinderCount({
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.utilService.downloadFile(data.data);
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

  selectStatisticRegion(regionId) {
    if (regionId === '') {
      this.customerStatisticsFilter = this.customerStatistics;
      return;
    }

    this.customerStatisticsFilter = this.customerStatistics.filter(item => {
      if (item.regionId === regionId) {
        return true;
      }
      return false;
    });
  }

}
