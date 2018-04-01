import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CylinderListService } from './cylinder-list.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-cylinder-list',
  templateUrl: './cylinder-list.component.html',
  styleUrls: ['./cylinder-list.component.scss'],
  providers: [CylinderListService]
})

export class CylinderListComponent implements OnInit {
  constructor(private routerInfo: ActivatedRoute, private cylinderListService: CylinderListService,
    private messageService: MessageService , private fb: FormBuilder) { }
  dropdown = {
    company: [
      {
        label: '全部 ',
        value: ''
      }
    ],
    make: [
      {
        label: '全部 ',
        value: ''
      }
    ],
    status: [
      {
        label: '全部 ',
        value: ''
      },
      {
        label: '正常 ',
        value: 0
      },
      {
        label: '过期 ',
        value: 1
      },
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
  };
  dataTable = {
    list: [],
    option: [10, 20, 40, 80],
    total: 0,
    first: 0
  };
  formModel: any = this.fb.group({
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    ownNumber: ''
  });
  pageParams = {
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    ownNumber: '',
    pageSize: this.dataTable.option[2],
    pageNumber: 1
  };

  onSearch(page?) {
    let params = {};
    if (this.formModel.valid) { // 通过了验证
      params = Object.assign({ pageNumber: 1, pageSize: this.pageParams.pageSize }, this.formModel.value);
      this.dataTable.first = 0;
      Object.assign(this.pageParams, params);
      this.getCylinders(params);
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

  onPageChange($event) {
    this.dataTable.list = [];
    this.onPageChange = (event) => {
      const page = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
      this.pageParams.pageSize = page.pageSize;
      this.getCylinders(Object.assign({}, this.pageParams, page));
    };
  }

  ngOnInit() {
    this.getCylinderSearchOpt();
    const enterpriseID = this.routerInfo.snapshot.params['enterpriseID'];
    if (typeof enterpriseID !== 'undefined') {
      this.formModel.patchValue({
        enterpriseNumber: enterpriseID
      });
      this.onSearch();
    }
  }

  getCylinderSearchOpt() {
    this.cylinderListService.getCylinderSearchOpt({}).then(data => {
      if (data.status === 0) {
        this.dropdown.company = this.dropdown.default.concat(data.data.enterpriseName);
        this.dropdown.make = this.dropdown.default.concat(data.data.productionUnit.map((item) => ({
          label: item.name,
          value: item.manufactureOrg
        })));
      } else {
        this.dropdown.company = this.dropdown.default;
        this.dropdown.make = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }

  getCylinders(params?) {
    this.cylinderListService.getCylinders(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.dataTable.first = 0;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}
