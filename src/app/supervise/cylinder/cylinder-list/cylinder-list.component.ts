import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'gas-cylinder-list',
  templateUrl: './cylinder-list.component.html',
  styleUrls: ['./cylinder-list.component.css']
})

export class CylinderListComponent implements OnInit {
  constructor() {}
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
  ngOnInit() {
    this.copyData();
  }
}
