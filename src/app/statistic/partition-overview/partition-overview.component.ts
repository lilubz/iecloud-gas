import { Component, OnInit } from '@angular/core';
import { PartitionOverviewService } from './partition-overview.service';

@Component({
  selector: 'gas-partition-overview',
  templateUrl: './partition-overview.component.html',
  styleUrls: ['./partition-overview.component.scss'],
  providers: [PartitionOverviewService]
})
export class PartitionOverviewComponent implements OnInit {

  dataTable = [];
  loading = false;
  constructor(
    private _service: PartitionOverviewService
  ) { }

  ngOnInit() {
    this.loading = true;
    this._service.regionOverview({}).then(data => {
      this.loading = false
      if (data.status === 0) {
        console.log(data.data);
        this.dataTable = data.data;
      } else {

      }
    });

  }

}
