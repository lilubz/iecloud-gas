import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { zh_CN } from '../../../common/date-localization';
import { CommonRequestService } from '../../../core/common-request.service';
import { CylinderTraceService } from '../cylinder-trace.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-cylinder-state',
  templateUrl: './cylinder-state.component.html',
  styleUrls: ['./cylinder-state.component.css']
})
export class CylinderStateComponent implements OnInit {
  zh = zh_CN;
  cylinderStatus: SelectItem[] = [];
  cylinderList: Array<{
    gasLabelNumber: string,
    specificationId: string,
    liabilityTypeName: string,
    liabilityName: string,
    liabilityContact: string,
    liabilityAddress: string
  }> = [];

  pageSize = 10;
  pageNumber = 1;
  total = 0;
  selectedCylinderStatus = '';
  first = 0;

  constructor(
    private commonRequestService: CommonRequestService,
    private cylinderTraceService: CylinderTraceService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    this.commonRequestService.getLiabilitySubjectType().then(data => {
      if (data.status === 0) {
        this.cylinderStatus = data.data.map(item => ({ label: item.liabilityName, value: item.liabilityTypeId }))
          .slice(0, 6);
        this.cylinderStatus.unshift({ label: '--请选择--', value: '' });
      } else {
        this.messageService.add({ severity: 'warn', summary: '获取气瓶状态列表失败', detail: data.msg });
      }
    });
  }

  getCylinderByStatus() {
    if (this.selectedCylinderStatus === '') {
      this.cylinderList = [];
      this.total = 0;
      return;
    }
    this.cylinderTraceService.getCylinderByStatus({
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      liabilityTypeId: this.selectedCylinderStatus
    }).then(data => {
      if (data.status === 0) {
        if (data.data.list.length === 0) {
          this.messageService.add({ severity: 'warn', summary: '获取气瓶列表为空', detail: '' });
        }
        this.cylinderList = data.data.list;
        this.total = data.data.total;
      } else {
        this.cylinderList = [];
        this.total = 0;
        this.messageService.add({ severity: 'warn', summary: '获取气瓶列表失败', detail: data.msg });
      }
    }).catch(error => {
      this.cylinderList = [];
      this.total = 0;
      this.messageService.add({ severity: 'warn', summary: '获取气瓶列表失败', detail: error });
    });
  }

  onPageChange(event) {
    this.pageNumber = event.first / event.rows + 1;
    this.pageSize = event.rows;
    this.getCylinderByStatus();
  }

  searchCylinderList() {
    this.pageNumber = 1;
    this.total = 0;
    this.first = 0;
    this.getCylinderByStatus();
  }
}
