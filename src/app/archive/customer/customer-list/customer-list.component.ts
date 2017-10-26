import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import {
  CustomerListService
} from './customer-list.service';
@Component({
  selector: 'gas-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss'],
  providers: [CustomerListService]
})

export class CustomerListComponent implements OnInit {
  constructor(private routerInfo: ActivatedRoute, private customerListService: CustomerListService) {}
  customerList: Array < {
    index ? : number;
    barCode ? : String;
    borough ? : String;
    company ? : String;
    cylinderType ? : String;
    fillingMedium ? : String;
    status ? : String;
    makeDate ? : String;
    finalDate ? : String;
    nextDate ? : String;
    factoryNumber ? : String;
    ownNumber ? : String;
    electronicCode ? : String;
    registerDate ? : String;
    makeUnits ? : String;
  } > ;
  searchParams: {
    areaID ? : String;
    companyID ? : String;
    hasPact ? : Boolean;
    userName ? : String;
    address ? : String;
    customerType ? : String;
    userAttr ? : Array < String > ;
    pageNumber ? : Number;
    pageSize ? : Number;
  } = {
    areaID: 'areaID',
    companyID: 'companyID',
    hasPact: true,
    userName: 'userName',
    address: 'address',
    customerType: 'customerType',
    userAttr: ['a', 'b'],
  };
  pageParams: {
    areaID ? : String;
    companyID ? : String;
    hasPact ? : Boolean;
    userName ? : String;
    address ? : String;
    customerType ? : String;
    userAttr ? : Array < String > ;
    pageNumber ? : Number;
    pageSize ? : Number;
    pageOption ? : Array < Number > ;
    pageCount ? : Number;
  } = {
    areaID: 'areaID',
    companyID: 'companyID',
    hasPact: true,
    userName: 'userName',
    address: 'address',
    customerType: 'customerType',
    userAttr: ['a', 'b'],
    pageNumber: 1,
    pageSize: 20,
    pageOption: [10, 20, 30, 40],
    pageCount: 400
  };
  area: any;
  searchOpt = {
    area: [{
        label: '全部',
        value: '全部'
      },
      {
        label: '龙湾区',
        value: 'lwq'
      },
      {
        label: '乐清市',
        value: 'yqs'
      }
    ],
    company: [{
      label: '全部',
      value: '全部'
    }],
    companyOpt: {
      lwq: [{
          label: '龙湾区-杭州余杭獐山钢瓶有限公司',
          value: '龙湾区-杭州余杭獐山钢瓶有限公司'
        },
        {
          label: '龙湾区-杭州天龙钢瓶有限公司',
          value: '龙湾区-杭州天龙钢瓶有限公司'
        }
      ],
      yqs: [{
          label: '-乐清市杭州余杭獐山钢瓶有限公司',
          value: '-乐清市杭州余杭獐山钢瓶有限公司'
        },
        {
          label: '-乐清市杭州天龙钢瓶有限公司',
          value: '-乐清市杭州天龙钢瓶有限公司'
        }
      ],
    },
    customerType: [{
        label: '全部',
        value: '全部'
      },
      {
        label: '正常',
        value: '正常'
      },
      {
        label: '过期',
        value: '过期'
      },
      {
        label: '报废',
        value: '报废'
      }
    ],
    userAttr1: [{
        label: '全部',
        value: 'all'
      },
      {
        label: '正常',
        value: 'zc'
      },
      {
        label: '过期',
        value: 'gq'
      },
      {
        label: '报废',
        value: 'bf'
      }
    ],
    userAttr2: [{
        label: '全部',
        value: '全部'
      },
      {
        label: '正常',
        value: '正常'
      },
      {
        label: '过期',
        value: '过期'
      },
      {
        label: '报废',
        value: '报废'
      }
    ],
    userAttr2Library: {
      all: [{
        label: '全部',
        value: '全部'
      }],
      zc: [{
          label: '正常1',
          value: '正常1'
        },
        {
          label: '正常2',
          value: '正常2'
        },
      ],
      gq: [{
          label: '过期1',
          value: '过期1'
        },
        {
          label: '过期2',
          value: '过期2'
        },
      ],
      bf: [{
          label: '报废1',
          value: '报废1'
        },
        {
          label: '报废2',
          value: '报废2'
        },
      ],
    },
  };
  copyData() {
    const temparr = [];
    for (let i = 0; i < 300; i++) {
      const temp = {};
      temp['area0'] = i;
      temp['area1'] = Math.floor(Math.random() * 1000000);
      temp['area2'] = '鹿城区';
      temp['area3'] = '温州市中燃华颢燃气有限公司';
      temp['area4'] = 'YSP35.5';
      temp['area5'] = '液化石油气';
      temp['area6'] = '正常';
      temp['area7'] = '2008 - ' + Math.floor(Math.random() * 12);
      temp['area8'] = '2010 - ' + Math.floor(Math.random() * 12);
      temp['area9'] = '2015 - ' + Math.floor(Math.random() * 12);
      temp['area10'] = 200801010485 + i;
      temp['area11'] = 'CZH - 657124';
      temp['area12'] = '';
      temp['area13'] = '';
      temp['area14'] = '杭州余杭獐山钢瓶有限公司';
      temparr.push(temp);
    }
    this.area = temparr;
  }
  // tslint:disable-next-line:indent
  // tslint:disable-next-line:member-ordering
  mockData = {
    msg: '获取成功',
    status: '0',
    data: {
      areaList: [{
        areaName: '乐清市',
        areaID: 'yqs',
        companyList: [{
          key: 'xxxx有限公司',
          value: 'xx',
        }]
      }, ],
      userType: [{
        key: '个体',
        value: 'gt'
      }, {
        key: '商业',
        value: 'sy'
      }],
      userAttr: [{
        key: '个体',
        value: 'gt',
        list: [{
          key: '餐饮',
          value: 'cy'
        }, {
          key: '散户',
          value: 'sh'
        }]
      }, {
        key: '商业',
        value: 'sy',
        list: [{
          key: '餐饮',
          value: 'cy'
        }, {
          key: '散户',
          value: 'sh'
        }]
      }]
    }
  };

  ngOnInit() {
    this.copyData();
    const enterpriseID = this.routerInfo.snapshot.params['enterpriseID'];
    if (enterpriseID) {
      this.searchParams.address = enterpriseID;
      this.onSearch();
    }
    console.log(enterpriseID);
  }

  onSearch() {
    console.log(this.searchParams);
  }

  onChangeAreaID(arg) { // 根据改变后的数值设置二级下拉框的数据
    console.dir('改变了所在区域:');
    this.searchOpt.company = this.searchOpt.companyOpt[arg.value];
    console.log(arg.value);
  }

  onChangeuserAttr1(arg) {
    console.dir('改变了用户性质:');
    console.dir(arg.value);
    this.searchOpt.userAttr2 = this.searchOpt.userAttr2Library[arg.value];
  }
  onPageChange(event) {
    console.log(event);
  }
  getCustomerSearchOpt() {
    this.customerListService.getCustomerSearchOpt({

    }).then(data => {
      if (data.status === 0) {
        this.searchOpt = data.data.option;
      } else {

      }
    });
  }
}
