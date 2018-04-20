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
}
