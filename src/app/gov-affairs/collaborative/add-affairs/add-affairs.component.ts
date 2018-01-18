import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN, DATE_LOCALIZATION } from './../../../core/date-localization';
import { CollaborativeService } from './../collaborative.service';

import * as moment from 'moment';


@Component({
  selector: 'gas-add-affairs',
  templateUrl: './add-affairs.component.html',
  styleUrls: ['./add-affairs.component.scss']
})
export class AddAffairsComponent implements OnInit {
  currentDate: Date = new Date();
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
      '4': {
        interfaceName: 'listGcCarrier',
        paramName: 'gcCarrierName',
        field: 'gcCarrierName',
        idName: 'gcCarrierId',
        name: '押送工'
      },
    }
  };

  constructor(
    @Inject(DATE_LOCALIZATION) public zh,
    private _service: CollaborativeService,
    private messageService: MessageService
  ) { }
  formModel: any = {
    objType: 1,
    objValue: null,
    time: null,
    originId: '',
    regionId: '',
    address: '',
    affairType: [],
    describe: '',
    file: null,
    helpDepartment: [],
    helpCompany: [],
    level: '1',
  };
  suggestions = [{}];
  ngOnInit() {
    this.getMultiSelectCompany();
    this.getMultiSelectDepartment();
    this.getDropdownRegion();
    this.getDropdownOrigin();
    this.getDropdownAffairsType();
  }
  checkForm(): boolean {
    if (this.formModel.objType === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务类型' });
      return false;
    } else if (this.formModel.objValue === null) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务对象' });
      return false;
    } else if (this.formModel.time === null) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写发现时间' });
      return false;
    } else if (this.formModel.originId === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写事务来源' });
      return false;
    } else if (this.formModel.regionId === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择所属区域' });
      return false;
    } else if (this.formModel.address === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写地地址信息' });
      return false;
    } else if (this.formModel.affairType.length === 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择事务类型' });
      return false;
    } else if (this.formModel.describe === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请填写描述信息' });
      return false;
    } else if (this.formModel.level === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择紧急程度' });
      return false;
    }
    // 检测是否填入了协同时间。
    const helpList = this.formModel.helpCompany.concat(this.formModel.helpDepartment);
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
          expirationDate: moment(item.time).format('YYYY-MM-DD HH:mm:ss')
        });
      });

      const formData = new FormData();
      formData.set('transactionHandleType', this.formModel.objType);
      // tslint:disable-next-line:max-line-length
      formData.set('transactionHandleNumber', this.formModel.objValue[this.config.autoComplete[this.formModel.objType].idName]);
      formData.set('transactionPatrolTime', moment(this.formModel.time).format('YYYY-MM-DD HH:mm:ss'));
      formData.set('transactionRegionId', this.formModel.regionId);
      formData.set('transactionAddress', this.formModel.address);
      formData.set('transactionTypeList', this.formModel.affairType);
      formData.set('description', this.formModel.describe);
      formData.set('cylinderImage', file.files[0]);
      formData.set('collaborativeOrganizationInfoTOS', JSON.stringify(helpList));
      formData.set('emergencyDegree', this.formModel.level);
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
  onBlurAutoComplete() {
    const config = this.config.autoComplete[this.formModel.objType];
    if (typeof this.formModel.objValue === 'string') {
      if (this.suggestions.length === 1 && this.suggestions[0][config.field] === this.formModel.objValue) {
        this.formModel.objValue = this.suggestions[0];
      } else {
        this.formModel.objValue = null;
      }
    }
  }

  transformDropdownAffairsType(data) {
    if (data) {
      const temp = {
        label: data.t.transactionTypeName,
        value: data.t.transactionTypeId
      };
      this.dropdown.affairsType.push(temp);
      if (data.children) {
        for (const item of data.children) {
          this.transformDropdownAffairsType(item);
        }
      }
    }
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
      }).catch(error => {
        this.suggestions = [];
        throw error;
      });
  }
  getMultiSelectDepartment() {
    this._service.listEventOrganizationId({})
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
      }).catch(error => {
        this.multiSelect.department = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
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
      }).catch(error => {
        this.multiSelect.company = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
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
      }).catch(error => {
        this.dropdown.region = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }
  getDropdownAffairsType() {
    this._service.listTransactionTypeInfo({})
      .then(data => {
        if (data.status === 0) {
          this.transformDropdownAffairsType(data.data);
        } else {
          this.dropdown.affairsType = [];
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.dropdown.affairsType = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
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
      }).catch(error => {
        this.dropdown.origin = [];
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }

  sendFormModel(params?) {
    this._service.insertTransactionBasic(params)
      .then(data => {
        if (data.status === 0) {
          this.resetFromModel();
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
