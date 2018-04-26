import { MessageService } from 'primeng/components/common/messageservice';
/// <reference types="arcgis-js-api" />
/// <reference types="dojo" />

import { OnDestroy } from '@angular/core';
import { MapService } from './map.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { zh_CN } from './../../common/date-localization';
import * as moment from 'moment';
import { CommonRequestService } from '../../core/common-request.service';
import { GISSettingService } from '../../system/setting-management/GIS-setting/GIS-setting.service';

@Component({
  selector: 'gas-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map') mapEl: ElementRef;
  zh = zh_CN;
  dateRange: SelectItem[] = [
    {
      label: '今天',
      value: 1
    },
    {
      label: '昨天',
      value: 2
    },
    {
      label: '最近三天',
      value: 3
    },
    {
      label: '自定义时间',
      value: 4
    }
  ];
  selectedDateRange = this.dateRange[0].value;
  selectedDateRangeCar = this.dateRange[0].value;
  selectedMarkers: string[] = [];
  stationVisible = true;
  selectedDispatcher;
  selectedDispatcherNumber;
  cardNumber;
  defaultStations: string[] = [];

  today = new Date();
  beginTime: Date = new Date((new Date().getTime() - 5 * 24 * 60 * 60 * 1000));
  endTime: Date = new Date();
  beginTimeCar: Date = new Date((new Date().getTime() - 5 * 24 * 60 * 60 * 1000));
  endTimeCar: Date = new Date();

  constructor(
    private mapService: MapService,
    private messageService: MessageService,
    private commonRequestService: CommonRequestService,
    private gisSettingService: GISSettingService
  ) { }

  ngOnInit() {
    this.loadMap().then(data => {
      console.log(data);
      this.defaultStations = this.gisSettingService.transformStationData(this.gisSettingService.getMapStationSetting());
      if (this.defaultStations.indexOf('fillingStation') !== -1) {
        this.toggleDistributionStation(true);
      }
      if (this.defaultStations.indexOf('supplyStation') !== -1) {
        this.toggleSupplyStation(true);
      }
    });
    // this.commonRequestService.listMobileCorpSupplyStationInfo().then(data => {
    //   if (data.status === 0) {
    //     this.cars = data.data.map(item => ({ label: item.supplyStationName, value: item }));
    //     // this.cars.unshift({ label: '请选择直销车', value: '' });
    //   } else {
    //     // this.cars = [{ label: '请选择直销车', value: '' }];
    //     this.cars = [];
    //   }
    // });
  }

  ngOnDestroy() {
    this.mapService.destroyBasemapGallary();
  }

  onSelected(event) {
    console.log(event);
    console.log(this.selectedMarkers);
    console.log(this.stationVisible);
    // this.mapService.layerChange(this);
  }

  /**
   * 加载地图
   * 2018-02-05 11:53:06
   * @author hzb
   * @memberof MapComponent
   */
  loadMap(): Promise<any> {
    return this.mapService.loadWebMap(this.mapEl);
  }

  /**
   * 显隐储配站
   * 2018-02-05 11:52:31
   * @author hzb
   * @param {boolean} visible
   * @memberof MapComponent
   */
  toggleDistributionStation(visible: boolean) {
    this.mapService.toggleDistributionStation(visible);
  }

  /**
   * 显隐供应站
   * 2018-02-05 11:52:06
   * @author hzb
   * @param {boolean} visible
   * @memberof MapComponent
   */
  toggleSupplyStation(visible: boolean) {
    console.log(1);
    this.mapService.toggleSupplyStation(visible);
  }

  /**
   * 选择送气工
   * 2018-02-05 11:50:52
   * @author hzb
   * @param {any} dispatcher
   * @memberof MapComponent
   */
  dispatcherChange(dispatcher) {
    if (dispatcher && dispatcher.dispatcherNumber) {
      this.selectedDispatcher = dispatcher;
      this.selectedDispatcherNumber = dispatcher.dispatcherNumber;
    } else {
      this.selectedDispatcher = null;
      this.selectedDispatcherNumber = null;
    }
  }

  /**
   * 查询送气工轨迹
   * 2018-02-05 11:50:27
   * @author hzb
   * @memberof MapComponent
   */
  searchTrack() {
    if (!this.selectedDispatcherNumber) {
      this.messageService.add({ severity: 'warn', summary: '请填写送气工信息', detail: '' });
      return;
    } else if (this.selectedDateRange === 4 && (this.beginTime > this.endTime)) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return;
    }
    const dateRange = this.getSelectedTime(this.selectedDateRange, this.beginTime, this.endTime);

    this.mapService.getThePathByAccountId({
      beginTime: dateRange.beginTime,
      endTime: dateRange.endTime,
      accountId: this.selectedDispatcherNumber,
      accountTypeId: '0'
    }).then(data => {
      if (data.status === 0) {
        this.mapService.showDispatcherPathAndPoint(
          data.data.map(item => {
            return Object.assign({}, item, {
              dispatcherName: this.selectedDispatcher.name,
              jobNumber: this.selectedDispatcher.jobNumber,
              enterpriseName: this.selectedDispatcher.subsidiaryEnterprises,
              phone: this.selectedDispatcher.phone,
              time: moment(item.createTime).format('YYYY-MM-DD HH:mm')
            });
          })
        );
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

  /**
   * 查询车辆轨迹
   * 2018-02-08 11:48:31
   * @author hzb
   * @returns
   * @memberof MapComponent
   */
  searchTrackCar() {
    if (!this.cardNumber) {
      this.messageService.add({ severity: 'warn', summary: '请输入车牌号', detail: '' });
      return;
    } else if (this.selectedDateRangeCar === 4 && (this.beginTimeCar > this.endTimeCar)) {
      this.messageService.add({ severity: 'warn', summary: '开始时间不可大于结束时间', detail: '' });
      return;
    }
    const dateRange = this.getSelectedTime(this.selectedDateRangeCar, this.beginTimeCar, this.endTimeCar);
    this.messageService.add({ severity: 'warn', summary: '未查询到信息！', detail: '' });
    // this.mapService.getThePathByAccountId({
    //   beginTime: dateRange.beginTime,
    //   endTime: dateRange.endTime,
    //   accountId: this.selectedCarNumber,
    //   accountTypeId: '3'
    // }).then(data => {
    //   if (data.status === 0) {
    //     this.mapService.showSellingCarPathAndPoint(
    //       data.data.map(item => {
    //         return Object.assign({}, item, {
    //           supplyStationName: this.selectedCar.supplyStationName,
    //           supplyStationAddress: this.selectedCar.supplyStationAddress,
    //           supplyLicenseNum: this.selectedCar.supplyLicenseNum,
    //           principal: this.selectedCar.principal,
    //           carNumber: this.selectedCar.carNumber,
    //           time: moment(item.createTime).format('YYYY-MM-DD HH:mm')
    //         });
    //       })
    //     );
    //   } else {
    //     this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
    //   }
    // });
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
    if (dateRange === 1) {
      beginTime = moment(moment(new Date()).format('YYYY-MM-DD') + ' 00:00:00');
      endTime = moment(new Date());
    } else if (dateRange === 2) {
      const yesterday = new Date((new Date().getTime() - 24 * 60 * 60 * 1000));
      beginTime = moment(moment(yesterday).format('YYYY-MM-DD') + ' 00:00:00');
      endTime = moment(moment(yesterday).format('YYYY-MM-DD') + ' 23:59:59');
    } else if (dateRange === 3) {
      beginTime = moment(moment(new Date((new Date().getTime() - 2 * 24 * 60 * 60 * 1000))).format('YYYY-MM-DD') + ' 00:00:00');
      endTime = moment(new Date());
    } else if (dateRange === 4) {
      beginTime = moment(moment(selectedBeginTime).format('YYYY-MM-DD HH:mm:ss'));
      endTime = moment(selectedEndTime);
    }
    return { beginTime, endTime };
  }
}
