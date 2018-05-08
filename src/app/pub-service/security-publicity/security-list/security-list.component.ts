import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SecurityListService } from './security-list.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.scss'],
  providers: [SecurityListService]
})
export class SecurityListComponent implements OnInit {
  @ViewChild('detail') detailEle: ElementRef;
  securityList: any = [];
  title: any;
  articleId: any;
  detailVisible = false;
  deleteDetailVisible = false;

  constructor(
    private SecurityListService: SecurityListService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listSecurityPublicityArticle();
  }

  listSecurityPublicityArticle = () => {
    this.SecurityListService.listSecurityPublicityArticle({})
      .then(data => {
        if (data.status === 0) {
          this.securityList = data.data;
        } else {
          this.messageService.add({ severity: 'warn', summary: '没有数据', detail: data.msg });
          this.securityList = [];
        }
      });
  }
  delete = (articleId) => {
    this.deleteDetailVisible = true;
    this.articleId = articleId;
  }
  confirmDelete = () => {
    this.SecurityListService.deleteSecurityPublicityArticle({
      articleId: this.articleId.articleId
    }).then(
      data => {
        if (data.status === 0) {
          this.messageService.add({ severity: 'success', summary: '删除成功', detail: data.msg });
          this.listSecurityPublicityArticle();
        } else {
          this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
        }
        this.deleteDetailVisible = false;
      }
    );
  }
  show = (data) => {
    this.detailEle.nativeElement.innerHTML = data.articleDescription;
    this.detailVisible = true;
  }

}
