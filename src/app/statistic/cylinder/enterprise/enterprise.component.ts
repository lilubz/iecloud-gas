import { RoleType } from './../../../common/RoleType';
import { StatisticCylinderService } from './../statistic-cylinder.service';
import { Component, OnInit } from '@angular/core';
import { CylinderOverviewService } from '../../../archive/cylinder/cylinder-overview/cylinder-overview.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from '../../../core/userState.service';
import { SelectItem } from 'primeng/primeng';
import { zh_CN } from './../../../common/date-localization';

import * as moment from 'moment';
import { Util } from '../../../core/util';
@Component({
  selector: 'gas-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
  providers: [
    CylinderOverviewService
  ]
})
export class EnterpriseComponent implements OnInit {
  RoleType = RoleType;
  zh = zh_CN;
  dateRange: SelectItem[] = [
    {
      label: '最近一周',
      value: 2
    }, {
      label: '最近一月',
      value: 3
    }, {
      label: '自定义时间',
      value: 4
    }];
  selectedDateRange = this.dateRange[0].value;

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 5 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();

  loading = false;
  addLoading = false;

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
  addCountyCylinders: {
    id: string,
    name: string,
    newCount: string,
    expireCount: string,
  }[] = [];
  addStatisticType = 'region';
  addStatisticRegionId = '';

  constructor(
    private cylinderOverviewService: CylinderOverviewService,
    private statisticCylinderService: StatisticCylinderService,
    private messageService: MessageService,
    private userStateService: UserStateService,
    public util: Util
  ) { }

  ngOnInit() {
    this.loading = true;
    let roleType = this.userStateService.getUserRoleType();
    if (roleType !== RoleType.Enterprise) {
      this.addLoading = true;
      this.getCountiesOverview().then(data => {
        this.loading = false;
        this.countyCylinders = data;
      });
      this.searchGcAddCount();
    } else {
      this.loading = true;
      this.getEnterpriseOverview();
    }
  }

  getEnterpriseOverview() {
    this.cylinderOverviewService.getCylinderEnterpriseOverviewByOrganizationId({})
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

  /**
   * 获取区域新增气瓶统计
   * 2018-03-07 09:40:33
   * @author hzb
   * @returns
   * @memberof EnterpriseComponent
   */
  searchGcAddCount() {
    this.addStatisticRegionId = '';
    this.addStatisticType = 'region'
    this.addCountyCylinders = [];
    this.addLoading = true;
    this.listGcNewAddCount({
      type: this.addStatisticType,
      regionId: ''
    }).then(data => {
      this.addLoading = false;
      if (data) {
        this.addCountyCylinders = data;
      }
    });
  }

  // 获取企业新增气瓶统计
  searchGcAddCountDetail(regionId) {
    this.addStatisticRegionId = regionId;
    this.addStatisticType = 'corp'
    this.addCountyCylinders = [];
    this.addLoading = true;
    this.listGcNewAddCount({
      type: this.addStatisticType,
      regionId: this.addStatisticRegionId
    }).then(data => {
      this.addLoading = false;
      if (data) {
        this.addCountyCylinders = data;
      }
    });
  }

  // 获取新增气瓶统计
  listGcNewAddCount = (params: { type: string, regionId: string, resultType?: string }): Promise<any> => {
    if (this.selectedDateRange === 4 && (this.beginTime > this.endTime)) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return Promise.resolve();
    }
    const dateRange = this.getSelectedTime(this.selectedDateRange, this.beginTime, this.endTime);
    return this.statisticCylinderService.listGcNewAddCount(Object.assign({}, params, dateRange)).then(data => {
      if (data.status === 0) {
        return data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        return;
      }
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
  getSelectedTime(dateRange: number, selectedBeginTime: Date, selectedEndTime: Date): { beginTime: string, endTime: string } {
    let beginTime;
    let endTime;
    if (dateRange === 2) {
      const week = new Date((new Date().getTime() - 6 * 24 * 60 * 60 * 1000));
      beginTime = this.util.formatTime(week, 'start');
      endTime = this.util.formatTime(new Date(), 'end');
    } else if (dateRange === 3) {
      beginTime = this.util.formatTime(moment().subtract(29, 'days'), 'start');
      endTime = this.util.formatTime(new Date(), 'end');
    } else if (dateRange === 4) {
      beginTime = this.util.formatTime(selectedBeginTime, 'start');
      endTime = this.util.formatTime(selectedEndTime, 'end');
    }
    return { beginTime, endTime };
  }

  // 获取持有气瓶统计信息
  getCountiesOverview(params?: { beginTime: string, endTime: string }): Promise<any[]> {
    return this.cylinderOverviewService.getCountiesOverview(params).then(data => {
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

  exportStatistic() {
    if (this.userStateService.getUserRoleType() !== RoleType.Enterprise) {
      this.exportEnterpriseCylinderStatistic();
    } else {
      this.exportEnterpriseStatistic();
    }
  }

  // 导出企业气瓶统计
  exportEnterpriseCylinderStatistic() {
    this.cylinderOverviewService.exportCountiesOverview().then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

  exportEnterpriseStatistic() {
    this.cylinderOverviewService.getCylinderEnterpriseOverviewByOrganizationId({
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      }
    });
  }

  // 导出企业新增气瓶统计
  exportEnterpriseAddCylinderStatistic() {
    this.listGcNewAddCount({
      type: this.addStatisticType,
      regionId: this.addStatisticRegionId || '',
      resultType: 'excel'
    }).then(data => {
      if (data) {
        this.util.downloadFile(data);
      }
    });
  }
}
