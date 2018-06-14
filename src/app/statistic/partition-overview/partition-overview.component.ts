import { Component, OnInit } from '@angular/core';
import { PartitionOverviewService } from './partition-overview.service';
import { ActivatedRoute } from '@angular/router';

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
    private _service: PartitionOverviewService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.loading = true;
      this._service.regionOverview(queryParams).then(data => {
        this.loading = false;
        if (data.status === 0) {
          this.dataTable = data.data;
        } else {

        }
      });
    });
  }

}
