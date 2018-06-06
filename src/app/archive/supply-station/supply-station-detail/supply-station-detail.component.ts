import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';
import { SupplyStionService } from '../supply-station.service';

@Component({
  selector: 'gas-supply-station-detail',
  templateUrl: './supply-station-detail.component.html',
  styleUrls: ['./supply-station-detail.component.scss'],
  providers: [SupplyStionService]
})
export class SupplyStationDetailComponent implements OnInit {
  details: any = null;
  id = '';
  loading = false;
  currentImgUrl = '';
  constructor(
    private _service: SupplyStionService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.queryParams['value'].id;
    if (typeof this.id === 'string' && this.id !== '') {
      this.getDetails({ supplyStationNumber: this.id });
    }
  }

  getDetails(params?) {
    this.loading = true;
    this._service.getSupplyStationDetailInfo(params)
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
