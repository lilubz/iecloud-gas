import { FillingScaleService } from './../filling-scale.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-set-scale-rule',
  templateUrl: './set-scale-rule.component.html',
  styleUrls: ['./set-scale-rule.component.scss']
})
export class SetScaleRuleComponent implements OnInit {
  // 没有气瓶条码的气瓶充气是否合法
  boolIsValidForGcNoGasLabelNumber: boolean = false;
  // 气瓶条码与企业编码不一致的气瓶充气是否合法
  boolIsValidForGcNotAccordWithCorpNumber: boolean = false;
  // 单瓶充装周期
  balanceCycleRule: {
    boolIsOpenBalanceCycleRule: boolean,
    balanceCycle: number
  } = {
      boolIsOpenBalanceCycleRule: false,
      balanceCycle: 0
    };

  // 当日充装次数
  balanceCountRule: {
    boolIsOpenBalanceCountRule: boolean,
    balanceCount: number
  } = {
      boolIsOpenBalanceCountRule: false,
      balanceCount: 0
    };
  // 流转状态不完全
  statusChangeRule: {
    boolIsOpenStatusChangeRule: boolean
  } = {
      boolIsOpenStatusChangeRule: false
    };
  constructor(
    private fillingScaleService: FillingScaleService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getRuleForFillingSupervise();
  }

  getRuleForFillingSupervise() {
    this.fillingScaleService.getRuleForFillingSupervise().then(data => {
      if (data.status === 0) {
        this.boolIsValidForGcNoGasLabelNumber = data.data.boolIsValidForGcNoGasLabelNumber;
        this.boolIsValidForGcNotAccordWithCorpNumber = data.data.boolIsValidForGcNotAccordWithCorpNumber;
        this.balanceCycleRule = data.data.balanceCycleRule;
        this.balanceCountRule = data.data.balanceCountRule;
        this.statusChangeRule = data.data.statusChangeRule;
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

  setRuleForFillingSupervise() {
    this.fillingScaleService.setRuleForFillingSupervise({
      boolIsValidForGcNoGasLabelNumber: this.boolIsValidForGcNoGasLabelNumber,
      boolIsValidForGcNotAccordWithCorpNumber: this.boolIsValidForGcNotAccordWithCorpNumber,
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
  setBalanceCountRule() {
    this.fillingScaleService.setBalanceCountRule(this.balanceCountRule).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
  setBalanceCycleRule() {
    this.fillingScaleService.setBalanceCycleRule(this.balanceCycleRule).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
  setStatusChangeRule() {
    this.fillingScaleService.setStatusChangeRule(this.statusChangeRule).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
}
