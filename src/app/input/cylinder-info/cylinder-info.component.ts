import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

import { CylinderInfoService, } from './cylinder-info.service';
import { UserStateService } from './../../core/userState.service';
import { MessageService } from 'primeng/components/common/messageservice';

import { SelectItem } from 'primeng/primeng';
import { zh_CN } from './../../common/date-localization';
import { strictEqual } from 'assert';
import { Message } from 'primeng/components/common/api';
import { API } from '../../common/api';
import * as moment from 'moment';
import { Util } from '../../core/util';
import * as $ from 'jquery';
@Component({
  selector: 'gas-cylinder-info',
  templateUrl: './cylinder-info.component.html',
  styleUrls: ['./cylinder-info.component.scss'],
  providers: [CylinderInfoService]
})
export class CylinderInfoComponent implements OnInit {
  cn = zh_CN;

  cylinderInfoUrl = API.importGasCylinderInfoUnbound;
  property: SelectItem[] = [
    { label: '自有', value: '1' },
    { label: '非自有', value: '2' },
  ];
  selectedProperty: boolean;
  manufactureName: SelectItem[] = [];
  equipmentVarieties: SelectItem[] = [];
  fillingMedia: SelectItem[] = [];
  model: SelectItem[] = [];
  lastTestUnit: SelectItem[] = [{ label: '请选择', value: '' }];
  msgs: Message[] = [];
  dropdown = {
    default: [
      { label: '请选择', value: '' }
    ],
  };
  // 气瓶录入数据
  cylinderInfo: {
    gasLabelNumber?: string;
    serialNumber?: string,
    enterpriseCylinderCode?: string,
    productNature?: string,
    enterpriseName?: string,
    manufacturingOrganizationName?: string,
    intoStationDate?: string,
    timeManufacture?: string,
    expectedScrapTime?: string,
    equipmentVarieties?: string,
    fillingMedia?: string,
    specificationId?: string,
    volume?: string,
    weight?: string,
    designWallThickness?: string,
    waterPressureTest?: string,
    nominalWorkingPressure?: string,
    inspectionOrganizationName?: string,
    inspectionNumber?: string,
    lastInspectionTime?: string,
    nextInspectionTime?: string,
    cylinderImage?: File[],
    innerDiameter?: string,
  } = {
      gasLabelNumber: '',
      serialNumber: '',
      enterpriseCylinderCode: '',
      productNature: '',
      enterpriseName: '',
      manufacturingOrganizationName: '',
      intoStationDate: '',
      timeManufacture: '',
      expectedScrapTime: '',
      equipmentVarieties: '',
      fillingMedia: '',
      specificationId: '',
      volume: '',
      weight: '',
      designWallThickness: '',
      waterPressureTest: '',
      nominalWorkingPressure: '',
      inspectionOrganizationName: '',
      inspectionNumber: '',
      lastInspectionTime: '',
      nextInspectionTime: '',
      cylinderImage: [],
      innerDiameter: '1',
    };
  intoStationDateInit: Date;
  expectedScrapTimeInit: Date;
  timeManufactureInit: Date;
  lastTestDateInit: Date;
  nextTestDateInit: Date;
  IE9: boolean;
  redirectUrl: string;
  FileUrl: string;
  @ViewChild('intoStationDate') intoStationDate: ElementRef;
  @ViewChild('timeManufacture') timeManufacture: ElementRef;
  @ViewChild('expectedScrapTime') expectedScrapTime: ElementRef;
  @ViewChild('lastInspectionTime') lastInspectionTime: ElementRef;
  @ViewChild('nextInspectionTime') nextInspectionTime: ElementRef;
  @ViewChild('IEform') IEform: ElementRef;
  @ViewChild('FIle') FIle: ElementRef;

  constructor(
    private _service: CylinderInfoService,
    private util: Util,
  ) { }

