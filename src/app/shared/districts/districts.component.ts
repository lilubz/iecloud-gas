import { Component, OnInit, OnChanges, Input, Output, Inject, EventEmitter } from '@angular/core';

import { Districts } from './district';
@Component({
  selector: 'gas-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {
  _province: any = '';
  _city: any = '';
  _county: any = '';
  @Input() disabledProvince = false;
  @Input() disabledCity = false;
  @Input() disabledCounty = false;
  @Input() districts = Districts;

  @Input()
  set province(province: string) {
    this._province = '';
    if (Object.prototype.toString.call(this.districts) === '[object Array]') {
      for (const item of this.districts) {
        if (item.code === province || item.name === province) {
          this._province = item;
          this.select();
          break;
        }
      }
    }
  }
  @Input()
  set city(city: string) {
    this._city = '';
    if (Object.prototype.toString.call(this._province.childs) === '[object Array]') {
      for (const item of this._province.childs) {
        if (item.code === city || item.name === city) {
          this._city = item;
          this.select();
          break;
        }
      }
    }
  }
  @Input()
  set county(county: string) {
    this._county = '';
    if (Object.prototype.toString.call(this._city.childs) === '[object Array]') {
      for (const item of this._city.childs) {
        if (item.code === county || item.name === county) {
          this._county = item;
          this.select();
          break;
        }
      }
    }
  }
  @Output() onSelect = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  changeProvince() {
    this._city = '';
    this._county = '';
    this.select();
  }
  changeCity() {
    this._county = '';
    this.select();
  }

  select() {
    this.onSelect.emit({
      province: {
        code: this._province.code || '',
        name: this._province.name || ''
      },
      city: {
        code: this._city.code || '',
        name: this._city.name || ''
      },
      county: {
        code: this._county.code || '',
        name: this._county.name || ''
      }
    });
  }
}
