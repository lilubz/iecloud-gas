import { FillingScaleService } from './../filling-scale.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-set-scale-rule',
  templateUrl: './set-scale-rule.component.html',
  styleUrls: ['./set-scale-rule.component.scss']
})
export class SetScaleRuleComponent implements OnInit {
  // 气瓶合法性验证规则
  ruleGcLabelNumberValidVO: {
    boolIsCheckGcLabelNumberValid: boolean
  } = {
      boolIsCheckGcLabelNumberValid: false
    }
  // 单瓶充装周期
  balanceCycleRule: {
    boolIsCheckFillingCycle: boolean,
    fillingCycle: number
  } = {
      boolIsCheckFillingCycle: false,
      fillingCycle: 0
    };

  // 当日充装次数
  balanceCountRule: {
    boolIsCheckFillingCountOneDay: boolean,
    fillingCountOneDay: number
  } = {
      boolIsCheckFillingCountOneDay: false,
      fillingCountOneDay: 0
    };
  // 流转状态不完全
  statusChangeRule: {
    boolIsDispatchComplete: boolean
  } = {
      boolIsDispatchComplete: false
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
        console.log(data.data);
        
        this.ruleGcLabelNumberValidVO = data.data.ruleGcLabelNumberValidVO || {};
        this.balanceCycleRule = data.data.ruleFillingCycleVO  || {};
        this.balanceCountRule = data.data.ruleFillingCountOneDayVO  || {};
        this.statusChangeRule = data.data.ruleGcDispatchCompleteVO  || {};
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
      }
    });
  }

  setRuleForFillingSupervise() {
    this.fillingScaleService.setRuleForCheckGcValid({
      boolIsCheckGcLabelNumberValid: this.ruleGcLabelNumberValidVO.boolIsCheckGcLabelNumberValid,
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
  setBalanceCycleRule() {
    this.fillingScaleService.setRuleForCheckFillingCycle(this.balanceCycleRule).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
  setBalanceCountRule() {
    this.fillingScaleService.setRuleForCheckFillingCountOneDay(this.balanceCountRule).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
  setStatusChangeRule() {
    this.fillingScaleService.setRuleForCheckGcDispatchComplete(this.statusChangeRule).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg });
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        this.getRuleForFillingSupervise();
      }
    });
  }
}
