import { MessageService } from 'primeng/components/common/messageservice';
import { UserCardService } from './user-card.service';
import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/components/common/selectitem';
import { CustomerCard } from './CustomerCard.model';
import { Customer } from './../user-info/Customer.model';
@Component({
  selector: 'gas-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  pageNumber = 1;
  pageSize = 10;
  total = 0;

  // 绑定卡时的客户查询类型
  customerIDTypes: SelectItem[] = [
    { label: '证件编号', value: '证件编号' },
    { label: '用户名称', value: '用户名称' },
  ];
  gasSites: SelectItem[]; // 绑定卡时的供气站点下拉列表

  // 绑定用户卡模态框数据
  bindCustomerToCard: {
    site: string;
    userNumber: string;
    userIdentityCardNumber: string;
  } = {
      userIdentityCardNumber: '',
      userNumber: '',
      site: '',
    };

  // 申请用户卡模态框数据
  applyCardParams: {
    amount: string;
    detail: string;
  } = {
      amount: '',
      detail: ''
    };

  customerCards: CustomerCard[] = []; // 申请用户卡列表

  // 用户卡绑定--客户搜索建议列表
  customerSuggestions: {
    userNumber: string,
    userName: string,
    certificateName: string,
    deliveryAddress: string,
    certificateId: string,
    userStatus: string,
  }[] = [];

  // 用户卡绑定--选中的用户
  selectedCustomer: {
    userNumber?: string,
    userName?: string,
    certificateName?: string,
    deliveryAddress?: string,
    certificateId?: string,
    userStatus?: string,
  } = {
      userNumber: '',
      userName: '',
      certificateName: '',
      deliveryAddress: '',
      certificateId: '',
      userStatus: ''
    };

  customerCardSuggestions: CustomerCard[] = []; // 用户卡绑定--用户卡搜索建议列表
  selectedCustomerCard: CustomerCard = new CustomerCard(); // 用户卡绑定--选中的用户卡
  selectedCustomerIDType = this.customerIDTypes[0].value; // 用户卡绑定--选中的用户查询字段
  applyCardVisible = false;
  bindCardVisible = false;

  constructor(private userCardService: UserCardService, private messageService: MessageService) { }

  ngOnInit() {
    this.getUnbindCardList();
  }

  onPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.getUnbindCardList();
  }
  getUnbindCardList() {
    this.userCardService.getUnbindCardList({
      pageNum: this.pageNumber,
      pageSize: this.pageSize
    }).then(data => {
      if (data.status === 0) {
        this.customerCards = data.data.list;
        this.total = data.data.total;
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }
  searchCustomer(event) {
    console.log(event);
    this.userCardService.getUnbindCustomerList({
      pageNum: 1,
      pageSize: 20,
      userName: this.selectedCustomerIDType === '用户名称' ? event.query : '',
      certificateId: this.selectedCustomerIDType === '证件编号' ? event.query : '',
    }).then(data => {
      if (data.status === 0) {
        this.customerSuggestions = data.data.list;
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }
  selectSuggestedCustomer(event: any) {
    console.log(event);
    this.selectedCustomer = event;
    this.bindCustomerToCard.userNumber = event.userNumber;
  }

  searchCustomerCard(event) {
    console.log(event);
    this.userCardService.getUnbindCardList({
      pageNum: 1,
      pageSize: 20,
      userIdentityCardNumber: this.bindCustomerToCard.userIdentityCardNumber
    }).then(data => {
      if (data.status === 0) {
        this.customerCardSuggestions = data.data.list;
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }
  selectSuggestedCustomerCard(event: any) {
    console.log(event);
    this.selectedCustomerCard = event;
    this.bindCustomerToCard.userIdentityCardNumber = event.userIdentityCardNumber;
  }

  applyCard() {
    if (!this.applyCardParams.amount) {
      this.messageService.add({ severity: 'warn', summary: '请输入申请数量', detail: '' });
      return false;
    }
    this.userCardService.applyCard(this.applyCardParams).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '保存成功', detail: data.msg });
        this.applyCardVisible = false;
      } else {
        this.messageService.add({ severity: 'warn', summary: '保存失败', detail: data.msg });
      }
    });
  }

  showBindCardDialog(customerCard?: CustomerCard) {
    console.log(customerCard);
    this.bindCardVisible = true;
    this.selectedCustomer = {
      userNumber: '',
      userName: '',
      certificateName: '',
      deliveryAddress: '',
      certificateId: '',
      userStatus: ''
    };
    this.bindCustomerToCard.userNumber = '';
    this.selectedCustomerCard = customerCard || new CustomerCard();
    this.bindCustomerToCard.userIdentityCardNumber = customerCard ? customerCard.userIdentityCardNumber : '';
  }

  bind() {
    if (this.bindCustomerToCard.userNumber === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入绑定用户的名称或证件编号！' });
      return;
    } else if (this.bindCustomerToCard.userIdentityCardNumber === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入身份认证卡编号！' });
      return;
    }

    this.userCardService.bindCustomerAndCard({
      userNumber: this.bindCustomerToCard.userNumber,
      userIdentityCardNumber: this.bindCustomerToCard.userIdentityCardNumber,
      // site: this.bindCustomerToCard.site
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '绑定成功', detail: data.msg });
        this.getUnbindCardList();
        this.bindCardVisible = false;
      } else {
        this.messageService.add({ severity: 'warn', summary: '绑定失败', detail: data.msg });
      }
    });
  }
}
