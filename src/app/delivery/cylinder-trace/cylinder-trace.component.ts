import { zh_CN } from './../../common/date-localization';
import { MessageService } from 'primeng/components/common/messageservice';
import { CylinderTraceService } from './cylinder-trace.service';
import { CommonRequestService } from './../../core/common-request.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'gas-cylinder-trace',
  templateUrl: './cylinder-trace.component.html',
  styleUrls: ['./cylinder-trace.component.scss']
})
export class CylinderTraceComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
