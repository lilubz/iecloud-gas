import {
  Component,
  OnInit
} from '@angular/core';

import { DispatcherService } from './dispatcher.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-dispatcher',
  templateUrl: 'dispatcher.component.html',
  styleUrls: ['dispatcher.component.scss'],
  providers: [DispatcherService]
})

export class DispatcherComponent implements OnInit {
  constructor(private dispatcherService: DispatcherService, private messageService: MessageService) { }
  dropdown = {
    companyOpt: [{
      label: '全部',
      value: ''
    }
    ],
    stateOpt: [{
      label: '全部',
      value: ''
    },
    {
      label: '正常',
      value: '正常'
    },
    {
      label: '黑名单',
      value: '黑名单'
    },
    {
      label: '暂停',
      value: '暂停'
    },
    ],
  };
  searchParams = {
    enterpriseId: '',
    status: '',
    name: '',
    jobNumber: '',
    phone: '',
    idNumber: ''
  };

  pageParams = {
    enterpriseId: '',
    status: '',
    name: '',
    jobNumber: '',
    phone: '',
    idNumber: '',
    pageSize: 10,
    pageNumber: 1
  };
  dataTable = {
    list: [],
    pageOpt: [10, 20, 30, 40],
    total: 1,
  };
  ngOnInit() {
    this.cylinderSelectOpt();
  }
  onSearch(page?) {
    let params = {};
    if (typeof page === 'undefined') {
      // tslint:disable-next-line:forin
      for (const key in this.searchParams) {
        params[key] = this.searchParams[key];
      }
      params['pageNumber'] = 1;
      params['pageSize'] = 10;
    } else {
      this.pageParams.pageNumber = page.pageNumber;
      this.pageParams.pageSize = page.pageSize;
      params = this.pageParams;
    }
    this.getDispatcherInfo(params);
  }

  onPageChange(event) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    this.onSearch(page);
  }
  getDispatcherInfo(params?) {
    this.dispatcherService.getDispatcherInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
          // tslint:disable-next-line:forin
          for (const key in this.searchParams) {
            this.pageParams[key] = this.searchParams[key];
          }
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.setMessages('warn', '响应消息', data.msg);
        }
      }).catch(error => {
        this.setMessages('error', '出错了', '错误代码：' + error.status);
        throw error;
      });
  }

  cylinderSelectOpt(params?) {
    this.dispatcherService.getDropdownForCorpInfoInRegion(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.companyOpt = data.data.map((item) => {
            return {
              label: item.enterpriseName,
              value: item.enterpriseNumber
            };
          });
          this.dropdown.companyOpt.unshift({
            label: '全部',
            value: '',
          });
        } else {
          this.dropdown.companyOpt = [];
          this.dropdown.companyOpt.unshift({
            label: '全部',
            value: '',
          });
          this.setMessages('warn', '响应消息', data.msg);
        }
      }).catch(error => {
        this.setMessages('error', '出错了', '错误代码：' + error.status);
        throw error;
      });
  }

  setMessages(type, title, msg) {
    this.messageService.add({
      severity: type,
      summary: title,
      detail: msg,
    });
  }
}
