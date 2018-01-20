import { UserStateService } from './../../../core/userState.service';
import { StatisticCylinderService } from './../statistic-cylinder.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from './../../../core/common-request.service';
import { SelectItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../core/util.service';

@Component({
  selector: 'gas-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.css']
})
export class DispatcherComponent implements OnInit {
  dispatcherCylinderList = [];

  regionList: SelectItem[] = [];
  selectedRegion = '';
  deliveryDateRange: SelectItem[] = [
    { label: '今年', value: 'year' },
    { label: '本月', value: 'month' },
  ];
  selectedDateRange = this.deliveryDateRange[0].value;

  calculateTotal = this.utilService.calculateTotal;
  loading = false;
  constructor(
    private commonRequestService: CommonRequestService,
    private statisticCylinderService: StatisticCylinderService,
    private messageService: MessageService,
    private userStateService: UserStateService,
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    // this.commonRequestService.getRegions().then(data => {
    //   if (data.status === 0) {
    //     this.regionList = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
    //     if (this.regionList.length > 1) {
    //       this.regionList.unshift(
    //         { label: this.userStateService.getUser().regionName, value: this.userStateService.getUser().regionId });
    //       // this.regionList.unshift(
    //       //   { label: '温州市', value: '' });
    //     }
    //     this.selectedRegion = this.regionList[0].value;
    //     this.getDeliveryStatistic();
    //   } else {
    //     this.messageService.add({ severity: 'warn', summary: '获取区域列表失败', detail: data.msg });
    //   }
    // });

    this.loading = true;
    this.getDispatcherCylinder();
  }

  // 获取配送量统计
  getDeliveryStatistic() {
    this.statisticCylinderService.getDeliveryStatistic({
      regionId: this.selectedRegion,
      range: this.selectedDateRange
    }).then(data => {
      console.log('获取配送量统计成功', data.data);
    });
  }

  // 获取送气工气瓶统计
  getDispatcherCylinder() {
    this.statisticCylinderService.getDispatcherCylinderCount().then(data => {
      if (data.status === 0) {
        this.dispatcherCylinderList = data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取送气工气瓶统计失败', detail: data.msg });
      }
      this.loading = false;
    });
  }
}
