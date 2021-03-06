import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'gas-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.scss'],
  providers: [EnterpriseService]
})
export class EnterpriseDetailComponent implements OnInit {
  details: any = null;
  id = '';
  loading = false;

  constructor(
    private _service: EnterpriseService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.queryParams['value'].id;
    if (typeof this.id === 'string' && this.id !== '') {
      this.getDetails({ enterpriseNumber: this.id });
    }
  }

  getDetails(params?) {
    this.loading = true;
    this._service.getCorpDetailInfo(params)
      .then(data => {
        if (data.status === 0) {
          this.details = data.data;
        } else {
          this.details = null;
          this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
        }
        this.loading = false;
      });
  }

}
