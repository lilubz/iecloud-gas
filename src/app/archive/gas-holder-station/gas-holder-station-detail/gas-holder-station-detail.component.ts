import { Component, OnInit } from '@angular/core';
import { GsaHolderStationService } from '../gas-holder-station.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gas-gas-holder-station-detail',
  templateUrl: './gas-holder-station-detail.component.html',
  styleUrls: ['./gas-holder-station-detail.component.scss'],
  providers: [GsaHolderStationService]
})
export class GasHolderStationDetailComponent implements OnInit {
  details: any = null;
  id = '';
  loading = false;
  constructor(
    private _service: GsaHolderStationService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.queryParams['value'].id;
    if (typeof this.id === 'string' && this.id !== '') {
      this.getDetails({ inflatableStationNumber: this.id });
    }
  }

  getDetails(params?) {
    this.loading = true;
    this._service.getInflatableStationDetailInfo(params)
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
