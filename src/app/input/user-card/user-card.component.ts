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
  customerIDTypes: SelectItem[] = [
    { label: '用户名称', value: '用户名称' },
    { label: '用户编码', value: '用户编码' },
    { label: '证件编号', value: '证件编号' },
  ];

  bindCustomerToCard: {
    customerIDType: string;
    customerID: string;
    cardNo: string;
  } = {
    customerIDType: '用户名称',
    customerID: '',
    cardNo: ''
  };//绑定用户卡模态框数据

  applyCard: {
    applyNumber: string;
    applyExplain: string;
  } = {
    applyNumber: 'number',
    applyExplain: 'string'
  };// 申请用户卡模态框数据

  customerCards: CustomerCard[] = [];// 已申请用户卡列表
  customerSuggestions: Customer[] = [];// 用户卡绑定--客户搜索建议列表
  selectedCustomer: Customer = new Customer();// 用户卡绑定--选中的用户
  selectedCustomerCard: CustomerCard = new CustomerCard();// 用户卡绑定--选中的用户卡

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < 10; i++) {
      this.customerCards.push(new CustomerCard());
    }
  }

  searchCustomer(event) {
    console.log(event);
    this.customerSuggestions = [
      {
        IDName: 'sdgfassssssssssssssssssssssssssssss',
        residentialAddress: 'asgsddddddddddddddds',
        cardNo: 'sdgsdddddddd'
      },
      {
        IDName: 'sdgfas',
        residentialAddress: 'asgds',
        cardNo: 'sdg'
      },
      {
        IDName: 'sdgfas',
        residentialAddress: 'asgds',
        cardNo: 'sdg'
      }
    ];
  }
  selectSuggestedCustomer(event: Customer) {
    console.log(event);
    this.bindCustomerToCard.customerID = event.IDName;

  }

}