  ngOnInit() {
    this.cylinderInfo.productNature = '1';
    const params = this.cylinderInfo.productNature;
    this.onchangeProperty(params);
    this.getlistManufactureOrg();
    this.getlistGcType();
    this.getlistFillingMedium();
    this.getlistGcSpecification();
    this.getlistInspection();
    this.getGcSpecification();
    this.cylinderInfo.gasLabelNumber = this._service.transformEnterpriseNumber();
    this.IE9 = this.util.isIE9();
    this.redirectUrl = this.util.getReturnUrl(API.insertGCInfoBasic);
    this.FileUrl = this.util.getReturnUrl(API.importGasCylinderInfoUnbound);
  }
  searchCylinder(param?) {
    const params = {
      enterpriseCylinderCode: param
    };
    // console.log(this.cylinderInfo.serialNumber.length);
    this._service.getEnterpriseCylinderCode(params).then(data => {
      if (data.status !== 0) {
        this.showMessage('warn', '', data.msg);
        this.cylinderInfo.enterpriseCylinderCode = '';
        // console.log('111111');
      } else {
        // this.showMessage('', '', data.msg);
      }
    });
  }
  // 产权单位
  onchangeProperty(params) {
    if (params === '1') {
      // console.log(11);
      this.selectedProperty = true;
      this._service.getEnterpriseName({}).then(data => {
        if (data.status === 0) {
          this.cylinderInfo.enterpriseName = data.data;
        }
      });
    } else {
      this.selectedProperty = false;
      this.cylinderInfo.enterpriseName = '';
    }
  }

