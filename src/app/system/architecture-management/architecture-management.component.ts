import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../common/RoleType';
import { TreeNode, SelectItem } from 'primeng/primeng';
import { ArchitectureManagementService } from './architecture-management.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../core/common-request.service';

@Component({
  selector: 'gas-architecture-management',
  templateUrl: './architecture-management.component.html',
  styleUrls: ['./architecture-management.component.scss']
})
export class ArchitectureManagementComponent implements OnInit {
  RoleType = RoleType;
  filesTree: TreeNode[] = [];
  nodeSelectVisible = false;
  chooseDate: any;
  name: any;
  areaDrop: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  regionId: any;
  default: any[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  corpDrop: SelectItem[] = [];
  defaultcorpDrop: SelectItem[] = [];
  chooseCorp: any = [];
  constructor(
    private _service: ArchitectureManagementService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.get();
  }
  get = () => {
    this._service.getOrganzationTree({})
      .then(
        data => {
          this.filesTree = [this.changetype(data.data)];
        }
      ).catch(
        data => {
          console.log(data);
        }
      );
  }
  // 组织树格式化
  changetype = (data) => {
    if (data) {
      const temp = {
        collapsedIcon: 'fa-folder',
        data: data.organizationId,
        expandedIcon: 'fa-folder-open',
        label: data.organizationName,
        children: null,
        regionId: data.regionId
      };
      if (data.nodes) {
        const arr = [];
        for (const item of data.nodes) {
          arr.push(this.changetype(item));
        }
        temp.children = arr;
      }
      return temp;
    }
    return null;
  }
  nodeSelect = (choose) => {
    if (choose.node.regionId) {
      this.chooseDate = choose;
      this.getRegions();
      let regionId = '';
      if (this.chooseDate.node.regionId !== 330300) {
        regionId = this.chooseDate.node.regionId;
      }
      this.getDropdownForCorpInfoInRegion({ regionId: regionId });
      this.nodeSelectVisible = true;
    } else {
      this.messageService.add({ severity: 'warn', summary: '错误提示', detail: '暂时无法添加' });
    }
  }
  // 获取区域
  getRegions() {
    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        const list = data.data.map((item) => {
          return {
            label: item.regionName,
            value: item.regionId
          };
        });
        this.areaDrop = this.areaDrop.concat(list);
      } else {
        this.areaDrop = this.areaDrop.concat(this.default);
        this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
      }
    });
  }
  // 获取企业
  getDropdownForCorpInfoInRegion(params?) {
    this.corpDrop = [];
    this._service.getDropdownForCorpInfoInRegion(params).then(data => {
      if (data.status === 0) {
        console.log(data);
        const list = data.data.map((item) => {
          return {
            label: item.enterpriseName,
            value: item.enterpriseNumber
          };
        });
        this.corpDrop = this.corpDrop.concat(list);
      } else {
        this.corpDrop = this.corpDrop.concat(this.defaultcorpDrop);
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }
  addNode = () => {
    let enterpriseNumbers = '';
    let regionId = '';
    for (let i = 0; i < this.chooseCorp.length; i++) {
      if (i === 0) {
        enterpriseNumbers = this.chooseCorp[i].value;
      } else {
        enterpriseNumbers = enterpriseNumbers + ',' + this.chooseCorp[i].value;
      }
    }
    if (this.chooseDate.node.regionId === 330300) {
      regionId = this.regionId;
    } else {
      regionId = this.chooseDate.node.regionId;
    }
    if (regionId && this.name.length >= 5 && this.chooseDate.node.data && enterpriseNumbers) {
      this._service.addOrganzation({
        regionId: regionId,
        name: this.name,
        pid: this.chooseDate.node.data,
        enterpriseNumbers: enterpriseNumbers
      }).then(
        data => {
          this.get();
          this.nodeSelectVisible = false;
          this.name = '';
          this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '请填写完善' });
    }
  }
  reset = () => {
    this.nodeSelectVisible = false;
    this.name = '';
    this.chooseCorp = [];
  }

}
