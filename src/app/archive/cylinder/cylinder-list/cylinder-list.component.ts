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
    cylinderCode?: String;
    borough?: String;
    enterpriseNumber?: String;
    specification?: String;
    fillingMedium?: String;
    serviceCondition?: String;
    productionDate?: String;
    endCheckdate?: String;
    nextCheckdate?: String;
    factoryNumber?: String;
    EserialNumber?: String;
    registrationTime?: String;
    productionUnit?: String;
    serialNumber?: String;
  }>;
  pageParams: {
    enterpriseNumber?: String;
    productionUnit?: String;
    state?: String;
    cylinderCode?: String;
    serialNumber?: String;
    factoryNumber?: String;
    pageNumber?: Number;
    pageSize?: Number;
    pageOption?: Array<Number>;
    total?: Number;
  } = {
    enterpriseNumber: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    factoryNumber: '',
    pageNumber: 1,
    pageSize: 20,
    pageOption: [10, 20, 30, 40],
    total: 400
  };
  searchParams: {
    enterpriseNumber?: Number;
    productionUnit?: String;
    state?: Number;
    cylinderCode?: Number;
    serialNumber?: String;
    factoryNumber?: String;
  } = {
    enterpriseNumber: 1,
    productionUnit: '',
    state: 0,
    cylinderCode: 0,
    serialNumber: '',
    factoryNumber: '',
  };

  searchOpt = {
    company: [{
      label: '全部 ',
      value: 1
    }],
    make: [{
      label: '全部 ',
      value: 1
    }],
    status: [{
      label: '全部 ',
      value: -1
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
      'factoryNumber',
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
    }
    console.log(params);

    this.cylinderListService.getCylinders(params).then((data) => {
      console.log(data);
      if (data.status === 0) {
        this.cylinders = data.data.list;
        this.pageParams.total = data.data.total !== 0 ? data.data.total : 400;
      } else {
        this.cylinders = [];
        this.setMessages('warn', '查询结果', '响应：' + data.msg);
      }
    }, (error) => {
      this.cylinders = [];
      this.setMessages('error', '查询失败', '错误代码：' + error.status);
    });
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
      console.log('in');
      this.searchParams.enterpriseNumber = enterpriseID;
      this.onSearch();
    }
    console.log(enterpriseID);
  }

  getCylinderSearchOpt() {
    this.cylinderListService.getCylinderSearchOpt({

    }).then(data => {
      if (data.status === 0) {
        const all = [{ label: '全部', value: -1 }];
        this.searchOpt.company = all.concat(data.data.enterpriseName);
        this.searchOpt.make = all.concat(data.data.productionUnit);
      } else {
        this.setMessages('error', '查询结果', '响应：' + data.msg);
      }
    }, error => {
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