  // 生产单位
  getlistManufactureOrg() {
    this._service.getListManufactureOrg('').then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.name,
            value: item.name,
          };
        });
        this.manufactureName = list;
        this.cylinderInfo.manufacturingOrganizationName = this.manufactureName[0].value;
      }
    });
  }
  // 气瓶类型
  getlistGcType() {
    this._service.getListGcType('').then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.name,
            value: item.name,
          };
        });
        this.equipmentVarieties = list;
        this.cylinderInfo.equipmentVarieties = this.equipmentVarieties[0].value;
      }
    });
  }
  // 充装质介
  getlistFillingMedium() {
    this._service.getListFillingMedium('').then(data => {
      if (data.status === 0) {
        const list = {
          label: data.msg,
          value: data.msg
        };
        this.fillingMedia = this.fillingMedia.concat(list);
        this.cylinderInfo.fillingMedia = this.fillingMedia[0].value;

      }
    });
  }
  // 型号规格
  getlistGcSpecification() {
    this._service.getListGcSpecification('').then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.specificationId,
            value: item.specificationId,
          };
        });
        this.model = list;
        this.cylinderInfo.specificationId = this.model[0].value;
        this.onChangeModel();
      }
    });
  }
  // 上次检测单位
  getlistInspection() {
    this._service.getListInspection('').then(data => {
      if (data.status === 0) {
        this.lastTestUnit = this.dropdown.default.concat(data.data.map((item) => {
          return {
            label: item.inspectionOrganizationName,
            value: item.inspectionOrganizationNumber,
          };
        }));
        // this.cylinderInfo.inspectionOrganizationName = this.lastTestUnit[0].value
      } else {
        this.lastTestUnit = this.dropdown.default;
      }
    });
  }
  onChangeModel(event?) {
    const params = {
      gcSpecificationId: event ? event.value : this.cylinderInfo.specificationId
    };
    this.getGcSpecification(params);
  }
  getGcSpecification(params?) {
    this._service.getGcSpecification(params).then(data => {
      if (data.status === 0) {
        this.cylinderInfo.volume = data.data.volume;
        this.cylinderInfo.weight = data.data.weight;
        this.cylinderInfo.designWallThickness = data.data.designWallThickness;
        this.cylinderInfo.waterPressureTest = data.data.waterPressureTest;
        this.cylinderInfo.nominalWorkingPressure = data.data.nominalWorkingPressure;
      }
    });
  }
  selectedIntoStationDate(event) {
    this.cylinderInfo.intoStationDate = moment(event).format('YYYY-MM-DD HH:mm:ss');
  }
  selectedTimeManufacture(event) {
    this.cylinderInfo.timeManufacture = moment(event).format('YYYY-MM-DD HH:mm:ss');
  }
  selectedExpectedScrapTime(event) {
    this.cylinderInfo.expectedScrapTime = moment(event).format('YYYY-MM-DD HH:mm:ss');
  }
  selectedLastTestDate(event) {
    this.cylinderInfo.lastInspectionTime = moment(event).format('YYYY-MM-DD HH:mm:ss');
  }
  selectedNextTestDate(event) {
    this.cylinderInfo.nextInspectionTime = moment(event).format('YYYY-MM-DD HH:mm:ss');
  }
  clearIntoStationDate(event) {
    this.cylinderInfo.intoStationDate = '';
  }
  clearTimeManufacture(event) {
    this.cylinderInfo.timeManufacture = '';
  }
  clearExpectedScrapTime(event) {
    this.cylinderInfo.expectedScrapTime = '';
  }
  clearLastTestDate(event) {
    this.cylinderInfo.lastInspectionTime = '';
  }
  clearNextTestDate(event) {
    this.cylinderInfo.nextInspectionTime = '';
  }

  save(CylinderImage: any) {
    this.cylinderInfo.cylinderImage = CylinderImage.files;
    if (this.checkForm()) {
      const formData = new FormData();
      // formData.append()
      for (const key in this.cylinderInfo) {
        if (key) {
          if (key === 'cylinderImage') {
            // formData.append(key, '');
            for (const file of this.cylinderInfo[key]) {
              formData.append(key, file);
            }
          } else if (key === 'waterPressureTest') {
            formData.append(key, '');
          } else {
            formData.append(key, this.cylinderInfo[key]);
          }

        }
      }
      this._service.addInformation(formData).then((data) => {
        if (data.status === 0) {
          this.showMessage('success', '提示信息', '添加成功');
          this.clearInfo();
          CylinderImage.clear();

        } else {
          CylinderImage.clear();
          this.showMessage('warn', '提示信息', '添加失败');

        }
      }, error => {
        CylinderImage.clear();
        this.showMessage('error', '服务器错误', error);
      });

    }
  }
  clearInfo() {
    this.cylinderInfo.gasLabelNumber = this._service.transformEnterpriseNumber();
    this.cylinderInfo.serialNumber = '';
    this.cylinderInfo.inspectionNumber = '';
    this.timeManufactureInit = null;
    this.intoStationDateInit = null;
    this.expectedScrapTimeInit = null;
    this.lastTestDateInit = null;
    this.nextTestDateInit = null;
  }

  checkForm(): boolean {
    // console.log(this.cylinderInfo);
    if (!this.cylinderInfo.gasLabelNumber.trim()) {
      this.showMessage('warn', '提示信息', '气瓶条码不能为空');
      return false;
    } else if (!/^\d{10}$/.test(this.cylinderInfo.gasLabelNumber)) {
      this.showMessage('warn', '提示信息', '请输入十位完整的气瓶条码');
      return false;
    } else if (this.cylinderInfo.gasLabelNumber.substring(0, 3) !== this._service.transformEnterpriseNumber()) {
      this.showMessage('warn', '提示信息', '前三位编码不是默认值请重新输入');
      return false;
    } else if (!this.cylinderInfo.serialNumber.trim()) {
      this.showMessage('warn', '提示信息', '气瓶出厂编号不能为空');
      return false;
    } else if (!/^\d+$/.test(this.cylinderInfo.serialNumber)) {
      this.showMessage('warn', '提示信息', '气瓶出厂编号为纯数字');
      return false;
    } else if (!this.cylinderInfo.enterpriseCylinderCode.trim()) {
      this.showMessage('warn', '提示信息', '企业自有编号不能为空');
      return false;
    } else if (!this.cylinderInfo.productNature.trim()) {
      this.showMessage('warn', '提示信息', '产权性质不能为空');
      return false;
    } else if (!this.cylinderInfo.enterpriseName.trim()) {
      this.showMessage('warn', '提示信息', '产权单位不能为空');
      return false;
    } else if (!this.cylinderInfo.manufacturingOrganizationName) {
      this.showMessage('warn', '提示信息', '生产单位不能为空');
      return false;
    } else if (!this.cylinderInfo.intoStationDate) {
      this.showMessage('warn', '提示信息', '进站日期不能为空');
      return false;
    } else if (!this.cylinderInfo.timeManufacture) {
      this.showMessage('warn', '提示信息', '制造日期不能为空');
      return false;
    } else if (!this.cylinderInfo.expectedScrapTime) {
      this.showMessage('warn', '提示信息', '报废日期不能为空');
      return false;
    } else if (!this.cylinderInfo.equipmentVarieties) {
      this.showMessage('warn', '提示信息', '设备品种不能为空');
      return false;
    } else if (!this.cylinderInfo.fillingMedia) {
      this.showMessage('warn', '提示信息', '充装介质不能为空');
      return false;
    } else if (!this.cylinderInfo.specificationId) {
      this.showMessage('warn', '提示信息', '型号规格不能为空');
      return false;
    } else if (this.IMG()) {
      this.showMessage('warn', '提示信息', '最多上传两张图片！');
      return false;
    } else if (!this.cylinderInfo.lastInspectionTime) {
      this.showMessage('warn', '提示信息', '上次检测日期不能为空');
      return false;
    }else if (!this.cylinderInfo.nextInspectionTime) {
      this.showMessage('warn', '提示信息', '下次检测日期不能为空');
      return false;
    }else if (!this.cylinderInfo.inspectionOrganizationName) {
      this.showMessage('warn', '提示信息', '上次检测单位不能为空');
      return false;
    }
    return true;
  }
  IESubmit(form) {
    if (this.checkForm()) {
      this.intoStationDate.nativeElement.value = moment(this.intoStationDateInit).format('YYYY-MM-DD') + ' 00:00:00';
      this.timeManufacture.nativeElement.value = moment(this.timeManufactureInit).format('YYYY-MM-DD') + ' 00:00:00';
      this.expectedScrapTime.nativeElement.value = moment(this.expectedScrapTimeInit).format('YYYY-MM-DD') + ' 00:00:00';
      this.lastInspectionTime.nativeElement.value = moment(this.lastTestDateInit).format('YYYY-MM-DD') + ' 00:00:00';
      this.nextInspectionTime.nativeElement.value = moment(this.nextTestDateInit).format('YYYY-MM-DD') + ' 00:00:00';
      this.IEform.nativeElement.submit();
    }
  }
  SubmitFile(form) {
    if (!$('#gasCylinderExcel').val()) {
      this.showMessage('warn', '提示信息', '请上传文件！');
    } else {
      this.FIle.nativeElement.submit();
    }

  }
  IMG(): boolean {
    if (this.IE9) {

    } else {
      if (this.cylinderInfo.cylinderImage.length > 2) {
        return true;
      } else {
        return false;
      }
    }

  }



  result(event) {
    const data = JSON.parse(event.xhr.responseText);
    if (event.xhr.status === 200) {
      // console.log(event);
      if (data.status === 0) {
        this.showMessage('success', '提示信息', '结果' + data.msg);
      } else {
        this.showMessage('warn', '提示信息', '结果' + data.msg);
      }
    } else {
      this.showMessage('error', '提示信息', '结果' + data.msg);
    }

  }
  showMessage(type, title, msg) {
    this.msgs.push({
      severity: type,
      summary: title,
      detail: msg
    });
    setTimeout(() => this.msgs = [], 2000);
  }
}
