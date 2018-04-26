import { Injectable, } from '@angular/core';
import { HttpService } from '../../../core/http.service';

@Injectable()
export class GISSettingService {
  constructor(private http: HttpService) { }

  getMapSetting(): 'shiliang' | 'yingxiang' {
    if (localStorage.getItem('MapSettingData') === null) {
      return 'shiliang';
    } else {
      return localStorage.getItem('MapSettingData') === 'shiliang' ? 'shiliang' : 'yingxiang';
    }
  }

  setMapSetting(value: 'shiliang' | 'yingxiang') {
    localStorage.setItem('MapSettingData', value);
  }

  getMapStationSetting(): { fillingStation: boolean, supplyStation: boolean } {
    if (!localStorage.getItem('MapStationSettingData')) {
      return { fillingStation: false, supplyStation: false };
    } else {
      return JSON.parse(localStorage.getItem('MapStationSettingData'));
    }
  }

  setMapStationSetting(value: { fillingStation: boolean, supplyStation: boolean }) {
    localStorage.setItem('MapStationSettingData', JSON.stringify(value));
  }

  transformStationData(data: { fillingStation: boolean, supplyStation: boolean }): string[] {
    let temp = [];
    if (data.fillingStation) {
      temp.push('fillingStation');
    }
    if (data.supplyStation) {
      temp.push('supplyStation');
    }
    return temp;
  }
}
