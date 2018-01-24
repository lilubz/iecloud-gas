import { Component, OnInit} from '@angular/core';
import { FormBuilder, AbstractControl, Validators, FormGroup} from '@angular/forms';

import { DispatcherService } from './dispatcher.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { validator } from '../../../common/validator';

@Component({
  selector: 'gas-dispatcher',
  templateUrl: 'dispatcher.component.html',
  styleUrls: ['dispatcher.component.scss'],
  providers: [DispatcherService]
})

export class DispatcherComponent implements OnInit {
  constructor(private dispatcherService: DispatcherService, private messageService: MessageService,
    private fb: FormBuilder) { }
  dropdown = {
    companyOpt: [
      {
        label: '全部',
        value: ''
      }
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ]
  };
  dataTable = {
    list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
  };
  formModel: any = this.fb.group({
    enterpriseId: '',
    name: '',
    jobNumber: '',
    phone: ['', validator.phone],
    idNumber: ['', validator.idNumber]
  });
  pageParams = {
    enterpriseId: '',
    name: '',
    jobNumber: '',
    phone: '',
    idNumber: '',
    pageSize: this.dataTable.option[1],
    pageNumber: 1
  };

  ngOnInit() {
    this.cylinderSelectOpt();
  }

  onSearch() {
    let params = {};
    if (this.formModel.valid) { // 通过了验证
      params = Object.assign({ pageNumber: 1, pageSize: this.pageParams.pageSize }, this.formModel.value);
      this.dataTable.first = 0;
      Object.assign(this.pageParams, params);
      this.getDispatcherInfo(params);
    } else { // 没有通过验证
      for (const key in this.formModel.controls) {
        if (this.formModel.controls[key].errors) {
          const msg = this.formModel.controls[key].errors.msg;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: msg });
          return;
        }
      }
    }
  }

  onPageChange(event) {
    const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    this.getDispatcherInfo(Object.assign({}, this.pageParams, page));
  }

  getDispatcherInfo(params?) {
    this.dispatcherService.getDispatcherInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.dataTable.list = [];
        this.dataTable.total = 0;
        this.messageService.add({severity: 'error', summary: '出错了', detail: '错误代码：' + error.status});
        throw error;
      });
  }

  cylinderSelectOpt(params?) {
    this.dispatcherService.getDropdownForCorpInfoInRegion(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.companyOpt = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.enterpriseName,
            value: item.enterpriseNumber
          })));
        } else {
          this.dropdown.companyOpt = this.dropdown.default;
          this.messageService.add({severity: 'warn', summary: '响应消息', detail: data.msg});
        }
      }).catch(error => {
        this.dropdown.companyOpt = this.dropdown.default;
        this.messageService.add({severity: 'error', summary: '出错了', detail: '错误代码：' + error.status});
        throw error;
      });
  }
}
