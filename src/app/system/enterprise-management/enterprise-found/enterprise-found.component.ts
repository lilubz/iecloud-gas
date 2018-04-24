import { Component, OnInit, OnDestroy, NgZone, Inject } from '@angular/core';
import { EnterpriseFoundService, } from './enterprise-found.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { CommonRequestService } from '../../../core/common-request.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from '../../../common/date-localization';
import { AddForm } from './addForm.model';
import * as moment from 'moment';

@Component({
  selector: 'gas-enterprise-found',
  templateUrl: './enterprise-found.component.html',
  styleUrls: ['./enterprise-found.component.scss']
})
export class EnterpriseFoundComponent implements OnInit, OnDestroy {
  cn = zh_CN;
  category: SelectItem[] = [
    {
      label: '请选择',
      value: '',
    },
    {
      label: '瓶装燃气综合经营',
      value: '瓶装燃气综合经营',
    },
    {
      label: '瓶装燃气综合经营(不含机动车加气)',
      value: '瓶装燃气综合经营(不含机动车加气)',
    },
    {
      label: '液化石油气瓶装',
      value: '液化石油气瓶装',
    },
    {
      label: '瓶装燃气(液化石油气)',
      value: '瓶装燃气(液化石油气)',
    },
    {
      label: '瓶装燃气',
      value: '瓶装燃气',
    }
  ];
  regionDropdown: SelectItem[] = [
    {
      label: '请选择',
      value: '',
    }
  ];
  addForm: AddForm = new AddForm();
  deliveryRegionList: SelectItem[] = []; // 配送地址列表
  selectedCountyRegionId = ''; // 选中的区县regionId
  deliveryUrbanDistrictList: SelectItem[] = []; // 选中市辖区时的区县列表
  selectedUrbanDistrict = ''; // 选中市辖区时的区县regionId
  deliveryStreetList: SelectItem[] = [{ label: '--请选择--', value: '' }]; // 配送街道列表
  selectedStreetRegionId = ''; // 选中的区县regionId
  selectedAreaList: any = []; // 选中的区域列表
  addCountry = '';
  addUrbanDistrict = '';
  addStreet = '';
  initSelectedUrbanDistrict: SelectItem[] = []; // 默认的市辖区后的区县

  constructor(
    private _service: EnterpriseFoundService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private zone: NgZone,
  ) { }

