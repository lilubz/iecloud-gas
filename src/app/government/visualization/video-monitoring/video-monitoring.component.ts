import { UserStateService } from './../../../core/userState.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-video-monitoring',
  templateUrl: './video-monitoring.component.html',
  styleUrls: ['./video-monitoring.component.scss']
})
export class VideoMonitoringComponent implements OnInit {
  isAdmin: boolean;
  constructor(
    private userStateService: UserStateService
  ) { }

  ngOnInit() {
    this.isAdmin = (this.userStateService.getUser().roleId).toString() === '4' ? true : false;
  }

}
