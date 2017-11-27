import { SuggestedCustomer } from './suggestedCustomer.model';
import { UserStateService } from './../../core/userState.service';
import { CommonRequestService } from './../../core/common-request.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

import { Order } from './order.model';
import { Customer } from './../../input/user-info/Customer.model';
@Component({
  selector: 'gas-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pageNumber = 1;
  pageSize = 10;
  total = 0;

  orderSourceList: SelectItem[] = [
    { label: '电话呼入', value: '电话呼入' },
    { label: '自提', value: '自提' }
  ];
  cylinderSpecificationList: SelectItem[] = []; // 气瓶规格
  dispatcherList: SelectItem[] = []; // 配送员列表
  deliveryRegionList: SelectItem[] = []; // 可选择的配送区域列表
  deliveryStreetList: SelectItem[] = []; // 可选择的配送街道列表

  newOrder: Order = new Order(); // 新增订单
  orderList: Array<any> = []; // 待配送订单列表
  /**
   * 查询客户建议列表
   */
  customerSuggestions: Array<SuggestedCustomer> = [];
  selectedCustomer: SuggestedCustomer = new SuggestedCustomer(); // 选择用户
  selectedDeliveryAreaId = ''; // 选择的配送地址区域id
  selectedDeliveryStreetId = ''; // 选择的配送地址区域id
  // deliveryDetailAddress = ''; // 配送详细地址
  addOrderVisiable = false;
  dispatchVisiable = false;
  dispatchOrderForm: {
    orderId: string,
    dispatcherNumber: string
  } = {
      orderId: '',
      dispatcherNumber: ''
    };
  /**
   * 选择的气瓶规格信息
   */
  orderCylinderList: Array<{
    specificationId?: string, // 类型id
    num?: number, // 气瓶数量
    contentId?: string,
    orderId?: number
  }> = [{
    specificationId: '', // 类型id
    num: 1, // 气瓶数量
    contentId: '',
    orderId: null
  }];


  constructor(
    private dashboardService: DashboardService,
    private messageService: MessageService,
    private commonRequestService: CommonRequestService,
    private userStateService: UserStateService,
  ) { }

  ngOnInit() {
    this.formInit();
    this.getOrderList();
    this.commonRequestService.getCylinderSpecification().then(data => {
      if (data.status === 0) {
        this.cylinderSpecificationList = data.data.map(
          item => ({ label: item.specificationId, value: item.specificationId }));
        this.newOrder.orderContent[0].specificationId = this.cylinderSpecificationList[0].value;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取气瓶规格失败', detail: data.msg });
      }
    });

    this.commonRequestService.getRegions().then(data => {
      if (data.status === 0) {
        this.deliveryRegionList = data.data.map(
          item => ({ label: item.regionName, value: item.regionId }));
        this.selectedDeliveryAreaId = this.deliveryRegionList[0].value;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取气瓶规格失败', detail: data.msg });
      }
      return this.selectedDeliveryAreaId;
    }).then(regionId => {
      if (regionId) {
        this.deliveryCountyChange(regionId);
      }
    });
  }

  formInit() {
    this.selectedCustomer = new SuggestedCustomer();
    this.newOrder = new Order();
    this.newOrder.source = this.orderSourceList[0].value;
    this.newOrder.orderContent = [{
      specificationId: this.cylinderSpecificationList.length > 0 ? this.cylinderSpecificationList[0].value : '', // 类型id
      num: 1, // 气瓶数量
    }];
  }
  onPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.getOrderList();
  }
  getOrderList() {
    this.dashboardService.getNoDispatchOrder({
      pageNumber: this.pageNumber,
      pageSize: this.pageSize
    }).then(data => {
      if (data.status === 0) {
        this.orderList = data.data.list;
        this.total = data.data.total;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取订单列表失败', detail: data.msg });
        this.orderList = [];
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '', detail: error });
    });
  }
  getDispatcher(regionId?) {
    this.dashboardService.getDispatcher({
      regionId: regionId || this.selectedDeliveryStreetId || this.selectedDeliveryAreaId
        || this.userStateService.getUser().regionId
    }).then(data => {
      if (data.status === 0) {
        this.dispatcherList = data.data.map(item => ({ label: item.employeeName, value: item.dispatcherNumber }));
        this.dispatcherList.unshift({ label: '--请选择--', value: '' });
      } else {
        this.dispatcherList = [{ label: '--请选择--', value: '' }];
        this.messageService.add({ severity: 'warn', summary: '获取配送员信息失败', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '', detail: error });
    });
  }

  showAddOrderDialog(order?) {
    this.addOrderVisiable = true;
    this.formInit();
  }

  showDispatchDialog(order) {
    console.log(order);
    this.dispatchVisiable = true;
    this.dispatchOrderForm.orderId = order.orderId;
    this.getDispatcher(order.regionId || this.userStateService.getUser().regionId);
  }

  dispatchOrder() {
    if (!this.dispatchOrderForm.orderId) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择订单' });
      return false;
    } else if (!this.dispatchOrderForm.dispatcherNumber) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择配送员' });
      return false;
    }
    this.dashboardService.dispatchOrder(this.dispatchOrderForm).then(data => {
      if (data.status === 0) {
        this.getOrderList();
        this.messageService.add({ severity: 'success', summary: '', detail: '指派成功' });
        this.dispatchVisiable = false;
      } else {
        this.messageService.add({ severity: 'warn', summary: '指派失败', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '', detail: error });
    });
  }

  save() {
    // this.addOrderVisiable = false;
    this.newOrder.regionId = this.selectedDeliveryStreetId || this.selectedDeliveryAreaId || '';
    console.log(this.newOrder);
    if (this.checkOrderForm()) {
      this.dashboardService.addOrder({
        linkPhone: this.newOrder.linkPhone,
        linkMan: this.newOrder.linkMan,
        userIdentityCardNumber: this.newOrder.userIdentityCardNumber,
        linkAddress: this.newOrder.linkAddress,
        specificationId: [this.newOrder.orderContent[0].specificationId],
        num: [this.newOrder.orderContent[0].num.toString()],
        source: this.newOrder.source,
        dispatcherNumber: this.newOrder.dispatcherNumber,
        regionId: this.newOrder.regionId
      }).then(data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '', detail: '添加成功' });
          this.addOrderVisiable = false;
          this.getOrderList();
        } else {
          this.messageService.add({ severity: 'warn', summary: '添加失败', detail: data.msg });
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '', detail: error });
      });
    }

  }

  checkOrderForm() {
    if (!this.newOrder.linkPhone) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '联系电话填写不正确！' });
      return false;
    } else if (!this.newOrder.linkMan) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '联系人填写不正确！' });
      return false;
    } else if (!this.newOrder.regionId) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '行政区填写不正确！' });
      return false;
    } else if (this.newOrder.linkAddress === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '详细地址填写不正确！' });
      return false;
    } else if (!this.newOrder.orderContent[0].num) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '气瓶数量填写不正确！' });
      return false;
    }
    return true;
  }

  deliveryCountyChange(regionId) {
    this.commonRequestService.getWenZhouRegionList({
      regionId
    }).then(data => {
      if (data.status === 0) {
        this.deliveryStreetList = data.data.map(
          element => ({ label: element.regionName, value: element.regionId }));
        this.selectedDeliveryStreetId = '';
        this.deliveryStreetList.unshift({ label: '--请选择--', value: '' });
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取街道信息失败', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '', detail: error });
    });
  }

  searchCustomer(event) {
    this.dashboardService.getCustomerByPhone({
      pageNumber: 1,
      pageSize: 20,
      contactPhone: event.query
    }).then(data => {
      if (data.status === 0) {
        this.customerSuggestions = data.data.list;
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取用户信息失败', detail: data.msg });
      }
    }).catch(error => {
      this.messageService.add({ severity: 'error', summary: '', detail: error });
    });
  }

  selectSuggestedCustomer(event) {
    console.log(event);
    this.newOrder.linkPhone = event.phone;
    // this.newOrder.linkAddress = event.address;
    this.newOrder.linkMan = event.principal;
    this.newOrder.userIdentityCardNumber = event.userIdentityCardNumber;

    // this.deliveryRegionList.forEach(item => {
    //   if (item.value === event.regionId) {
    //     this.selectedDeliveryAreaId = event.regionId;
    //   }
    // });
  }
}
