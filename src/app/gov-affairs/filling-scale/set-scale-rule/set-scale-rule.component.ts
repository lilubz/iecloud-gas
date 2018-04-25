import { FillingScaleService } from './../filling-scale.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-set-scale-rule',
  templateUrl: './set-scale-rule.component.html',
  styleUrls: ['./set-scale-rule.component.scss']
})
export class SetScaleRuleComponent implements OnInit {
  boolIsValidForGcNoGasLabelNumber: boolean = false;
  boolIsValidForGcNotAccordWithCorpNumber: boolean = false;
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
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg })
      }
    });
  }

  save() {
    this.fillingScaleService.setRuleForFillingSupervise({
      boolIsValidForGcNoGasLabelNumber: this.boolIsValidForGcNoGasLabelNumber,
      boolIsValidForGcNotAccordWithCorpNumber: this.boolIsValidForGcNotAccordWithCorpNumber,
    }).then(data => {
      if (data.status === 0) {
        this.messageService.add({ severity: 'success', summary: '', detail: data.msg })
      } else {
        this.messageService.add({ severity: 'warn', summary: '', detail: data.msg })
      }
    });
  }
}
