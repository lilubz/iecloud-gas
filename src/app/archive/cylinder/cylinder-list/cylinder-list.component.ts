import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import {
  CylinderListService
} from './cylinder-list.service';
import {
  MessageService
} from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-cylinder-list',
  templateUrl: './cylinder-list.component.html',
  styleUrls: ['./cylinder-list.component.scss'],
  providers: [CylinderListService]
})

export class CylinderListComponent implements OnInit {
  constructor(private routerInfo: ActivatedRoute, private cylinderListService: CylinderListService,
    private messageService: MessageService) { }
  cylinders: Array<{
    cylinderCode?: string;
    borough?: string;
    enterpriseName?: string;
    specification?: string;
    fillingMedium?: string;
    serviceCondition?: string;
    productionDate?: string;
    endCheckdate?: string;
    nextCheckdate?: string;
    ownNumber?: string;
    EserialNumber?: string;
    registrationTime?: string;
    productionUnit?: string;
    serialNumber?: string;
  }>;
  pageParams: {
    enterpriseNumber?: string;
    productionUnit?: string;
    state?: string;
    cylinderCode?: string;
    serialNumber?: string;
    ownNumber?: string;
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<Number>;
    total?: number;
    first?: number;
  } = {
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    ownNumber: '',
    pageNumber: 1,
    pageSize: 20,
    pageOption: [10, 20, 30, 40],
    total: 400,
    first: 0,
  };
  searchParams: {
    enterpriseNumber?: string;
    productionUnit?: string;
    state?: string;
    cylinderCode?: string;
    serialNumber?: string;
    ownNumber?: string;
  } = {
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    ownNumber: '',
  };

  searchOpt = {
    company: [{
      label: '全部 ',
      value: ''
    }],
    make: [{
      label: '全部 ',
      value: ''
    }],
    status: [{
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
    ]
  };

  onSearch(page?) {
    const paramsKey = [
      'enterpriseNumber',
      'productionUnit',
      'state',
      'cylinderCode',
      'serialNumber',
      'ownNumber',
    ];
    const params = {};

    // 有参数表示翻页，使用上次的查询参数，没有参数是新的查询，使用双向绑定的参数。
    if (page) {
      for (let i = 0; i < paramsKey.length; i++) {
        params[paramsKey[i]] = this.pageParams[paramsKey[i]];
      }
      params['pageNumber'] = page.pageNumber;
      params['pageSize'] = page.pageSize;
    } else {
      for (let i = 0; i < paramsKey.length; i++) {
        params[paramsKey[i]] = this.searchParams[paramsKey[i]];
        this.pageParams[paramsKey[i]] = this.searchParams[paramsKey[i]];
      }
      params['pageNumber'] = 1;
      params['pageSize'] = this.pageParams.pageSize;
      this.pageParams.first = 0;
    }
    this.getCylinders(params);
  }

  onPageChange(pageInfo) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: pageInfo.rows,
        pageNumber: pageInfo.first / pageInfo.rows + 1
      };
    this.onSearch(page);
  }

  ngOnInit() {
    this.getCylinderSearchOpt();
    const enterpriseID = this.routerInfo.snapshot.params['enterpriseID'];
    if (enterpriseID !== undefined) {
      this.searchParams.enterpriseNumber = enterpriseID;
      this.onSearch();
    }
  }

  getCylinderSearchOpt() {
    this.cylinderListService.getCylinderSearchOpt({

    }).then(data => {
      if (data.status === 0) {
        const all = [{ label: '全部', value: '' }];
        this.searchOpt.company = all.concat(data.data.enterpriseName);
        this.searchOpt.make = all.concat(data.data.productionUnit.map((item) => ({
          label: item.name,
          value: item.manufactureOrg
        })));
      } else {
        this.setMessages('error', '查询结果', '响应：' + data.msg);
      }
    }, error => {
      this.setMessages('error', '查询失败', '错误代码：' + error.status);
    });
  }
  getCylinders(params?) {
    this.cylinderListService.getCylinders(params).then((data) => {
      if (data.status === 0) {
        console.log(data.data.total);
        this.cylinders = data.data.list;
        this.pageParams.total = data.data.total;
      } else {
        this.cylinders = [];
        this.pageParams.total = 0;
        this.setMessages('warn', '查询结果', '响应：' + data.msg);
      }
    }, (error) => {
      this.cylinders = [];
      this.pageParams.total = 0;
      this.setMessages('error', '查询失败', '错误代码：' + error.status);
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
