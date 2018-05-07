import { CommonRequestService } from './../../core/common-request.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'gas-delivery-region-cascade',
  templateUrl: './delivery-region-cascade.component.html',
  styleUrls: ['./delivery-region-cascade.component.scss']
})
export class DeliveryRegionCascadeComponent implements OnInit {
  // 第一步：获取用户设置的街道id，并解析出区域id
  @Input() set deliveryRegionId(regionId: string) {
    regionId = regionId || '';
    if (this.selectedStreetRegionId != regionId) {
      if (regionId) {
        this.selectedStreetRegionId = regionId.toString();
        this.selectedCountyRegionId = '330' + this.selectedStreetRegionId.substring(0, 3);
        // 鹿城区、龙湾区、瓯海区属于市辖区
        if (this.selectedCountyRegionId == '330302' || this.selectedCountyRegionId == '330303' ||
          this.selectedCountyRegionId == '330304') {
          this.selectedUrbanDistrict = this.selectedCountyRegionId;
          this.selectedCountyRegionId = '330301';
        }
      } else {
        this.selectedCountyRegionId = '';
        this.selectedUrbanDistrict = '';
        this.selectedStreetRegionId = '';
      }
      this.init();
    }
  };
  @Output() deliveryRegionIdChange: EventEmitter<string> = new EventEmitter<string>();


  selectedCountyRegionId = ''; // 选中的区县regionId
  selectedUrbanDistrict = ''; // 选中市辖区时的区县regionId
  selectedStreetRegionId = ''; // 选中的区县regionId
  deliveryCountyRegionList: SelectItem[] = []; // 配送地址列表
  deliveryUrbanDistrictList: SelectItem[] = []; // 选中市辖区时的区县列表
  deliveryStreetList: SelectItem[] = [{ label: '--请选择--', value: '' }]; // 配送街道列表

  constructor(
    private commonRequestService: CommonRequestService
  ) { }

  ngOnInit() {
    this.init();
  }

  init = () => {
    // 第二步：获取区县列表
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.deliveryCountyRegionList = data.data.map(element => ({ label: element.regionName, value: element.regionId }));
        if (this.selectedCountyRegionId) {
          let flag = false;
          for (const item of this.deliveryCountyRegionList) {
            if (this.selectedCountyRegionId == item.value) {
              flag = true;
              break;
            }
          }
          if (!flag) {
            this.selectedCountyRegionId = this.deliveryCountyRegionList[0].value;
          }
        } else {
          this.selectedCountyRegionId = this.deliveryCountyRegionList[0].value;
        }
        return this.selectedCountyRegionId;
      }
      return null;
    }).then(regionId => {
      // 如果设置了默认街道
      if (this.selectedStreetRegionId) {
        this.getWenZhouRegionList(this.selectedCountyRegionId).then(data => {
          if (this.selectedUrbanDistrict) {
            this.deliveryUrbanDistrictList = data;
            this.getWenZhouRegionList(this.selectedUrbanDistrict).then(data => {
              this.deliveryStreetList = data;
            });
          } else {
            this.deliveryStreetList = data;
          }
        });
      } else if (regionId) {
        this.deliveryCountyChange(regionId);
      }
    });
  }

  deliveryCountyChange(countyRegionId) {
    if (countyRegionId.toString() !== '330301') {
      this.deliveryUrbanDistrictList = [];
      this.selectedUrbanDistrict = '';
    } else {
      this.deliveryStreetList = [{ label: '--请选择--', value: '' }];
      this.selectedStreetRegionId = '';
      this.deliveryRegionIdChange.emit(this.selectedStreetRegionId);
    }
    this.getWenZhouRegionList(countyRegionId).then((data: SelectItem[]) => {
      if (countyRegionId.toString() === '330301') {
        this.deliveryUrbanDistrictList = data;
        this.selectedUrbanDistrict = '';
      } else {
        this.deliveryStreetList = data;
        this.selectedStreetRegionId = this.deliveryStreetList[0].value;
        this.deliveryRegionIdChange.emit(this.selectedStreetRegionId);
      }
      // } else {
      //   if (countyRegionId.toString() === '330301') {
      //     this.showMessage('warn', '', '获取辖区信息失败');
      //   } else {
      //     this.showMessage('warn', '', '获取街道信息失败');
      //   }

    });
  }

  deliveryUrbanDistrictChange(urbanRegionId) {
    if (urbanRegionId === '') {
      this.deliveryStreetList = [{ label: '--请选择--', value: '' }];
      this.selectedStreetRegionId = '';
      this.deliveryRegionIdChange.emit(this.selectedStreetRegionId);
      return;
    }

    this.getWenZhouRegionList(urbanRegionId).then(data => {
      this.deliveryStreetList = data;
      this.selectedStreetRegionId = this.deliveryStreetList[0].value;
      this.deliveryRegionIdChange.emit(this.selectedStreetRegionId);
      // } else {
      //   this.showMessage('warn', '', '获取街道信息失败');
    });
  }

  deliveryStreetChange(streetRegionId: number) {
    this.deliveryRegionIdChange.emit(streetRegionId.toString());
  }

  getWenZhouRegionList(regionId): Promise<SelectItem[]> {
    return this.commonRequestService.getWenZhouRegionList({
      regionId: regionId
    }).then(data => {
      if (data.status === 0) {
        let regionList = data.data.map(
          element => ({ label: element.regionName, value: element.regionId }));
        regionList.unshift({ label: '--请选择--', value: '' });
        return regionList;
      }
      return [];
    });
  }
}
