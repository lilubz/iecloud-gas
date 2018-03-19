import { API } from './../../../common/api';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ExportService, } from './export.service';
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
      if (data.status === 0) {
        this.exportParams.exportUserInfoUrl = data.data;
        window.location.href = this.exportParams.exportUserInfoUrl;
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '提示信息',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: '提示信息',
          detail: '导出失败'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: '响应' + error
      });
    });
  }
  exportCardInfo() {
    this._service.exportcardInfo({}).then(data => {
      if (data.status === 0) {
        this.exportParams.exportCardInfoUrl = data.data;
        window.location.href = this.exportParams.exportCardInfoUrl;
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: '响应' + error
      });
    });
  }
  exportCylinderInfo() {
    this._service.exportcylinderInfo({}).then(data => {
      if (data.status === 0) {
        this.exportParams.exportCylinderInfoUrl = data.data;
        window.location.href = this.exportParams.exportCylinderInfoUrl;
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: '响应' + error
      });
    });
  }
  exportCylinderTagInfo() {
    this._service.exportcylinderTagInfo({}).then(data => {
      if (data.status === 0) {
        this.exportParams.exportCylinderTagInfoUrl = data.data;
        window.location.href = this.exportParams.exportCylinderTagInfoUrl;
        setTimeout(() => {
          this.messageService.add({
            severity: 'success',
            summary: '导出成功',
            detail: '文件已导出'
          });
        }, 2000);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: '导出失败！',
          detail: '导出失败！'
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: '服务器错误',
        detail: '响应' + error
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
