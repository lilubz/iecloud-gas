import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../../core/userState.service';

@Component({
  selector: 'gas-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  constructor(
    private userStateService: UserStateService,
  ) { }

  ngOnInit() {
  }

}
