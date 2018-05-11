import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { TransportCarService } from './transport-car.service';

@Component({
  selector: 'gas-transport-car',
  templateUrl: './transport-car.component.html',
  styleUrls: ['./transport-car.component.scss'],
  providers: [TransportCarService]
})
export class TransportCarComponent implements OnInit {
  dropdown = {
    type: [
      {
        label: '请选择',
        value: ''
      },
      {
        label: '运输车',
        value: '1'
      },
      {
        label: '直销车',
        value: '2'
      },
    ]
  };
  formModel = {
    type: '',
    number: '',
    company: '',
    driver: '',
    escort: '',
    licence: ''
  };
  constructor(
    private _service: TransportCarService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.checkForm()) {
      this.sendForm({
        vehicleType: this.formModel.type,
        carNumber: this.formModel.number,
        ownerName: this.formModel.company,
        driverName: this.formModel.driver,
        carCarrierName: this.formModel.escort,
        transportLicense: this.formModel.licence
      });
    }
  }
  checkForm() {
    if (this.formModel.type === '') {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择车辆类型' });
      return false;
    } else if (this.formModel.number.length < 6 || this.formModel.number.length > 8) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入正确的车牌号' });
      return false;
    } else if (!this.formModel.company.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入所属危化品运输公司' });
      return false;
    } else if (!this.formModel.driver.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入驾驶员姓名' });
      return false;
    } else if (!this.formModel.escort.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入押运员姓名' });
      return false;
    } else if (!this.formModel.licence.trim()) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请输入运输许可证' });
      return false;
    }
    return true;
  }


  sendForm(params) {
    this._service.insertCorpCarInfoTO(params)
      .then(data => {
        if (data.status === 0) {
          this.formModel = {
            type: '',
            number: '',
            company: '',
            driver: '',
            escort: '',
            licence: ''
          };
          this.messageService.add({ severity: 'success', summary: '操作成功', detail: data.msg });
        } else {
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
      });
  }
}
