import { Component, OnInit } from '@angular/core';
import { AddsecurityService } from './add-security.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
@Component({
  selector: 'gas-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.scss'],
  providers: [AddsecurityService],
})
export class AddSecurityComponent implements OnInit {
  articleDescription: string;
  articleTitle: string;
  securitySubmit = false;
  // disabled = false;

  // toggleDisabled() {
  //   this.disabled = !this.disabled;
  // }

  constructor(
    private AddsecurityService: AddsecurityService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  Addsecurity = () => {
    if (!this.articleTitle) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '宣传标题不能为空' });
    }
    if (!this.articleDescription) {
      this.messageService.add({ severity: 'warn', summary: '', detail: '宣传内容不能为空' });
    }
    if (this.articleTitle && this.articleDescription) {
      this.securitySubmit = true;
      this.AddsecurityService.uploadSecurityPublicityArticle({
        articleTitle: this.articleTitle,
        articleDescription: this.articleDescription
      }).then(
        data => {
          if (data.status === 0) {
            this.messageService.add({ severity: 'success', summary: '', detail: data.data });
            this.router.navigate(['pub-service/security-publicity/security-list']);
            this.securitySubmit = false;
          } else {
            this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
            this.securitySubmit = false;
          }
        }
      ).catch(
        data => {
          this.messageService.add({ severity: 'warn', summary: '', detail: data.data });
          this.securitySubmit = false;
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: '请补全内容' });
    }

  }
}