  ngOnInit() {
    this.getDropdown();
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.deliveryRegionList = data.data.map(element => ({ label: element.regionName, value: element.regionId }));
        this.selectedCountyRegionId = this.deliveryRegionList[0].value;
        return this.selectedCountyRegionId;
      }
      return null;
    }).then(regionId => {
      if (regionId) {
        this.deliveryCountyChange(regionId);
      }
    });
  }
  // 三级联动
  deliveryCountyChange(countyRegionId) {
    if (countyRegionId.toString() !== '330301') {
      this.deliveryUrbanDistrictList = [];
      this.selectedUrbanDistrict = '';
    } else {
      this.deliveryStreetList = [{ label: '--请选择--', value: '' }];
      this.selectedStreetRegionId = '';
    }
    this.commonRequestService.getWenZhouRegionList({
      regionId: countyRegionId
    }).then(data => {
      if (data.status === 0) {
        if (countyRegionId.toString() === '330301') {
          this.deliveryUrbanDistrictList = data.data.map(
            element => ({ label: element.regionName, value: element.regionId }));
          this.deliveryUrbanDistrictList.unshift({ label: '--请选择--', value: '' });
          this.initSelectedUrbanDistrict = this.deliveryUrbanDistrictList;
          this.selectedUrbanDistrict = '';
        } else {
          this.deliveryStreetList = data.data.map(
            element => ({ label: element.regionName, value: element.regionId }));
          this.deliveryStreetList.unshift({ label: '--请选择--', value: '' });
          this.selectedStreetRegionId = this.deliveryStreetList[0].value;
        }
      } else {
        if (countyRegionId.toString() === '330301') {
          this.messageService.add({ severity: 'warn', summary: '', detail: '获取辖区信息失败' });
        } else {
          this.messageService.add({ severity: 'warn', summary: '', detail: '获取街道信息失败' });
        }
      }
    });
  }

  deliveryUrbanDistrictChange(urbanRegionId) {
    if (urbanRegionId === '') {
      this.deliveryStreetList = [{ label: '--请选择--', value: '' }];
      this.selectedStreetRegionId = '';
      return;
    }

    this.commonRequestService.getWenZhouRegionList({
      regionId: urbanRegionId
    }).then(data => {
      if (data.status === 0) {
        this.deliveryStreetList = data.data.map(
          element => ({ label: element.regionName, value: element.regionId }));
        this.deliveryStreetList.unshift({ label: '--请选择--', value: '' });
        this.selectedStreetRegionId = this.deliveryStreetList[0].value;
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: '获取街道信息失败' });
      }
    });
  }
  // 选择区域
  selectArea() {
    // console.log(this.deliveryRegionList);
    const data = {};
    if (this.deliveryRegionList && this.selectedCountyRegionId !== '') {
      for (const item of this.deliveryRegionList) {
        if (this.selectedCountyRegionId === item.value) {
          this.addCountry = item.label;
        }
      }
    }
    if (this.deliveryStreetList && this.selectedStreetRegionId !== '') {
      for (const item of this.deliveryStreetList) {
        if (this.selectedStreetRegionId === item.value) {
          this.addStreet = item.label;
        }
      }
    }
    if (this.deliveryUrbanDistrictList && this.selectedUrbanDistrict !== '') {
      for (const item of this.deliveryUrbanDistrictList) {
        if (this.selectedUrbanDistrict === item.value) {
          this.addUrbanDistrict = item.label;
        }
      }
    }
    if (this.addStreet) {
      data['areaName'] = this.addStreet;
    } else if (this.addUrbanDistrict) {
      data['areaName'] = this.addUrbanDistrict;
    } else if (this.addCountry) {
      data['areaName'] = this.addCountry;
    }

    this.selectedAreaList = this.selectedAreaList.concat([data]);
    this.addCountry = '';
    this.addStreet = '';
    this.addUrbanDistrict = '';
  }
  // 删除选择的区域
  delete(data) {
    // console.log(this.selectedAreaList.length);
    for (let i = 0; i < this.selectedAreaList.length; i++) {
      if (data === i) {
        this.selectedAreaList.splice(i, 1);
        this.selectedAreaList = this.selectedAreaList.concat([]);
        // console.log(this.selectedAreaList);
      }
    }
  }
  // 获取辖区下拉
  getDropdown() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId
          };
        });
        this.regionDropdown = this.regionDropdown.concat(list);
      } else {

      }
    });
  }
  /**
  * 增加企业
  */
  AddEnterprise() {
    for (let i = 0; i < this.selectedAreaList.length; i++) {
      if (this.selectedAreaList.length === 1 || i === (this.selectedAreaList.length - 1)) {
        this.addForm.businessArea += this.selectedAreaList[i].areaName;
      } else {
        this.addForm.businessArea += this.selectedAreaList[i].areaName + ',';
      }
    }
    if (this.checkForm()) {
      const formData = new FormData();
      for (const key in this.addForm) {
        if (key) {
          if (key === 'releaseTime' || key === 'effectiveTimeStart' || key === 'effectiveTimeEnd') {
            if (!this.addForm[key]) {

            } else {
              const data = moment(this.addForm[key]).format('YYYY-MM-DD HH:mm:ss');
              formData.append(key, data);
            }
          } else {
            formData.append(key, this.addForm[key]);
          }
        }
      }
      this._service.AddCorpInfo(formData).then(data => {
        if (data.status === 0) {
          this.addForm.businessArea = '';
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: data.msg });
        } else {
          this.addForm.businessArea = '';
          this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
        }
      }).catch(error => {
        this.addForm.businessArea = '';
        this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
      });
    } else {
      this.addForm.businessArea = '';
    }
  }
  clearAddForm() {
    this.addForm = new AddForm();
    this.selectedAreaList = [];
    this.selectedCountyRegionId = this.deliveryRegionList[0].value;
    this.deliveryUrbanDistrictList = this.initSelectedUrbanDistrict;
    this.selectedUrbanDistrict = '';
    this.deliveryStreetList = [{ label: '--请选择--', value: '' }];
    this.selectedStreetRegionId = '';
  }
  checkForm(): boolean {
    if (!this.addForm.enterpriseName.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '企业名称不能为空' });
      return false;
    } else if (!this.addForm.enterpriseNumber.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '企业编号不能为空' });
      return false;
    } else if (!/^\d+$/.test(this.addForm.enterpriseNumber)) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '企业编号不合法' });
      return false;
    } else if (!this.addForm.legalRepresentative.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '负责人不能为空' });
      return false;
    } else if (!this.addForm.address.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '地址不能为空' });
      return false;
    } else if (!this.addForm.businessCategory.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '经营类别不能为空' });
      return false;
    } else if (!this.addForm.regionId) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '辖区不能为空' });
      return false;
    } else if (!this.addForm.serviceLine.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '服务热线不能为空' });
      return false;
    } else if (!this.addForm.businessArea.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '经营区域不能为空' });
      return false;
    } else if (!this.addForm.dangerousLicense.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '许可证号不能为空' });
      return false;
    } else if (!this.addForm.issuingUnit.trim()) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '发证机关不能为空' });
      return false;
    } else if (!this.addForm.releaseTime) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '发证日期不能为空' });
      return false;
    } else if (!this.addForm.effectiveTimeStart) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '有效期起始时间不能为空' });
      return false;
    } else if (!this.addForm.effectiveTimeEnd) {
      this.messageService.add({ severity: 'warn', summary: '提示信息', detail: '有效期结束时间不能为空' });
      return false;
    }
    return true;
  }


  ngOnDestroy() {
  }
}
