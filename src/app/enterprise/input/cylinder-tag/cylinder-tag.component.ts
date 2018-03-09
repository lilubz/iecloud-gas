import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';
import { CylinderTagService } from './cylinder-tag.service';
@Component({
  selector: 'gas-cylinder-tag',
  templateUrl: './cylinder-tag.component.html',
  styleUrls: ['./cylinder-tag.component.scss'],
  providers: [CylinderTagService]
})
export class CylinderTagComponent implements OnInit {
  dropdown = {
    displayType: [
      {
        label: '未绑定气瓶',
        value: {
          header: [
            {
              label: '气瓶出厂编号',
              value: 'serialNumber'
            },
            {
              label: '企业自有编号',
              value: 'enterpriseCylinderCode'
            },
            {
              label: '所属区域',
              value: 'regionName'
            },
            {
              label: '所属企业',
              value: 'enterpriseName'
            },
          ],
          type: 'gas'
        },
      },
      {
        label: '未绑定标签',
        value: {
          header: [
            {
              label: '标签编号',
              value: 'gasLabelNumber'
            },
            {
              label: '所属区域',
              value: 'regionName'
            },
            {
              label: '所属企业',
              value: 'enterpriseName'
            },
            {
              label: '标签状态',
              value: 'status'
            },
          ],
          type: 'tag'
        }
      }
    ],
    numberType: [
      {
        label: '气瓶出厂编号', value: {
          name: '出厂编号',
          id: 'factoryNumber',
          paramsName: 'serialNumber'
        }
      },
      {
        label: '企业自有编号', value: {
          name: '自有编号',
          id: 'ownNumber',
          paramsName: 'enterpriseCylinderCode'
        }
      }
    ],
    displayValue: 'gas',
    numberValue: {
      name: '出厂编号',
      id: 'factoryNumber',
      paramsName: 'serialNumber'
    }
  };
  dataList = {
    header: this.dropdown.displayType[0].value.header,
    data: [],
    type: this.dropdown.displayType[0].value.type,
    page: {
      pages: 1,
      total: 0,
      number: 1,
      size: 10,
      option: [10, 20, 30, 40],
    },
    first: 0,
  };
  dialog = {
    bind: false,
    tagApply: false,
  };
  bind = {
    list: [],
    helpMsg: [],
    canChange: true,
    queryTag: '',
  };
  tag = {
    count: 0,
    detail: ''
  };
  disabled = false;
  proposals: any = [];

  constructor(private messageService: MessageService, private cylinderTagService: CylinderTagService) { }

  ngOnInit() {
    this.getListData({ pageSize: 10, pageNumber: 1 });
    for (let i = 0; i < 10; i++) {
      this.bind.list[i] = [null, null];
      this.bind.helpMsg[i] = ['', ''];
    }
  }

  /**
   *批量绑定
   */

  onBatchBind() {
    if (this.dialog.bind || this.dialog.tagApply) {
      return;
    }
    this.dialog.bind = true;
  }
  // 判定是否禁用下拉框
  checkCanChange() {
    for (let i = 0; i < this.bind.list.length; i++) {
      if (this.bind.list[i][0] !== null) {
        return false;
      }
    }
    return true;
  }
  // 重复值检测
  checkRepeat() {
    const len = this.bind.list.length;
    const config = {
      gas: {
        index: 0,
        id: 'idNumber',
      },
      tag: {
        index: 1,
        id: 'tagNumber',
      }
    };

    const checkFun = (type) => {
      for (let i = 0; i < len; i++) {
        const current = this.bind.list[i][type.index];
        if (current === null) {
          continue;
        }
        for (let j = 0; j < len; j++) {
          const target = this.bind.list[j][type.index];
          if (target === null) {
            continue;
          }
          if (current[type.id] === target[type.id] && i !== j) {
            this.bind.helpMsg[i][type.index] = '重复';
          }
        }
      }
    };

    checkFun(config.gas);
    checkFun(config.tag);
  }
  // 空值检测
  checkEmpty(index: Array<number>) {
    const item = {
      gas: this.bind.list[index[0]][0],
      tag: this.bind.list[index[0]][1],
    };
    if (item.gas === null && item.tag !== null) {
      this.bind.helpMsg[index[0]][0] = '必填';
    } else if (item.gas !== null && item.tag === null) {
      this.bind.helpMsg[index[0]][1] = '必填';
    }
  }
  // 失去焦点事件
  onBlur(index) {
    /**
     *参数index表示输入框的位置，index[0]表示行数索引，index[1]表示列数索引；
     *index[1] === 0 是指气瓶编号输入框；
     *index[1] === 1 是指气瓶标签输入框；
     */
    if (typeof this.bind.list[index[0]][index[1]] === 'string') {
      if (this.proposals.length === 1
        && index[1] === 1
        && this.proposals[0].tagNumber === this.bind.list[index[0]][index[1]]) {
        this.bind.list[index[0]][index[1]] = this.proposals[0];
      } else if (this.proposals.length === 1
        && index[1] === 0
        && this.proposals[0][this.dropdown.numberValue.paramsName] === this.bind.list[index[0]][index[1]]) {
        this.bind.list[index[0]][index[1]] = this.proposals[0];
      } else {
        this.bind.list[index[0]][index[1]] = null;
      }
    }

    if (index[1] === 0) {
      this.bind.canChange = this.checkCanChange();
    }
    for (let i = 0; i < 10; i++) {
      this.bind.helpMsg[i] = ['', ''];
      this.checkEmpty([i, 0]);
      this.checkEmpty([i, 1]);
    }
    this.checkRepeat();
  }
  onBind() {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 2000);
    let result = '';
    for (let i = 0; i < this.bind.helpMsg.length; i++) {
      result += this.bind.helpMsg[i].join('');
    }
    if (result !== '') {
      this.setMessages('warn', '输入不正确！', '请检查您的输入');
      return;
    }

