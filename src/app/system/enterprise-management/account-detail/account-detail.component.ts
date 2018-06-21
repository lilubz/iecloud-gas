import { Component, OnInit, OnDestroy, } from '@angular/core';
import { AccountDetailService, } from './account-detail.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { forEach } from '@angular/router/src/utils/collection';
import { CommonRequestService } from '../../../core/common-request.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
import { FormBuilder } from '@angular/forms';
import { validator } from '../../../common/validator';


@Component({
  selector: 'gas-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  formModel: any = this.fb.group({
    userPhone: '',
    phone: ['', validator.phone],
  });
  areaDrop: SelectItem[] = [
    {
      label: '全部',
      value: '',
    }
  ];
  accountList: any[] = [];
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
  searchParams: {
    regionId: number;
    licese: string;
    enterpriseName: string;
    legalRepresentative: string;
    username: string;
  } = {
      regionId: null,
      licese: '',
      enterpriseName: '',
      legalRepresentative: '',
      username: '',
    };
  changeStatusPage: any;
  changePhoneVisible = false;
  userId: any;
  constructor(
    private _service: AccountDetailService,
    private commonRequestService: CommonRequestService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getDropdown();
    // this.copy();
  }
  getDropdown() {
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
        this.messageService.add({ severity: 'warn', summary: '错误提示', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }

  onPageChange(event) {
    const page: {
      pageSize: Number,
      pageNumber: Number
    } = {
        pageSize: event.rows,
        pageNumber: event.first / event.rows + 1
      };

    // TODO
    this.searchAccount(page);
    this.changeStatusPage = page;
  }
  // TODO
  searchAccount(page?) {
    const params = {
      regionId: this.searchParams.regionId || '',
      dangerousLicense: this.searchParams.licese || '',
      enterpriseName: this.searchParams.enterpriseName || '',
      legalRepresentative: this.searchParams.legalRepresentative || '',
      username: this.searchParams.username || '',
      pageNumber: 1,
      pageSize: 40,
    };
    if (page) {
      params.pageNumber = page.pageNumber;
      params.pageSize = page.pageSize;
    } else {
      this.pages.first = 0;
    }
    this._service.searchAccount(params).then(data => {
      if (data.status === 0) {
        this.accountList = data.data.list;
        this.pages.total = data.data.total;
      } else {
        this.accountList = [];
        this.pages.total = 0;
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }

    }).catch(error => {
      this.accountList = [];
      this.pages.total = 0;
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }
  changeStatus(status) {
    this._service.changeFreeze({ userid: status.userId }).then(data => {
      if (data.status === 0) {
        if (!status.isfreezed) {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: '冻结账号成功' });
          this.searchAccount(this.changeStatusPage);
        } else {
          this.messageService.add({ severity: 'success', summary: '提示信息', detail: '启用账号成功' });
          this.searchAccount(this.changeStatusPage);
        }
      } else {
        this.messageService.add({ severity: 'warn', summary: '提示信息', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '服务器错误,错误码:', detail: error.status });
    });
  }
  showChangePhone = (data) => {
    console.log(data);
    this.changePhoneVisible = true;
    this.userId = data.userId;
    this.formModel.userPhone = data.phoneNumber;
  }
  changePhone = () => {
    if (this.formModel.valid && this.formModel.value.phone) {
      this._service.updateUserPhone(
        {
          userId: this.userId,
          phone: this.formModel.value.phone
        }
      ).then(
        data => {
          if (data.status === 0) {
            this.messageService.add({ severity: 'succes', summary: '响应消息', detail: data.msg });
            this.closechangePhone();
            this.searchAccount();
          } else {
            this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
          }
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: '响应消息', detail: '请输入正确的手机号码' });
    }
  }
  closechangePhone = () => {
    this.changePhoneVisible = false;
    this.formModel.phone = '';
  }

  confirmReset(userId) {
    this.confirmationService.confirm({
      message: `确定重置密码`,
      header: '重置密码',
      accept: () => {
        this.resetPassword(userId);
      },
      reject: () => {

      }
    });
  }

  resetPassword(userId) {
    this._service.resetPassword({ userId: userId }).then(data => {
      if (data.status === 0) {
        // this.query();
        this.messageService.add({ severity: 'success', summary: '重置成功', detail: '' });
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }
    });
  }



  ngOnDestroy() {
  }
}
