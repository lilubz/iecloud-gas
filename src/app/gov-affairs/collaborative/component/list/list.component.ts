import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { zh_CN, DATE_LOCALIZATION } from './../../../../core/date-localization';
import * as moment from 'moment';
import { ListService } from './list.service';

@Component({
  selector: 'gas-collaborative-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  dispatcherService: any;
  constructor(
    private messageService: MessageService,
    private _servise: ListService,
    @Inject(DATE_LOCALIZATION) public zh,
  ) { }
  config = {
    affairType: [
      [
        {
          name: '常用类别',
          value: '1'
        },
        {
          name: '事故处理',
          value: '11'
        },
        {
          name: '人员管理',
          value: '12'
        },
        {
          name: '操作规范',
          value: '13'
        },
      ],
      [
        {
          name: '行政执法',
          value: '2'
        },
        {
          name: '违法安装',
          value: '21'
        },
        {
          name: '设施安检',
          value: '22'
        },
        {
          name: '违规使用',
          value: '23'
        },
      ],
      [
        {
          name: '质量技术监督',
          value: '3'
        },
        {
          name: '违规冲装',
          value: '31'
        },
        {
          name: '气瓶问题',
          value: '32'
        },
      ],
      [
        {
          name: '公安',
          value: '4'
        },
        {
          name: '非法储存销售',
          value: '41'
        },
        {
          name: '消防安全',
          value: '42'
        },
        {
          name: '妨碍公务',
          value: '43'
        },
      ],
      [
        {
          name: '交通运输',
          value: '5'
        },
        {
          name: '运输问题',
          value: '51'
        }
      ],
      [
        {
          name: '工商行政',
          value: '6'
        },
        {
          name: '经营许可',
          value: '61'
        }
      ],
      [
        {
          name: '安全生产监管',
          value: '7'
        },
        {
          name: '安全生产隐患',
          value: '71'
        }
      ],
      [
        {
          name: '其他',
          value: '8'
        },
        {
          name: '其他',
          value: '81'
        }
      ],
    ],
  };
  dropdown = {
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
    area: [],
    affairType: [],
    source: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '网站',
        value: '1'
      },
      {
        label: '微信',
        value: '2'
      },
    ],
    status: [
      {
        label: '待办',
        value: ''
      },
      {
        label: '已完结',
        value: '1'
      },
    ]
  };
  dataTable = {
    list: [],
    option: [5, 10, 20, 40],
    total: 0,
    first: 0,
  };
  pageParams = {
    enterpriseId: '',
    status: '',
    name: '',
    jobNumber: '',
    phone: '',
    idNumber: '',
    pageSize: this.dataTable.option[1],
    pageNumber: 1
  };
  formModel = {
    startTime: '',
    endTime: '',
    role: '1',
    area: '',
    affairType: '',
    source: '',
    status: '',
    searchType: '',
    searchValue: ''
  };

  ngOnInit() {

    // 事务类型下拉框数据的数据转换。
    this.config.affairType.forEach((item) => {
      item.forEach((innerItem, i, arr) => {
        if (i === 0) {
          this.dropdown.affairType.push({
            label: innerItem.name,
            value: innerItem.value
          });
        } else if (i === item.length - 1) {
          this.dropdown.affairType.push({
            label: ' └ ' + innerItem.name,
            value: innerItem.value
          });
        } else {
          this.dropdown.affairType.push({
            label: ' ├ ' + innerItem.name,
            value: innerItem.value
          });
        }
      });
    });

    this.getDropdownArea();
  }

  onSearch() {
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
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }

  getDropdownArea(params?) {
    this._servise.getDropdownForRegionSysUser(params)
      .then(data => {
        if (data.status === 0) {
          this.dropdown.area = this.dropdown.default.concat(data.data.map((item) => ({
            label: item.regionName,
            value: item.regionId
          })));
          console.log(data);
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '出错了', detail: '错误代码：' + error.status });
        throw error;
      });
  }

}
