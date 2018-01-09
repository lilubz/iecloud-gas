import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { CollaborativeService } from './collaborative.service';
import { validator } from '../../core/validator';
import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN, DATE_LOCALIZATION } from './../../core/date-localization';
import { Format } from './../../core/format.service';
import * as moment from 'moment';
@Component({
  selector: 'gas-collaborative',
  templateUrl: './collaborative.component.html',
  styleUrls: ['./collaborative.component.scss']
})
export class CollaborativeComponent implements OnInit {
  document: any = document;
  file;
  config = {
    affairType: this._service.getConfig().affairType,
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
      '4': {
        interfaceName: 'listGcCarrier',
        paramName: 'gcCarrierName',
        field: 'gcCarrierName',
        idName: 'gcCarrierId',
        name: '押送工'
      },
    },
    degree: this._service.getConfig().degree,
  };
  regionOptions = [];
  visible = false;
  helpDepartmentList = [];
  constructor(
    @Inject(DATE_LOCALIZATION) public zh,
    private _service: CollaborativeService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }
  formModel: any = {
    objType: '1',
    objValue: '',
    time: '',
    address: '',
    affairType: [],
    describe: '',
    file: '',
    help: [],
    level: '1',
    transactionRegionId: '',
  };
  suggestions = [{}];
  ngOnInit() {
    this.getHelpDepartmentList();
    this.getReginOptions();
  }
  onTest() {
    console.log(this);
  }
  checkForm(): boolean {
    if (this.formModel.objType === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务类型' });
      return false;
    } else if (this.formModel.objValue === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务对象' });
      return false;
    } else if (this.formModel.time === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写巡查时间' });
      return false;
    } else if (this.formModel.address === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写事务地点' });
      return false;
    } else if (this.formModel.affairType.length === 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务类别' });
      return false;
    } else if (this.formModel.describe === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写描述信息' });
      return false;
    }
    return true;
  }
  initForm() {
    this.formModel = {
      objType: '1',
      objValue: '',
      time: '',
      address: '',
      affairType: [],
      describe: '',
      file: '',
      help: [],
      level: '1',
      transactionRegionId: this.regionOptions[0] ? this.regionOptions[0].value : ''
    };
    this.file.value = '';
  }
  onSave(file) {
    this.file = file;
    if (this.checkForm()) {
      console.log(this.formModel.help);
      const params = {
        transactionHandleType: this.formModel.objType,
        transactionHandleNumber: this.formModel.objValue[this.config.autoComplete[this.formModel.objType].idName],
        transactionPatrolTime: moment(this.formModel.time).format('YYYY-MM-DD HH:mm:ss'),
        transactionAddress: this.formModel.address,
        transactionTypeList: this.formModel.affairType,
        description: this.formModel.describe,
        cylinderImage: file.files[0],
        organizationIdList: this.formModel.help,
        emergencyDegree: this.formModel.level,
        transactionRegionId: this.formModel.transactionRegionId
      };
      const formData = new FormData();
      // tslint:disable-next-line:forin
      for (const key in params) {
        formData.append(key, params[key]);
      }
      this.sendFormModel(formData);
    }
  }
  onCancel(file) {
    this.file = file;
    this.visible = false;
    this.initForm();
  }
  onObjTypeChange() {
    this.formModel.objValue = '';
    this.suggestions = [{}];
  }
  onBlurAutoComplete() {
    const config = this.config.autoComplete[this.formModel.objType];
    if (typeof this.formModel.objValue === 'string') {
      if (this.suggestions.length === 1 && this.suggestions[0][config.field] === this.formModel.objValue) {
        this.formModel.objValue = this.suggestions[0];
      } else {
        this.formModel.objValue = '';
      }
    }
  }
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
      }).catch(error => {
        this.suggestions = [];
        throw error;
      });
  }
  getHelpDepartmentList() {
    this._service.listEventOrganizationId({})
      .then(data => {
        if (data.status === 0) {
          this.helpDepartmentList = data.data;
        } else {
          this.helpDepartmentList = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.helpDepartmentList = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getReginOptions() {
    this._service.listRegionInfo({})
      .then(data => {
        if (data.status === 0) {
          this.regionOptions = data.data.map((item) => ({
            label: item.regionName,
            value: item.regionId
          }));
          this.formModel.transactionRegionId = this.regionOptions[0].value;

        } else {
          this.regionOptions = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.regionOptions = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  sendFormModel(params?) {
    this._service.insertTransactionBasic(params)
      .then(data => {
        if (data.status === 0) {
          this.initForm();
          this.visible = false;
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
}
