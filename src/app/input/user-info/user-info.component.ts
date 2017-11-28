import { API } from './../../core/api';
import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { UserInfoService } from './user-info.service';
import { CommonRequestService } from './../../core/common-request.service';
import { Customer } from './Customer.model';
import { zh_CN, DATE_LOCALIZATION } from './../../core/date-localization';
import { User } from './../../model/User.model';
import { UserStateService } from './../../core/userState.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Format } from './../../core/format.service';
import { Message } from 'primeng/components/common/api';
@Component({
  selector: 'gas-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  importGcUserInfoUrl = API.importGcUserInfo;

  // 证件类型
  IDTypes: SelectItem[] = [
    { label: '身份证', value: '身份证' },
    { label: '营业执照', value: '营业执照' },
    { label: '军官证', value: '军官证' },
    { label: '大陆通行证', value: '大陆通行证' },
    { label: '护照', value: '护照' }
  ];

  // 客户类型
  customerTypes: SelectItem[] = [];

  // 客户信息
  customer: Customer = new Customer();

  // 管理员信息
  user: User;

  // 提示消息
  msgs: Message[] = [];

  certificateAddress = ''; // 证件地址
  certificateDetailAddress = ''; // 证件详细地址
  deliveryRegionList: SelectItem[] = []; // 配送地址列表
  selectedCountyRegionId = ''; // 选中的区县regionId
  deliveryUrbanDistrictList: SelectItem[] = []; // 选中市辖区时的区县列表
  selectedUrbanDistrict = ''; // 选中市辖区时的区县regionId
  deliveryStreetList: SelectItem[] = [{ label: '--请选择--', value: '' }]; // 配送街道列表
  selectedStreetRegionId = ''; // 选中的区县regionId

  constructor(
    @Inject(DATE_LOCALIZATION) public zh,
    private userStateService: UserStateService,
    private format: Format,
    private userInfoService: UserInfoService,
    private route: ActivatedRoute,
    private commonRequestService: CommonRequestService
  ) {
    this.user = this.userStateService.getUser();
    console.dir(this.user);
  }

  ngOnInit() {
    this.customer.certificateName = '身份证';
    this.route.data
      .subscribe((data: any) => {
        this.customerTypes = data.userType.map(element => ({ label: element.name, value: element.userTypeId }));
        this.customer.userTypeId = this.customerTypes[0].value;
      });
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

  formInit() {
    this.customer = new Customer();
    this.customer.userTypeId = this.customerTypes[0].value;
    this.certificateAddress = '';
    this.certificateDetailAddress = '';
    this.selectedCountyRegionId = this.deliveryRegionList[0].value;
    this.deliveryCountyChange(this.selectedCountyRegionId);
  }

  save(IDImageUpload: any, OtherImageUpload: any) {
    // console.log(IDImageFiles);
    this.customer.gcCorpUserName = this.customer.userName; // 企业用户名称等于输入的用户名
    this.customer.identity = IDImageUpload.files;
    this.customer.others = OtherImageUpload.files;
    this.customer.certificateAddress = this.certificateAddress + this.certificateDetailAddress;
    this.customer.deliveryRegionId = this.selectedStreetRegionId || this.selectedUrbanDistrict
      || this.selectedCountyRegionId;
    if (this.checkForm()) {
      const formData = new FormData();
      for (const key in this.customer) {
        if (key) {
          if (key === 'identity' || key === 'others') {
            for (const file of this.customer[key]) {
              formData.append(key, file);
            }
          } else {
            formData.append(key, this.customer[key]);
          }
        }
      }
      // console.log(formData)
      this.userInfoService.addCustomer(formData).then((data) => {
        if (data.status === 0) {
          this.showMessage('success', '保存成功', data.msg);
          this.formInit();
          IDImageUpload.clear();
          OtherImageUpload.clear();
        } else {
          this.showMessage('warn', '保存失败', data.msg);
        }
      }).catch((error) => {

      });
    } else {

    }
  }

  checkForm(): boolean {
    console.log(this.customer);
    if (this.customer.userName === '') {
      this.showMessage('warn', '', '请填写客户姓名！');
      return false;
    } else if (this.customer.principal === '') {
      this.showMessage('warn', '', '请填写姓名！');
      return false;
    } else if (this.customer.certificateId === '') {
      this.showMessage('warn', '', '请填写证件号码！');
      return false;
    } else if (this.certificateAddress === '' || this.certificateDetailAddress === '') {
      this.showMessage('warn', '', '请填写完整的证件地址信息！');
      return false;
    } else if (this.customer.deliveryAddress === '' || this.selectedCountyRegionId === '' ||
      this.selectedStreetRegionId === '') {
      this.showMessage('warn', '', '请填写完整的居住地址信息！');
      return false;
    } else if (this.customer.phone === '') {
      this.showMessage('warn', '', '请填写联系电话！');
      return false;
    } else if (this.customer.identity.length <= 0) {
      this.showMessage('warn', '', '请选择证件图片！');
      return false;
    } else if (this.customer.identity.length > 3 || this.customer.others.length > 3) {
      this.showMessage('warn', '', '最多上传文件三张图片！');
      return false;
    }

    if (this.customer.userTypeId.toString() !== '0') {
      if (this.customer.enterpriseOrganizationCode === '') {
        this.showMessage('warn', '', '请填写营业执照！');
        return false;
      } else if (this.customer.address === '') {
        this.showMessage('warn', '', '请填写注册地址！');
        return false;
      } else if (this.customer.legalRepresentative === '') {
        this.showMessage('warn', '', '请填写法定代表人！');
        return false;
      }
    }
    return true;
  }
  selectIDAddress(event) {
    this.certificateAddress = event.province.name + event.city.name + event.county.name;
  }

  selectConstractBeginDate(event) {
    this.customer.contractEffectiveDate = this.format.dateFormat(event, 'yyyy-MM-dd') + ' 00:00:00';
  }

  selectConstractEndDate(event) {
    this.customer.contractDeadline = this.format.dateFormat(event, 'yyyy-MM-dd') + ' 00:00:00';
  }

  showMessage(type, title, msg) {
    this.msgs.push({
      severity: type,
      summary: title,
      detail: msg
    });
    setTimeout(() => this.msgs = [], 2000);
  }

  uploadCustomerFile(event) {
    if (JSON.parse(event.xhr.responseText).status === 0) {
      this.showMessage('success', '上传成功', '');
    } else {
      this.showMessage('warn', '上传失败', JSON.parse(event.xhr.responseText).msg);
    }
  }

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
          this.selectedUrbanDistrict = '';
        } else {
          this.deliveryStreetList = data.data.map(
            element => ({ label: element.regionName, value: element.regionId }));
          this.deliveryStreetList.unshift({ label: '--请选择--', value: '' });
          this.selectedStreetRegionId = this.deliveryStreetList[0].value;
        }
      } else {
        if (countyRegionId.toString() === '330301') {
          this.showMessage('warn', '', '获取辖区信息失败');
        } else {
          this.showMessage('warn', '', '获取街道信息失败');
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
        this.showMessage('warn', '', '获取街道信息失败');
      }
    });
  }
}
