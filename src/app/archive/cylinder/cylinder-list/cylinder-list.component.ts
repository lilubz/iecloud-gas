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
@Component({
  selector: 'gas-cylinder-list',
  templateUrl: './cylinder-list.component.html',
  styleUrls: ['./cylinder-list.component.scss'],
  providers: [CylinderListService]
})

export class CylinderListComponent implements OnInit {
  cylinders: Array < {
    cylinderCode: String;
    borough: String;
    enterpriseName: String;
    specification: String;
    fillingMedium: String;
    serviceCondition: String;
    productionDate: String;
    endCheckdate: String;
    nextCheckdate: String;
    factoryNumber: String;
    EserialNumber: String;
    registrationTime: String;
    productionUnit: String;
    serialNumber: String;
  } > ;
  pageParams: {
    enterpriseName ? : String;
    productionUnit ? : String;
    state ? : String;
    cylinderCode ? : String;
    serialNumber ? : String;
    factoryNumber ? : String;
    pageNumber ? : Number;
    pageSize ? : Number;
    pageOption ? : Array < Number > ;
    pageCount ? : Number;
  } = {
    enterpriseName: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    factoryNumber: '',
    pageNumber: 1,
    pageSize: 20,
    pageOption: [10, 20, 30, 40],
    pageCount: 400
  };
  searchParams: {
    enterpriseName ? : String;
    productionUnit ? : String;
    state ? : String;
    cylinderCode ? : String;
    serialNumber ? : String;
    factoryNumber ? : String;
  } = {
    enterpriseName: '',
    productionUnit: '',
    state: '',
    cylinderCode: '',
    serialNumber: '',
    factoryNumber: '',
  };
  constructor(private routerInfo: ActivatedRoute, private cylinderListService: CylinderListService) {}
  searchOpt = {
    company: [{
        label: '全部',
        value: '全部'
      },
      {
        label: '温州市中燃华颢燃气有限公司',
        value: '温州市中燃华颢燃气有限公司'
      },
      {
        label: '温州市华昌石油液化气有限公司',
        value: '温州市华昌石油液化气有限公司'
      }
    ],
    make: [{
        label: '全部',
        value: '全部'
      },
      {
        label: '杭州余杭獐山钢瓶有限公司',
        value: '杭州余杭獐山钢瓶有限公司'
      },
      {
        label: '杭州天龙钢瓶有限公司',
        value: '杭州天龙钢瓶有限公司'
      }
    ],
    status: [{
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
    ]
  };
  area: any;
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
  onSearch(page ? ) {
    let params = {};
    if (page) {
      params = this.pageParams;
      params['pageNumber'] = page.pageNumber;
      params['pageSize'] = page.size;
    } else {
      params = this.searchParams;
      params['pageNumber'] = 1;
      params['pageSize'] = 10;
    }
    console.log(params);
    // this.cylinderListService.getCylinders(params).then(data => {
    //   if (data.status === 0) {
    //     this.cylinders = data.data.list;
    //   } else {

    //   }
    // });
  }
  onPageChange(pageInfo) {
    // 设置好分页参数后，使用searchParams发送请求。
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
    this.copyData();
    // this.getCylinderSearchOpt();
    // this.routerInfo.snapshot.params["id"];
    const enterpriseID = this.routerInfo.snapshot.params['enterpriseID'];
    if (enterpriseID) {
      this.searchParams.enterpriseName = enterpriseID;
      this.onSearch();
    }
    console.log(enterpriseID);
  }

  getCylinders(params: Object) {
    this.cylinderListService.getCylinders(params).then(data => {
      if (data.status === 0) {

      } else {

      }
    });
  }
  getCylinderSearchOpt() {
    this.cylinderListService.getCylinderSearchOpt({

    }).then(data => {
      if (data.status === 0) {
        this.searchOpt = data.searchOpt;
      } else {

      }
    });
  }
}

