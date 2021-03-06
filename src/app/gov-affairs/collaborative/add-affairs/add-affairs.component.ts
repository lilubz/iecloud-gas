import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN } from './../../../common/date-localization';
import { CollaborativeService } from './../collaborative.service';

import * as moment from 'moment';
import { Util } from '../../../core/util';
import { API } from '../../../common/api';
import * as $ from 'jquery';

@Component({
  selector: 'gas-add-affairs',
  templateUrl: './add-affairs.component.html',
  styleUrls: ['./add-affairs.component.scss']
})
export class AddAffairsComponent implements OnInit {
  disabledSubmitBtn = false;
  zh = zh_CN;
  currentDate: Date = new Date();
  transactionHandleNumber;
  dropdown = {
    region: [],
    origin: [],
    affairsType: [],
    level: [
      {
        label: '1级（一般）',
        value: '1'
      },
      {
        label: '2级（重要）',
        value: '2'
      },
      {
        label: '3级（紧急）',
        value: '3'
      },
    ]
  };
  multiSelect = {
    company: [],
    department: []
  };
  document: any = document;
  config = {
    /**
     * autoComplete页面中的4个自动完成组件使用的选项，
     * interfaceName： API文件中接口名称，
     * paramName：用于自动完成组件触发查询时向后台发送参数的key
     * field：对应于自动完成组件中的field,要展示的数据的key
     * idName：用于onSubmit()中向后台发送表单时使用的key
     * name：仅用作展示，与autoComplete的key，和formModel.objType相对应的。
     */
    autoComplete: {
      '1': {
        interfaceName: 'listCorpInflatableStationInfo',
        paramName: 'corpInflatableStationName',
        field: 'inflatableName',
        idName: 'inflatableStationNumber',
        name: '充装站'
      },
      '2': {
        interfaceName: 'listCorpSupplyStation',
        paramName: 'supplyStationName',
        field: 'supplyStationName',
        idName: 'supplyStationNumber',
        name: '供应站'
      },
      '3': {
        interfaceName: 'listDispatcher',
        paramName: 'employeeName',
        field: 'dispatcherName',
        idName: 'dispatcherNumber',
        name: '送气工'
      },
      '5': {
        interfaceName: 'listGcCarrier',
        paramName: 'gcCarrierName',
        field: 'gcCarrierName',
        idName: 'gcCarrierId',
        name: '押送工'
      },
    }
  };

  constructor(
    private _service: CollaborativeService,
    private messageService: MessageService,
    private util: Util
  ) { }
  formModel: any = {
    objType: 1,
    objValue: null,
    time: null,
    originId: '',
    regionId: '',
    address: '',
    affairType: '',
    describe: '',
    file: null,
    helpDepartment: [],
    helpCompany: [],
    level: '1',
  };
  suggestions = [{}];
  IE9: boolean;
  redirectUrl: string;
  obj: any;
  @ViewChild('IEform') IEform: ElementRef;
  @ViewChild('InspectionTime') InspectionTime: ElementRef;

