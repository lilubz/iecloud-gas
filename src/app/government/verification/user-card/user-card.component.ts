import { Component, OnInit } from '@angular/core';

import { UserInfoService } from './user-card.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-user-card',
  templateUrl: 'user-card.component.html',
  styleUrls: ['user-card.component.scss'],
  providers: [UserInfoService]
})

export class UserCardComponent implements OnInit {
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    regionOpt: [
      {
        label: '全部',
        value: ''
      }
    ],
    statusOpt: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '待审核',
        value: '待审核'
      },
      {
        label: '审核完成',
        value: '审核完成'
      },
      {
        label: '驳回',
        value: '驳回'
      },
    ],
  };
  searchParams = {
    regionId: '',
    status: ''
  };
  dataTable = {
    list: [],
    total: 0,
    pageOpt: [5, 10, 20, 40],
    size: 10
  };
  constructor(private userInfoService: UserInfoService, private messageService: MessageService) { }
  ngOnInit() {
    this.getRegionInfo();
  }
  onSearch(page?) {
    const params = Object.assign({ pageNumber: 1, pageSize: this.dataTable.size }, this.searchParams);
    if (typeof page !== 'undefined') {
      params.pageNumber = page.pageNumber;
      this.dataTable.size = params.pageSize = page.pageSize;
    }
    this.getUserCardInfo(params);
  }

  onPageChange(event) {
    const page = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1
    };
    this.onSearch(page);
  }

  onExamine(id, isPass: boolean) {
    this.sendCheckApply({
      applyId: id,
      isPass: isPass
    });
  }
  getRegionInfo(params?) {
    this.userInfoService.getRegionInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.regionOpt = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.regionName,
            value: item.regionId
          })));
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
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
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }

  sendCheckApply(params?) {
    this.userInfoService.getCheckApply(params)
      .then(data => {
        if (data.status === 0) {
          this.onSearch();
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}
