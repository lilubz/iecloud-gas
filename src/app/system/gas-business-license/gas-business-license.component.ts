import { MessageService } from 'primeng/components/common/messageservice';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GasBusinessLicenseService } from './gas-business-license.service';

@Component({
  selector: 'gas-gas-business-license',
  templateUrl: './gas-business-license.component.html',
  styleUrls: ['./gas-business-license.component.scss'],
  providers: [GasBusinessLicenseService]
})
export class GasBusinessLicenseComponent implements OnInit {
  @ViewChild('businessLicenseFile') businessLicenseFile: ElementRef;
  constructor(
    private messageService: MessageService,
    private gasBusinessLicenseService: GasBusinessLicenseService
  ) { }

  ngOnInit() { }

  upload() {
    const file = this.businessLicenseFile.nativeElement.files[0];
    if (!file) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '请选择文件' });
      return false;
    }
    this.messageService.add({ severity: 'warn', summary: '', detail: '功能开发中！' });

    // let formData = new FormData();
    // formData.append('file', file);
    // this.gasBusinessLicenseService.uploadGasBusinessLicense(formData).then(data => {
    //   if (data.status === 0) {

    //   } else {

    //   }
    // });
  }
}
