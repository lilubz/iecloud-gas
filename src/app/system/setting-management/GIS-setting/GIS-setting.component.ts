import { Component, OnInit, OnDestroy, } from '@angular/core';
import { GISSettingService, } from './GIS-setting.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-GIS-setting',
  templateUrl: './GIS-setting.component.html',
  styleUrls: ['./GIS-setting.component.scss']
})
export class GISSettingComponent implements OnInit, OnDestroy {
  selectedValue: 'shiliang' | 'yingxiang';
  defaultStations: string[];
  constructor(
    private _service: GISSettingService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.selectedValue = this._service.getMapSetting();
    this.defaultStations = this._service.transformStationData(this._service.getMapStationSetting());
  }
  save() {
    this._service.setMapSetting(this.selectedValue);
    this._service.setMapStationSetting({
      fillingStation: this.defaultStations.indexOf('fillingStation') !== -1 ? true : false,
      supplyStation: this.defaultStations.indexOf('supplyStation') !== -1 ? true : false,
    });
    this.messageService.add({ severity: 'success', summary: '响应消息', detail: '设置成功' });
  }

  ngOnDestroy() {
  }
}