    const params = (() => {
      const obj = {};
      for (let i = 0; i < this.bind.list.length; i++) {
        if (this.bind.list[i][0] !== null && this.bind.list[i][1] !== null) {
          obj[this.bind.list[i][0].idNumber] = this.bind.list[i][1].tagNumber;
        }
      }
      return obj;
    })();
    if (JSON.stringify(params) === '{}') {
      this.setMessages('warn', '输入不正确', '您的输入为空！');
      return;
    }
    this.sendTagBinding(params);
  }
  cancelBind() {
    this.dialog.bind = false;
    this.bind.list = new Array(10);
    let j = 0;
    for (; j < this.bind.list.length; j++) {
      this.bind.list[j] = [null, null];
      this.bind.helpMsg[j] = ['', ''];
    }
    this.bind.canChange = this.checkCanChange();
  }
  getProposals(event, index) {
    if (index[1] === 0) {
      const params = {
        searchType: this.dropdown.numberValue.id,
        keyWord: event.query,
        pageNumber: 1,
        pageSize: 20,
      };
      this.getGcBasicInfo(params);
    } else if (index[1] === 1) {
      if (event.query.length === 10) {
        this.bind.queryTag = event.query;
        this.getGcLabelInfo({ gasLabelNumber: event.query });
      } else {
        this.proposals = [];
      }
    }
  }

  /**
   *标签申请
   */

  onTagApply() {
    if (this.dialog.bind || this.dialog.tagApply) {
      return;
    }
    this.dialog.tagApply = true;
  }
  onApply() {
    this.disabled = true;
    setTimeout(() => this.disabled = false, 2000);
    if (this.tag.count > 0) {
      this.sendTagAppyl(this.tag);
    } else {
      this.setMessages('warn', '输入不正确', '请检查申请数量！');
    }
  }
  onCancelTagApply() {
    this.dialog.tagApply = false;
    this.tag.count = 0;
    this.tag.detail = '';
  }

  /**
   *数据展示
   */

  changeSearchOpt(event) {
    const params = {
      pageSize: this.dataList.page.size,
      pageNumber: 1, // this.dataList.page.number
    };
    this.dataList.header = event.value.header;
    this.dataList.type = event.value.type;
    this.dataList.page.total = 0;
    this.dataList.data = [];
    this.dataList.first = 0;
    this.getListData(params);
  }
  pageChange(event) {
    const params = {
      pageSize: event.rows,
      pageNumber: event.first / event.rows + 1
    };
    this.dataList.page.size = params.pageSize;
    this.dataList.page.number = params.pageNumber;
    this.getListData(params);
  }
  getListData(params) {
    if (this.dataList.type === 'tag') {
      this.getTags(params);
    } else if (this.dataList.type === 'gas') {
      this.getCylinders(params);
    }
  }

  /**
   *http请求
   */

  sendTagAppyl(params) {
    this.cylinderTagService.listTagApplication(params)
      .then(data => {
        if (data.status === 0) {
          this.dialog.tagApply = false;
          this.tag.count = 0;
          this.tag.detail = '';
          this.setMessages('success', '操作成功', data.msg);
        } else {
          this.setMessages('warn', '响应消息', data.msg);
        }
      });
  }
  sendTagBinding(params?) {
    this.cylinderTagService.sendTagBinding(params)
      .then(data => {
        if (data.status === 0) {
          this.setMessages('success', '操作成功', data.msg);
          this.cancelBind();
        } else {
          this.setMessages('warn', '响应消息', data.msg);
        }
      });
  }
  getTags(params?) {
    this.cylinderTagService.getUnboundGcLabelInfo(params)
      .then(data => {
        if (data.status === 0) {
          setTimeout(() => {
            this.dataList.data = data.data.list;
          }, 0);
          this.dataList.page.total = data.data.total;
        } else {
          this.dataList.data = [];
          this.dataList.page.total = 0;
          this.setMessages('warn', '响应消息', data.msg);
        }
      });
  }
  getCylinders(params?) {
    this.cylinderTagService.getUnboundCylinderInfo(params)
      .then(data => {
        if (data.status === 0) {
          setTimeout(() => {
            this.dataList.data = data.data.list;
          }, 0);
          this.dataList.page.total = data.data.total;
        } else {
          this.dataList.data = [];
          this.dataList.page.total = 0;
          this.setMessages('warn', '响应消息', data.msg);
        }
      });
  }
  getGcBasicInfo(params?) {
    this.cylinderTagService.getGcBasicInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.proposals = data.data.list;
        } else {
          this.proposals = [];
        }
      });
  }
  getGcLabelInfo(params?) {
    this.cylinderTagService.getGcLabelInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.proposals = [
            {
              tagNumber: this.bind.queryTag,
              msg: data.msg
            }
          ];
        } else {
          this.proposals = [];
        }
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
