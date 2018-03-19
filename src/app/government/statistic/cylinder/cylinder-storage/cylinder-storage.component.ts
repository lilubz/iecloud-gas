import { Component, OnInit } from '@angular/core';
import { zh_CN } from '../../../../common/date-localization';
import { SelectItem } from 'primeng/primeng';
import { CommonRequestService } from '../../../../core/common-request.service';
import { StatisticCylinderService } from '../statistic-cylinder.service';
import * as moment from 'moment';
import { MessageService } from 'primeng/components/common/messageservice';
import { Util } from '../../../../core/util';

@Component({
  selector: 'gas-cylinder-storage',
  templateUrl: './cylinder-storage.component.html',
  styleUrls: ['./cylinder-storage.component.css']
})
export class CylinderStorageComponent implements OnInit {
  storageVisible = false;
  zh = zh_CN;
  cylinderLoading = false;
  circulationLoading = false;

  circulationBeginTime: Date = moment().subtract(30, 'days').toDate();
  circulationEndTime: Date = new Date();

  regionList: SelectItem[];
  selectedCirculationRegion = '';
  cylinderStorages = [];
  cylinderStorageFilters = [];
  cylinderStorageCirculations = [];
  cylinderStorageCirculationFilters = [];

  dialogDataTable = {
    list: [],
    options: [5],
    total: 0,
    first: 0,
    params: '',
    pageSize: 5,
    pageNumber: 1
  };
  onOpenDialog(event) {
    this.dialogDataTable.params = event;
    this.dialogDataTable.pageNumber = 1;
    this.listGasCylinderBySupplyStationNumber({
      pageNumber: this.dialogDataTable.pageNumber,
      pageSize: this.dialogDataTable.pageSize,
      supplyStationNumber: this.dialogDataTable.params
    });
  }
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
    this.searchCylinderStorageStatistic();

    this.circulationLoading = true;
    this.searchCylinderStorageCirculations();
  }
  onPageChange($event) {
    this.dialogDataTable.list = [];
    this.onPageChange = event => {
      this.dialogDataTable.pageSize = event.rows;
      this.dialogDataTable.pageNumber = event.first / event.rows + 1;
      this.listGasCylinderBySupplyStationNumber({
        pageNumber: this.dialogDataTable.pageNumber,
        pageSize: this.dialogDataTable.pageSize,
        supplyStationNumber: this.dialogDataTable.params
      });
    };
  }
  selectStatisticRegion(regionId) {
    if (regionId === '') {
      this.cylinderStorageFilters = this.cylinderStorages;
      return;
    }

    this.cylinderStorageFilters = this.cylinderStorages.filter(item => {
      if (item.regionId === regionId) {
        return true;
      }
      return false;
    });
  }

  selectCirculationRegion(regionId) {
    if (regionId === '') {
      this.cylinderStorageCirculationFilters = this.cylinderStorageCirculations;
      return;
    }

    this.cylinderStorageCirculationFilters = this.cylinderStorageCirculations.filter(item => {
      if (item.regionId === regionId) {
        return true;
      }
      return false;
    });
  }

  searchCylinderStorageStatistic() {
    this.statisticCylinderService.getCylinderStorageCount().then(data => {
      if (data.status === 0) {
        this.cylinderStorages = data.data;
        this.cylinderStorageFilters = this.cylinderStorages;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取储配站气瓶统计数据失败', detail: data.msg });
      }
      this.cylinderLoading = false;
    }).catch(error => {
      this.cylinderLoading = false;
    });
  }

  searchCylinderStorageCirculations() {
    if (this.checkCirculationParams()) {
      this.statisticCylinderService.getCylinderStorageCirculation({
        startTime: moment(this.circulationBeginTime).format('YYYY-MM-DD') + ' 00:00:00',
        endTime: moment(this.circulationEndTime).format('YYYY-MM-DD') + ' 00:00:00'
      }).then(data => {
        if (data.status === 0) {
          this.cylinderStorageCirculations = data.data;
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
  listGasCylinderBySupplyStationNumber(params?) {
    this.statisticCylinderService.listGasCylinderBySupplyStationNumber(params).then(data => {
      if (data.status === 0) {
        this.storageVisible = true;
        this.dialogDataTable.list = data.data.list;
        this.dialogDataTable.total = data.data.total;
      } else {
        this.dialogDataTable.list = [];
        this.dialogDataTable.total = 0;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  exportSupplyStationCirculationStatistic() {
    if (this.checkCirculationParams()) {
      this.statisticCylinderService.getCylinderStorageCirculation({
        startTime: moment(this.circulationBeginTime).format('YYYY-MM-DD') + ' 00:00:00',
        endTime: moment(this.circulationEndTime).format('YYYY-MM-DD') + ' 00:00:00',
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

  checkCirculationParams(): boolean {
    if (this.circulationBeginTime > this.circulationEndTime) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return false;
    }
    return true;
  }
}
