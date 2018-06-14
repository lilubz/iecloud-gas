import { Component, OnInit } from '@angular/core';
import { CityOverviewService } from './city-overview.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CityReviewList } from './cylinder.model';

@Component({
  selector: 'gas-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.scss'],
  providers: [CityOverviewService]
})
export class CityOverviewComponent implements OnInit {
  cityReview: any = new CityReviewList();
  loading = false;
  constructor(
    private _service: CityOverviewService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this._service.corpOverview({}).then(data => {
      if (data.status === 0) {
        // console.log(data.data);
        this.cityReview = data.data;
        this.cityReview['isTrue'] = true;
        // this.messageService.add({ severity: 'success', summary: '响应消息', detail: data.msg });
      } else {
        // this.messageService.add({ severity: 'warn', summary: '响应消息', detail: data.msg });
      }
      this.loading = false;
    });
  }

}
