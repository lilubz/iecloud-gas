import { Component, OnInit, OnDestroy, } from '@angular/core';
import { UserSearchService, } from './user-search.service';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 's-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit, OnDestroy {
  pages: {
    pageNumber?: number;
    pageSize?: number;
    pageOption?: Array<Number>;
    total?: number;
    first?: number;
  } = {
      pageNumber: 1,
      pageSize: 40,
      pageOption: [10, 20, 40, 80],
      total: 0,
      first: 0,
    };
  systemUserList = [];
  changeStatusPage: any;
  dropdown = {
    organzation: [
      {
        label: '全部',
        value: ''
      }
    ],
    role: [
      {
        label: '全部',
        value: ''
      }
    ],
    default: [
      {
        label: '全部',
        value: ''
      }
    ],
  };
  searchParams = {
    organization: '',
    role: '',
    userName: ''
  };
  loading = false;
  constructor(
    private _service: UserSearchService,
    private messageService: MessageService, ) { }

  ngOnInit() {
    this.getGovOrganzationsDrop();
  }

  onPageChange(event) {
    this.systemUserList = [];
    this.onPageChange = (event) => {
      const page: {
        pageSize: Number,
        pageNumber: Number
      } = {
          pageSize: event.rows,
          pageNumber: event.first / event.rows + 1
        };
      this.getSystemUserList(page);
      this.changeStatusPage = page;
    }
  }
  getGovOrganzationsDrop() {
    this._service.getGovOrganzations({}).then(data => {
      if (data.status === 0) {
        this.dropdown.organzation = this.dropdown.organzation.concat(data.data.map((item) => ({
          label: item.name,
          value: item.organizationId
        })));
      } else {
        this.dropdown.organzation = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    })
  }
  onChangeOrganzation(event) {
    this.dropdown.role = this.dropdown.default;
    this.searchParams.role = '';
    if (!event.value) {
      this.dropdown.role = this.dropdown.default;
      this.searchParams.role = '';
    } else {
      this.getRolesDrop(event.value);
    }

  }
  getRolesDrop(param) {
    this._service.getRoles({ organizationid: param }).then(data => {
      if (data.status === 0) {
        this.dropdown.role = this.dropdown.role.concat(data.data.map((item) => ({
          label: item.name,
          value: item.roleId
        })));
      } else {
        this.dropdown.role = this.dropdown.default;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    })
  }
  getSystemUserList(page?) {
    this.loading = true;
    const params = {
      username: this.searchParams.userName,
      organizationId: this.searchParams.organization,
      roleId: this.searchParams.role,
      pageNumber: 1,
      pageSize: 40
    };
    if (page) {
      params.pageNumber = page.pageNumber;
      params.pageSize = page.pageSize;
    } else {
      this.pages.first = 0;
    }
    this._service.getGovSysUsers(params).then(data => {
      this.loading = false;
      if (data.status === 0) {
        this.systemUserList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.systemUserList = [];
        this.pages.total = 0;
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    })
  }
  changeStatus(status) {
    this._service.freezeAccount({ userid: status.userId }).then(data => {
      if (data.status === 0) {
        if (!status.isfreezed) {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: '冻结账号成功' });
          this.getSystemUserList(this.changeStatusPage);
        } else {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: '启用账号成功' });
          this.getSystemUserList(this.changeStatusPage);
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
    })

  }

  ngOnDestroy() {
  }
}
