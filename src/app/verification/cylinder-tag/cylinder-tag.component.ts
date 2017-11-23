import { Component, OnInit } from '@angular/core';
import { CylinderTagService } from './cylinder-tag.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-cylinder-tag',
  templateUrl: './cylinder-tag.component.html',
  styleUrls: ['./cylinder-tag.component.scss'],
  providers: [CylinderTagService]
})
export class CylinderTagComponent implements OnInit {
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
  constructor(private cylinderTagService: CylinderTagService, private messageService: MessageService) { }
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
    this.onSearch(page);
  }
  onExamine(id, isPass: boolean) {
    this.sendCheckApply({
      applyId: id,
      isPass: isPass
    });
  }
  getRegionInfo(params?) {
    this.cylinderTagService.getRegionInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.regionOpt = data.data.map((item) => {
            return {
              label: item.regionName,
              value: item.regionId
            };
          });
          this.dropdown.regionOpt.unshift(this.dropdown.default);
        } else {
          this.setMessages('warn', '响应消息', data.msg);
        }
      }).catch(error => {
        this.setMessages('error', '出错了', '错误代码：' + error.status);
        throw error;
      });
  }
  getUserCardInfo(params?) {
    this.cylinderTagService.getGcLabelNumApply(params)
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
    this.cylinderTagService.sendGcLabelApply(params)
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
