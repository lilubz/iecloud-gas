import { Component, OnInit } from '@angular/core';
import { CylinderOverviewService } from '../../../archive/cylinder/cylinder-overview/cylinder-overview.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from '../../../../core/userState.service';
import { SelectItem } from 'primeng/primeng';
import { zh_CN } from './../../../../common/date-localization';

import * as moment from 'moment';
@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
  providers: [
    CylinderOverviewService
  ]
})
export class EnterpriseComponent implements OnInit {
  zh = zh_CN;
  dateRange: SelectItem[] = [
    {
      label: '最近一周',
      value: 2
    },
    {
      label: '最近一月',
      value: 3
    },
    {
      label: '自定义时间',
      value: 4
    }
  ];
  selectedDateRange = this.dateRange[0].value;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 5 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();

  loading = false;
  addloading = false;

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
  addcountyCylinders: {
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
    this.addloading = true;
    this.getCountiesOverview().then(data => {
      this.loading = false;
      this.countyCylinders = data;
    });
    this.searchTrack()
  }
  /**
     * 查询
     * 2018-02-05 11:50:27
     * @author hzb
     * @memberof MapComponent
     */
  searchTrack() {
    if (this.selectedDateRange === 4 && (this.beginTime > this.endTime)) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return;
    }
    const dateRange = this.getSelectedTime(this.selectedDateRange, this.beginTime, this.endTime);
    this.addloading = true;
    this.getCountiesOverview({
      beginTime: moment(dateRange.beginTime).format('YYYY-MM-DD'),
      endTime: moment(dateRange.endTime).format('YYYY-MM-DD'),
    }).then(data => {
      this.addloading = false;
      this.addcountyCylinders = data;
    });
  }

  /**
   * 获取用户选择的开始时间和结束时间
   * 2018-02-08 14:17:48
   * @author hzb
   * @param {number} dateRange
   * @param {Date} selectedBeginTime
   * @param {Date} selectedEndTime
   * @returns {{ beginTime: Date, endTime: Date }}
   * @memberof MapComponent
   */
  getSelectedTime(dateRange: number, selectedBeginTime: Date, selectedEndTime: Date): { beginTime: Date, endTime: Date } {
    let beginTime;
    let endTime;
    if (dateRange === 2) {
      const week = new Date((new Date().getTime() - 7 * 24 * 60 * 60 * 1000));
      beginTime = moment(moment(week).format('YYYY-MM-DD') + ' 00:00:00');
      endTime = moment(new Date());
    } else if (dateRange === 3) {
      beginTime = moment(moment(new Date((new Date().getTime() - 30 * 24 * 60 * 60 * 1000))).format('YYYY-MM-DD') + ' 00:00:00');
      endTime = moment(new Date());
    } else if (dateRange === 4) {
      beginTime = moment(moment(selectedBeginTime).format('YYYY-MM-DD'));
      endTime = moment(selectedEndTime);
    }
    return { beginTime, endTime };
  }
  //获取信息
  getCountiesOverview(params?: {
    beginTime: string,
    endTime: string
  }): Promise<any[]> {
    return this.cylinderOverviewService.getCountiesOverview(params)
      .then(data => {
        this.loading = false;
        if (data.status === 0) {
          return data.data;
        } else {
          this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
          return [];
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '获取信息异常', detail: error });
        this.loading = false;
        return [];
      });
  }

  // getEnterpriseOverview() {
  //   this.cylinderOverviewService.getCylinderEnterpriseOverviewByOrganizationId({})
  //     .then(data => {
  //       if (data.status === 0) {
  //         this.countyCylinders = data.data;
  //       } else {
  //         this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
  //       }
  //       this.loading = false;
  //     }).catch(error => {
  //       this.messageService.add({ severity: 'error', summary: '获取信息异常', detail: error });
  //       this.loading = false;
  //     });
  // }

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
