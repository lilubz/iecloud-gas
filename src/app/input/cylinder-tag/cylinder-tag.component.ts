import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-cylinder-tag',
  templateUrl: './cylinder-tag.component.html',
  styleUrls: ['./cylinder-tag.component.scss']
})
export class CylinderTagComponent implements OnInit {
  dropdown = {
    displayType: [
      { label: '未绑定气瓶', value: 'gas'},
      { label: '未绑定标签', value: 'tag'}
    ],
    numberType: [
      {
        label: '气瓶出厂编号', value: {
          name: '出厂编号',
          id: 'factoryNumber'
      } },
      {
        label: '企业自有编号', value: {
          name: '自有编号',
          id: 'ownNumber'
      } }
    ],
    displayValue: 'gas',
    numberValue: {
      name: '出厂编号',
      id: 'factoryNumber'
    }
  };
  list = {
    gas: [
      {
        factoryNumber: 99999,
        ownNumber: 222222,
        area: '乐清市',
        company: '乐清市华兴燃气有限公司'
      },
      {
        factoryNumber: 99999,
        ownNumber: 222222,
        area: '乐清市',
        company: '乐清市华兴燃气有限公司'
      }
    ],
    tag: [
      {
        tagNumber: 123,
        area: '上河图',
        company: '乐清市燃气有限公司',
        state: '正常'
      },
      {
        tagNumber: 666,
        area: '上河',
        company: '另一个乐清市燃气有限公司',
        state: '不正常'
      }
    ],
    gasHeader: [
      {
        label: '气瓶出厂编号',
        value: 'factoryNumber'
      },
      {
        label: '企业自有编号',
        value: 'ownNumber'
      },
      {
        label: '所属区域',
        value: 'area'
      },
      {
        label: '所属企业',
        value: 'company'
      },
    ],
    tagHeader: [
      {
        label: '标签编号',
        value: 'tagNumber'
      },
      {
        label: '所属区域',
        value: 'area'
      },
      {
        label: '所属企业',
        value: 'company'
      },
      {
        label: '标签状态',
        value: 'state'
      },
    ],
    activeHeader: [],
    activeData: []
  };
  dialog = {
    bind: false,
    tagApply: false,
  };
  bind = {
    list: new Array(10),
    usable: new Array(10),
    canChange: true
  };
  tag = {
    count: '',
    detail: ''
  };
  proposals = [];

  search(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
    this.list.activeHeader = this.list.gasHeader;
    this.list.activeData = this.list.gas;
    let j = 0;
    for ( ; j < this.bind.list.length; j++ ) {
      this.bind.list[j] = new Array(2);
    }
  }

  // 批量绑定
  onBind() {
    this.dialog.bind = true;
  }
  changeBindType(event) {
    console.log(event);
  }
  checkCanChange(index?) {
    console.log(index);
    let i = 0;
    const l = this.bind.list.length;
    for (; i < l; i++) {
      const target = this.bind.list[i][0];
      if (typeof target !== 'undefined' && target !== '') {
        this.bind.canChange = false;
        return false;
      }
    }
    this.bind.canChange = true;
    return true;
  }
  sendBind() {
    console.log('发送请求');
    this.dialog.bind = false;
  }
  cancelBind() {
    this.dialog.bind = false;
    this.bind.list = new Array(10);
    let j = 0;
    for (; j < this.bind.list.length; j++) {
      this.bind.list[j] = new Array(2);
    }
    this.checkCanChange();
  }
  getProposals(event) {
    console.log(event);
    this.proposals = [
      {
        phone: '110',
        name: '匪警'
      },
      {
        phone: '120',
        name: '急救中心'
      },
      {
        phone: '119',
        name: '火警'
      },
    ];
  }

  // 标签申请
  onTagApply() {
    this.dialog.tagApply = true;
  }
  sendTagApply() {
    console.log(`发送申请请示：数量-${this.tag.count},申请说明-${this.tag.detail}`);
    this.dialog.tagApply = false;
    this.tag.count = '';
    this.tag.detail = '';
  }
  cancelTagApply() {
    this.dialog.tagApply = false;
    this.tag.count = '';
    this.tag.detail = '';
  }

  // 数据展示
  changeSearchOpt(event) {
    const headerKey = event.value + 'Header';
    const dataKey = event.value;
    this.list.activeHeader = this.list[headerKey];
    this.list.activeData = this.list[dataKey];
  }


  test() {
    console.log(this.checkCanChange());
    console.log(this.bind.list);
  }
}
