import { RoleType } from './../../../common/RoleType';
import { MessageService } from 'primeng/components/common/messageservice';
import { StatisticCylinderService } from './../statistic-cylinder.service';
import { CommonRequestService } from './../../../core/common-request.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { StorageDistributionStatistic } from './StorageDistributionStatistic.model';
import { zh_CN } from '../../../common/date-localization';
import { StorageDistributionCirculation } from './StorageDistributionCirculation.model';
import * as moment from 'moment';
import { Util } from '../../../core/util';
@Component({
  selector: 'gas-storage-distribution',
  templateUrl: './storage-distribution.component.html',
  styleUrls: ['./storage-distribution.component.scss']
})
export class StorageDistributionComponent implements OnInit {
  RoleType = RoleType;
  zh = zh_CN;
  cylinderLoading = false;
  circulationLoading = false;

  circulationBeginTime: Date = moment().subtract(30, 'days').toDate();
  circulationEndTime: Date = new Date();

  regionList: SelectItem[];
  selectedCirculationRegion = '';
  storageDistributions: StorageDistributionStatistic[] = [];
  storageDistributionFilters: StorageDistributionStatistic[] = [];
  storageDistributionCirculations: StorageDistributionCirculation[] = [];
  storageDistributionCirculationFilters: StorageDistributionCirculation[] = [];

  constructor(
    private commonRequestService: CommonRequestService,
    public statisticCylinderService: StatisticCylinderService,
    private messageService: MessageService,
    private util: Util
  ) {

  }

  ngOnInit() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.regionList = data.data.map(item => ({ label: item.regionName, value: item.regionId }));
        this.regionList.unshift({ label: '全部', value: '' });
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取区域数据失败', detail: data.msg });
      }
    });

    this.cylinderLoading = true;
    this.searchStorageDistributionStatistic();

    this.circulationLoading = true;
    this.searchStorageDistributionCirculations();
  }

  selectStatisticRegion(regionId) {
    if (regionId === '') {
      this.storageDistributionFilters = this.storageDistributions;
      return;
    }

    this.storageDistributionFilters = this.storageDistributions.filter(item => {
      if (item.regionId === regionId) {
        return true;
      }
      return false;
    });
  }

  selectCirculationRegion(regionId) {
    if (regionId === '') {
      this.storageDistributionCirculationFilters = this.storageDistributionCirculations;
      return;
    }

    this.storageDistributionCirculationFilters = this.storageDistributionCirculations.filter(item => {
      if (item.regionId === regionId) {
        return true;
      }
      return false;
    });
  }

  searchStorageDistributionStatistic() {
    this.statisticCylinderService.getStorageDistributionCount().then(data => {
      if (data.status === 0) {
        this.storageDistributions = data.data;
        this.storageDistributionFilters = data.data;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取储配站气瓶流通统计数据失败', detail: data.msg });
      }
      this.cylinderLoading = false;
    }).catch(error => {
      this.cylinderLoading = false;
    });
  }

  // 查询流通统计
  searchStorageDistributionCirculations() {
    if (this.checkForm()) {
      this.statisticCylinderService.getStorageDistributionCirculation({
        startTime: this.util.formatTime(this.circulationBeginTime, 'start'),
        endTime: this.util.formatTime(this.circulationEndTime, 'end')
      }).then(data => {
        if (data.status === 0) {
          this.storageDistributionCirculations = data.data;
          this.selectCirculationRegion(this.selectedCirculationRegion);
        } else {
          this.messageService.add({ severity: 'warn', summary: '获取储配站气瓶流通统计数据失败', detail: data.msg });
        }
        this.circulationLoading = false;
      }).catch(error => {
        this.circulationLoading = false;
      });
    }
  }

  exportFillingStationStatistic() {
    this.statisticCylinderService.getStorageDistributionCount({
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

  // 导出流通统计
  exportFillingStationCirculationStatistic = () => {
    if (this.checkForm()) {
      this.statisticCylinderService.getStorageDistributionCirculation({
        startTime: this.util.formatTime(this.circulationBeginTime, 'start'),
        endTime: this.util.formatTime(this.circulationEndTime, 'end'),
        resultType: 'excel'
      }).then(data => {
        if (data.status === 0) {
          this.util.downloadFile(data.data);
        } else {
          this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        }
      });
    }
  }

  checkForm(): boolean {
    if (this.circulationBeginTime > this.circulationEndTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return false;
    }
    return true;
  }
}
