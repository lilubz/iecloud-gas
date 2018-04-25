import { UserStateService } from './../../core/userState.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { CommonRequestService } from '../../core/common-request.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { StatisticAffairService } from './statistic-affair.service';

@Component({
  selector: 'gas-affair',
  templateUrl: './affair.component.html',
  styleUrls: ['./affair.component.scss'],
  providers: [StatisticAffairService]
})
export class AffairComponent implements OnInit {
  regionList: SelectItem[] = [];
  deliveryDateRange: SelectItem[] = [
    { label: '今年', value: '1' },
    { label: '最近半年', value: '2' },
    { label: '本月', value: '3' },
  ];
  selectedRegionId = '';
  selectedDateRange = this.deliveryDateRange[0].value;
  affairStatistics = [];
  loading = false;
  constructor(
    private commonRequestService: CommonRequestService,
    private statisticAffairService: StatisticAffairService,
    private messageService: MessageService,
    private userStateService: UserStateService
  ) { }

  ngOnInit() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.regionList = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
        if (this.regionList.length > 1) {
          this.regionList.unshift(
            { label: this.userStateService.getUser().regionName, value: this.userStateService.getUser().regionId });
          // this.regionList.unshift(
          //   { label: '温州市', value: '' });
        }
        this.selectedRegionId = this.regionList[0].value;
        this.loading = true;
        this.getAffairStatistic();
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取区域列表失败', detail: data.msg });
      }
    });
  }

  getAffairStatistic() {
    this.statisticAffairService.getAffairStatistic({
      regionId: this.selectedRegionId,
      range: this.selectedDateRange
    }).then(data => {
      if (data.status === 0) {
        this.affairStatistics = data.data;
      } else {
        this.affairStatistics = [];
        this.messageService.add({ severity: 'warn', summary: '获取事务统计失败', detail: data.msg });
      }
      this.loading = false;
    });
  }
}
