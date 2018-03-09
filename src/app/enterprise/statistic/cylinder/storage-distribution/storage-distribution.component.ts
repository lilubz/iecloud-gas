import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from './../../../../core/common-request.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { StorageDistributionStatistic } from './StorageDistributionStatistic.model';
import { zh_CN } from '../../../../common/date-localization';
import { StorageDistributionCirculation } from './StorageDistributionCirculation.model';
import * as moment from 'moment';
import { StatisticCylinderService } from '../../../../government/statistic/cylinder/statistic-cylinder.service';
import { Util } from '../../../../core/util';
@Component({
  selector: 'gas-storage-distribution',
  templateUrl: './storage-distribution.component.html',
  styleUrls: ['./storage-distribution.component.scss']
})
export class StorageDistributionComponent implements OnInit {
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
    private statisticCylinderService: StatisticCylinderService,
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

  // 查询气瓶统计
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
    if (this.circulationBeginTime > this.circulationEndTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return false;
    }

    this.statisticCylinderService.getStorageDistributionCirculation({
      startTime: moment(this.circulationBeginTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.circulationEndTime).format('YYYY-MM-DD') + ' 00:00:00'
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

  exportFillingStationStatistic() {
    this.statisticCylinderService.getStorageDistributionCount({
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      }
    });
  }

  exportFillingStationCirculationStatistic() {
    if (this.circulationBeginTime > this.circulationEndTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return false;
    }

    this.statisticCylinderService.getStorageDistributionCirculation({
      startTime: moment(this.circulationBeginTime).format('YYYY-MM-DD') + ' 00:00:00',
      endTime: moment(this.circulationEndTime).format('YYYY-MM-DD') + ' 00:00:00',
      resultType: 'excel'
    }).then(data => {
      if (data.status === 0) {
        this.util.downloadFile(data.data);
      }
    });
  }

}
