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
  constructor(private _service: GISSettingService,
    private messageService: MessageService, ) { }

  ngOnInit() {
    this.selectedValue = this._service.getMapSetting();
  }
  save() {
    this._service.setMapSetting(this.selectedValue);
    if (this._service.getMapSetting() === 'shiliang') {
      this.messageService.add({ severity: 'success', summary: '响应消息', detail: '当前默认图层为矢量图' });
    } else {
      this.messageService.add({ severity: 'success', summary: '响应消息', detail: '当前默认图层为影像图' });
    }
  }

  ngOnDestroy() {
  }
}
