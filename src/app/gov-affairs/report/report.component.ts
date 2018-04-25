import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../core/userState.service';

@Component({
  selector: 'gas-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  showAnalysisBtn = false;
  constructor(
    private userStateService: UserStateService,
  ) { }

  ngOnInit() {
    this.showAnalysisBtn = this.userStateService.getUser().username === '温州市综合行政执法局';
  }

}
