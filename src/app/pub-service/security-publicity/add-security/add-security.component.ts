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
    if (this.articleTitle && this.articleDescription) {
      this.AddsecurityService.uploadSecurityPublicityArticle({
        articleTitle: this.articleTitle,
        articleDescription: this.articleDescription
      }).then(
        data => {
          if (data.status === 0) {
            this.messageService.add({ severity: 'success', summary: '', detail: data.data });
            this.router.navigate(['pub-service/security-publicity/security-list']);
          }
        }
      ).catch(
        data => {
          this.messageService.add({ severity: 'warn', summary: '', detail: data.data });
        }
      );
    }
  }
}
