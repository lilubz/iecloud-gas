import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../common/RoleType';
import { TreeNode, SelectItem } from 'primeng/primeng';
import { ArchitectureManagementService } from './architecture-management.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CommonRequestService } from '../../core/common-request.service';

@Component({
  selector: 'gas-architecture-management',
  templateUrl: './architecture-management.component.html',
  styleUrls: ['./architecture-management.component.scss'],
  providers: [ArchitectureManagementService]
})
export class ArchitectureManagementComponent implements OnInit {
  RoleType = RoleType;
  filesTree: TreeNode[] = [];
  nodeSelectVisible = false;
  chooseDate: any = {};
  name: any;
  revampName: any;
  areaDrop: SelectItem[] = [];
  regionId: any;
  revampRegionId: any;
  default: any[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  corpDrop: SelectItem[] = [];
  defaultcorpDrop: SelectItem[] = [];
  chooseCorp: any = [];
  revampChooseCorp: any = [];
  showButton = true;
  showAdd = false;
  showRevamp = false;
  showDelete = false;
  showAddButton = false;
  showRevampButton = false;
  showDeleteButton = false;
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
          if (data.status === 0) {
            this.filesTree = [this.changetype(data.data)];
          } else {
            this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
          }
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
        regionId: data.regionId,
        level: data.level,
        pie: data.parentId
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
    this.chooseDate = choose;
    this.revampName = this.chooseDate.node.label;
    if (this.chooseDate.node.level === 1) {
      this.showAddButton = true;
    } else if (this.chooseDate.node.level === 2) {
      this.showAddButton = true;
      this.showRevampButton = true;
      this.showDeleteButton = true;
    } else if (this.chooseDate.node.level === 3) {
      this.showRevampButton = true;
      this.showDeleteButton = true;
    }
    this.getRegions();
    let regionId = '';
    if (this.chooseDate.node.regionId !== 330300) {
      regionId = this.chooseDate.node.regionId;
    }
    this.getDropdownForCorpInfoInRegion({ regionId: regionId });
    this.nodeSelectVisible = true;
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
    this.chooseCorp = [];
    this.revampChooseCorp = [];
    this._service.getDropdownForCorpInfoInRegion(params).then(data => {
      if (data.status === 0) {
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
          if (data.status === 0) {
            this.get();
            this.nodeSelectVisible = false;
            this.name = '';
            this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
          } else {
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
          }
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '请填写完善' });
    }
  }
  revampNode = () => {
    let enterpriseNumbers = '';
    let regionId = '';
    for (let i = 0; i < this.revampChooseCorp.length; i++) {
      if (i === 0) {
        enterpriseNumbers = this.revampChooseCorp[i].value;
      } else {
        enterpriseNumbers = enterpriseNumbers + ',' + this.revampChooseCorp[i].value;
      }
    }
    if (this.chooseDate.node.regionId === 330300) {
      regionId = this.regionId;
    } else {
      regionId = this.chooseDate.node.regionId;
    }
    this._service.updateOrganzation({
      organizationId: this.chooseDate.node.data,
      regionId: regionId,
      name: this.revampName,
      pid: this.chooseDate.node.pie || '',
      enterpriseNumbers: enterpriseNumbers
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
        this.reset();
      } else {
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    });
  }
  reset = () => {
    this.nodeSelectVisible = false;
    this.showAdd = false;
    this.showRevamp = false;
    this.showDelete = false;
    this.showButton = true;
    this.showAddButton = false;
    this.showRevampButton = false;
    this.showDeleteButton = false;
    this.revampChooseCorp = false;
    this.areaDrop = [];
    this.name = '';
    this.chooseCorp = [];
  }
  delete = () => {
    this._service.deleteOrganzation({
      organizationId: this.chooseDate.node.data
    }).then(
      data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
          this.reset();
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      }
    );
  }

}
