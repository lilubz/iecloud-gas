import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ExportService, } from './export.service';
import { API_TOKEN } from '../../core/api';
import { error } from 'selenium-webdriver';
import { MessageService } from 'primeng/components/common/messageservice';
import { Validators, FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'gas-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit, OnDestroy {
  // userform: FormGroup;
  // // aa:string;
  // submitted: boolean;

  // genders: SelectItem[];

  // description: string;
  constructor(private _service: ExportService,
    @Inject(API_TOKEN) private API,
    private messageService: MessageService,
    private fb: FormBuilder) { }
  exportParams: {
    exportUserInfoUrl: any,
    exportCardInfoUrl: any,
    exportCylinderInfoUrl: any,
    exportCylinderTagInfoUrl: any,
  } = {
      exportUserInfoUrl: '',
      exportCardInfoUrl: '',
      exportCylinderInfoUrl: '',
      exportCylinderTagInfoUrl: '',
    };

  exportUserInfo() {
    this._service.exportuserInfo({}).then(data => {
      this.exportParams.exportUserInfoUrl = 'http://192.168.1.26:8080' + data.data;
      window.location.href = this.exportParams.exportUserInfoUrl;
      if (data.status === 0) {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'failed',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: ''
      });
    });
  }
  exportCardInfo() {
    this._service.exportcardInfo({}).then(data => {
      this.exportParams.exportCardInfoUrl = 'http://192.168.1.26:8080' + data.data;
      window.location.href = this.exportParams.exportCardInfoUrl;
      if (data.status === 0) {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'failed',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: ''
      });
    });
  }
  exportCylinderInfo() {
    this._service.exportcylinderInfo({}).then(data => {
      this.exportParams.exportCylinderInfoUrl = 'http://192.168.1.26:8080' + data.data;
      window.location.href = this.exportParams.exportCylinderInfoUrl;
      if (data.status === 0) {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'failed',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: ''
      });
    });
  }
  exportCylinderTagInfo() {
    this._service.exportcylinderTagInfo({}).then(data => {
      this.exportParams.exportCylinderTagInfoUrl = 'http://192.168.1.26:8080' + data.data;
      window.location.href = this.exportParams.exportCylinderTagInfoUrl;
      if (data.status === 0) {
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'failed',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: ''
      });
    });
  }

  ngOnInit() {
    // this.userform = this.fb.group({
    //   'firstname': new FormControl('', Validators.required),
    //   'lastname': new FormControl('', Validators.required),
    //   'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    //   'description': new FormControl(''),
    //   'gender': new FormControl('', Validators.required)
    // });

    // this.genders = [];
    // this.genders.push({ label: 'Select Gender', value: '' });
    // this.genders.push({ label: 'Male', value: 'Male' });
    // this.genders.push({ label: 'Female', value: 'Female' });
  }
  // onSubmit(value: string) {
  //   this.submitted = true;
  // }

  // get diagnostic() { return JSON.stringify(this.userform.value); }
  ngOnDestroy() {
  }
}