  @ViewChild('hidden') hidden: ElementRef;
  @ViewChild('collaborativeOrganizationInfoTOS') collaborativeOrganizationInfoTOS: ElementRef;
  ngOnInit() {
    this.getMultiSelectCompany();
    this.getMultiSelectDepartment();
    this.getDropdownRegion();
    this.getDropdownOrigin();
    this.getDropdownAffairsType();
    this.IE9 = this.util.isIE9();
    this.redirectUrl = this.util.getReturnUrl(API.insertTransactionBasic);
  }
  checkForm(): boolean {
    const helpList = this.formModel.helpCompany.concat(this.formModel.helpDepartment);
    if (this.formModel.objType === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务类型' });
      return false;
    } else if (this.formModel.objValue === null) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务对象' });
      return false;
    } else if (this.formModel.time === null) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写巡查时间' });
      return false;
    } else if (this.formModel.originId === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写事务来源' });
      return false;
    } else if (this.formModel.regionId === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择所属区域' });
      return false;
    } else if (!this.formModel.address.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写地址信息' });
      return false;
    } else if (this.formModel.affairType.length === 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务类型' });
      return false;
    } else if (!this.formModel.describe.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写描述信息' });
      return false;
    } else if (this.formModel.affairType === 2 && helpList.length < 1) { // 事务类别ID如果===2（交办）那么就必须选择协同对象
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择协同部门或企业' });
      return false;
    } else if (this.formModel.level === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择紧急程度' });
      return false;
    }
    // 检测是否填入了协同时间。
    const hasTime = helpList.every(item => item.time ? true : false);
    if (!hasTime) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写协同的截止时间' });
      return false;
    }
    return true;
  }

  resetFromModel(isInit = false) {
    this.formModel.file.value = null;
    this.formModel = {
      objType: 1,
      objValue: null,
      time: null,
      originId: this.dropdown.origin[0] ? this.dropdown.origin[0].value : '',
      regionId: this.dropdown.region[0] ? this.dropdown.region[0].value : '',
      address: '',
      affairType: [],
      describe: '',
      file: null,
      helpDepartment: [],
      helpCompany: [],
      level: '1',
    };
  }

  onSubmit(file) {
    this.formModel.file = file;
    if (this.checkForm()) {
      const helpList: any = [];
      this.formModel.helpCompany.concat(this.formModel.helpDepartment).forEach(item => {
        helpList.push({
          organizationId: item.organizationId,
          expirationDate: moment(item.time).format('YYYY-MM-DD HH:mm:ss'),
          userId: item.userId,
        });
      });

      const formData = new FormData();
      formData.append('transactionHandleType', this.formModel.objType);
      // tslint:disable-next-line:max-line-length
      formData.append('transactionHandleNumber', this.formModel.objValue[this.config.autoComplete[this.formModel.objType].idName]);
      formData.append('transactionPatrolTime', moment(this.formModel.time).format('YYYY-MM-DD HH:mm:ss'));
      formData.append('transactionRegionId', this.formModel.regionId);
      formData.append('transactionAddress', this.formModel.address);
      formData.append('transactionTypeId', this.formModel.affairType);
      formData.append('description', this.formModel.describe);
      formData.append('cylinderImage', file.files[0] || '');
      formData.append('collaborativeOrganizationInfoTOS', JSON.stringify(helpList));
      formData.append('emergencyDegree', this.formModel.level);
      formData.append('transactionSource', this.formModel.originId);
      this.sendFormModel(formData);
    }
  }
  onReset(file) {
    this.formModel.file = file;
    this.resetFromModel();
  }
  onObjTypeChange() {
    this.formModel.objValue = null;
    this.suggestions = [{}];
  }
  onAffairTypeChange() {
    if (this.formModel.affairType === 1) {
      this.formModel.helpCompany = [];
      this.formModel.helpDepartment = [];
    }
  }

  onBlurAutoComplete() {
    const config = this.config.autoComplete[this.formModel.objType];
    if (typeof this.formModel.objValue === 'string') {
      if (this.suggestions.length === 1 && this.suggestions[0][config.field] === this.formModel.objValue) {
        this.formModel.objValue = this.suggestions[0];
      } else {
        this.formModel.objValue = null;
      }
    }
    // this.obj= this.formModel.objValue[this.config.autoComplete[this.formModel.objType].idName];
  }

  // http 请求
  getSuggestions(event) {
    const config = this.config.autoComplete[this.formModel.objType];
    const param = {};
    param[config.paramName] = event.query;
    this._service.get(config.interfaceName, param)
      .then(data => {
        if (data.status === 0) {
          this.suggestions = data.data;
        } else {
          this.suggestions = [];
        }
      });
  }
  getMultiSelectDepartment() {
    this._service.listChildUserId({})
      .then(data => {
        if (data.status === 0) {
          this.multiSelect.department = data.data.map(item => {
            item.time = null;
            return item;
          });
        } else {
          this.multiSelect.department = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getMultiSelectCompany() {
    this._service.listCollaborativeInfo({})
      .then(data => {
        if (data.status === 0) {
          this.multiSelect.company = data.data.map(item => {
            item.time = null;
            return item;
          });
        } else {
          this.multiSelect.company = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDropdownRegion() {
    this._service.listRegionInfo({})
      .then(data => {
        if (data.status === 0) {
          this.dropdown.region = data.data.map((item) => ({
            label: item.regionName,
            value: item.regionId
          }));
          this.formModel.regionId = this.dropdown.region[0].value;

        } else {
          this.dropdown.region = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDropdownAffairsType() {
    this._service.listTransactionTypeInfo({})
      .then(data => {
        if (data.status === 0) {
          this.dropdown.affairsType = data.data.map((item) => ({
            value: item.transactionTypeId,
            label: item.transactionTypeName
          }));
        } else {
          this.dropdown.affairsType = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  getDropdownOrigin() {
    this._service.listTransactionSourceInfo({})
      .then(data => {
        if (data.status === 0) {
          this.dropdown.origin = data.data.map((item) => ({
            label: item.transactionSourceName,
            value: item.transactionSource
          }));
          this.formModel.originId = this.dropdown.origin[0].value;
        } else {
          this.dropdown.origin = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  sendFormModel(params?) {
    this.disabledSubmitBtn = true;
    this._service.insertTransactionBasic(params)
      .then(data => {
        this.disabledSubmitBtn = false;
        if (data.status === 0) {
          this.resetFromModel();
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
  IESubmit(form) {
    if (this.checkForm()) {
      const helpList: any = [];
      this.formModel.helpCompany.concat(this.formModel.helpDepartment).forEach(item => {
        helpList.push({
          organizationId: item.organizationId,
          expirationDate: moment(item.time).format('YYYY-MM-DD HH:mm:ss'),
          userId: item.userId,
        });
      this.collaborativeOrganizationInfoTOS.nativeElement.value = JSON.stringify(helpList) ;
    });
    this.InspectionTime.nativeElement.value = moment(this.formModel.time).format('YYYY-MM-DD') + ' 00:00:00';
    this.hidden.nativeElement.value = this.formModel.objValue.inflatableStationNumber;
    this.IEform.nativeElement.submit();
    }
  }
}
