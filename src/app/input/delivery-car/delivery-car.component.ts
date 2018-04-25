import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { DeliveryCarService } from './delivery-car.service';
@Component({
  selector: 'gas-delivery-car',
  templateUrl: './delivery-car.component.html',
  styleUrls: ['./delivery-car.component.scss'],
  providers: [DeliveryCarService]
})
export class DeliveryCarComponent implements OnInit {
  suggestions = [{}];
  formModel = {
    number: '',
    origin: '1',
    default: null
  };
  dropdown = {
    origin: [
      {
        label: '个人',
        value: '1'
      },
      {
        label: '企业',
        value: '2'
      }
    ]
  };
  constructor(
    private _service: DeliveryCarService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.checkForm()) {
      this.sendForm({
        carNumber: this.formModel.number,
        ownerType: this.formModel.origin,
        dispatcherNumber: this.formModel.default.dispatcherNumber
      });
    }
  }
  checkForm() {
    // 车牌号不是必填项
    if (!this.formModel.origin.length) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入车辆归属' });
      return false;
    } else if (this.formModel.default === null) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入默认送气工' });
      return false;
    }
    return true;
  }
  onBlurAutoComplete() {
    if (typeof this.formModel.default === 'string') {
      if (this.suggestions.length === 1 && this.suggestions[0]['employeeName'] === this.formModel.default) {
        this.formModel.default = this.suggestions[0];
      } else {
        this.formModel.default = null;
      }
    }
  }
  getSuggestions(event?) {
    this._service.listTheCorpDispatcherInfoByTheNameOfTheCorpDispatcher({
      employeeName: event.query
    })
      .then(data => {
        if (data.status === 0) {
          this.suggestions = data.data;
        } else {
          this.suggestions = [];
        }
      });
  }
  sendForm(params) {
    this._service.insertCorpCarInfoDistribution(params)
      .then(data => {
        if (data.status === 0) {
          this.formModel = {
            number: '',
            origin: '1',
            default: null
          };
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}
