import { Component, OnInit } from '@angular/core';
import { RepricingRistService } from './repricing-rist.servise';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'gas-repricing-rist',
  templateUrl: 'repricing-rist.component.html',
  styleUrls: ['repricing-rist.component.scss'],
  providers: [RepricingRistService]
})

export class RepricingRistComponent implements OnInit {
  nowTime = new Date();
  displayAddDialog = false;
  displayEditDialog = false;
  displayDeleteDialog = false;
  priceList: any;
  cylinderSpecificationList: SelectItem[] = [];
  formModel = {
    repricing: 0,
    pricingId: '',
    specificationId: ''
  };
  constructor(
    public _service: RepricingRistService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.nowTimes();
    this.listGcSpecification();
    this.list();
  }

  // 获取气瓶规格列表
  listGcSpecification = () => {
    this._service.listGcSpecification().then(data => {
      this.cylinderSpecificationList = data.data.map((item) => ({
        label: item.specificationId,
        value: item.specificationId
      }));
      this.formModel.specificationId = this.cylinderSpecificationList[0].value;
    }).catch(data => {
      this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
    });
  }

  // 获取定价信息列表
  list = () => {
    this._service.alllistGcPricingByCorp().then(data => {
      this.priceList = data.data;
    }).catch(data => {
      this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
    });
  }

  // 时间
  nowTimes = () => {
    this.nowTime = new Date();
    setTimeout(() => {
      this.nowTimes();
    }, 1000);
  }

  // 保存价格
  saveAddPrice = () => {
    if (this.formModel.repricing === null || this.formModel.repricing === undefined) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入气瓶价格' });
      return;
    } else if (this.formModel.repricing < 0) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '气瓶价格不能小于0' });
      return;
    }
    this._service.updateOrAddPricing({
      specificationId: this.formModel.specificationId,
      price: this.formModel.repricing
    }).then(data => {
      if (data.status === 0) {
        this.hideDialog();
        this.list();
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    }).catch(data => {
      this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
    });

  }

  // 取消并关闭弹出框
  hideDialog = () => {
    this.displayAddDialog = false;
    this.displayEditDialog = false;
    this.displayDeleteDialog = false;
  }

  showAddDialog = () => {
    this.displayAddDialog = true;
  }

  showEditDialog = (param) => {
    this.formModel.specificationId = param.specificationId;
    this.formModel.repricing = param.price;
    this.displayEditDialog = true;
  }

  showDeleteDialog = (param) => {
    this.displayDeleteDialog = true;
    this.formModel.pricingId = param.pricingId;
    this.formModel.specificationId = param.specificationId;
  }

  // 删除气瓶定价
  deletePrice = () => {
    this._service.deletePricing({
      pricingId: this.formModel.pricingId
    }).then(data => {
      if (data.status === 0) {
        this.displayDeleteDialog = false;
        this.messageService.add({ severity: 'success', summary: '删除成功', detail: '' });
        this.list();
      } else {
        this.messageService.add({ severity: 'warn', summary: '删除失败', detail: data.msg });
      }
    }).catch(data => {
      this.messageService.add({ severity: 'warn', summary: '删除失败', detail: data.msg });
    });
  }
}
