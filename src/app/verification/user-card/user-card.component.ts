import {
  Component,
  OnInit
} from '@angular/core';

import {
  UserInfoService
} from './user-card.service';
import {
  MessageService
} from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
  providers: [UserInfoService]
})

export class UserCardComponent implements OnInit {
  dropdown = {
    default: {
      label: '全部',
      value: ''
    },
    regionOpt: [{
      label: '全部',
      value: ''
    }],
    statusOpt: [{
      label: '全部',
      value: ''
    },
    {
      label: '待审核',
      value: '待审核'
    },
    {
      label: '通过',
      value: '通过'
    },
    {
      label: '拒绝',
      value: '拒绝'
    },
    ],
  };
  searchParams = {
    region: '',
    status: ''
  };
  dataTable = {
    list: [],
    total: 0,
    pageOpt: [10, 20, 30, 40]
  };
  constructor(private userInfoService: UserInfoService, private messageService: MessageService) { }
  ngOnInit() {
    this.getRegionInfo();
  }
  onSearch(page?) {
    const params = {
      regionId: this.searchParams.region,
      status: this.searchParams.status,
      pageNumber: 1,
      pageSize: this.dataTable.pageOpt[0]
    };
    if (typeof page !== 'undefined') {
      params.pageNumber = page.pageNumber;
      params.pageSize = page.pageSize;
    }
    this.getUserCardInfo(params);
  }
  onPageChange(event) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };
    console.log(event);
    this.onSearch(page);
  }
  onExamine(id, isPass: boolean) {
    this.sendCheckApply({
      applyId: 1,
      isPass: isPass
    });
  }
  getRegionInfo(params?) {
    this.userInfoService.getRegionInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.regionOpt = data.data.map((item) => {
            return {
              label: item.regionName,
              value: item.regionId
            };
          });
          this.dropdown.regionOpt.unshift(this.dropdown.default);
          this.setMessages('success', '操作成功', data.msg);
        } else {
          this.setMessages('warn', '响应消息', data.msg);
        }
      }).catch(error => {
        this.setMessages('error', '出错了', '错误代码：' + error.status);
        throw error;
      });
  }
  getUserCardInfo(params?) {
    this.userInfoService.getUserCertNumApply(params)
      .then(data => {
        if (data.status === 0) {
          this.dataTable.list = data.data.list;
          this.dataTable.total = data.data.total;
        } else {
          this.dataTable.list = [];
          this.dataTable.total = 0;
          this.setMessages('warn', '响应消息', data.msg);
        }
      }).catch(error => {
        this.dataTable.list = [];
        this.dataTable.total = 0;
        this.setMessages('error', '出错了', '错误代码：' + error.status);
        throw error;
      });
  }
  sendCheckApply(params?) {
    this.userInfoService.getCheckApply(params)
      .then(data => {
        if (data.status === 0) {
          this.onSearch();
          this.setMessages('success', '操作成功', data.msg);
        } else {
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
