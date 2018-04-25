import { Component, OnInit } from '@angular/core';
import { SecurityListService } from './security-list.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'gas-security-list',
  templateUrl: './security-list.component.html',
  styleUrls: ['./security-list.component.scss'],
  providers: [SecurityListService]
})
export class SecurityListComponent implements OnInit {

  // // 分页参数
  // statisticPageNumber = 1;
  // statisticTotal = 0;
  // statisticFirst = 0;
  // pageSize = 20;

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
          this.securityList = data.data.list;
          console.log(this.securityList);
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
        this.deleteDetailVisible = false;
        this.listSecurityPublicityArticle();
        this.messageService.add({ severity: 'success', summary: '成功', detail: data.msg });
      }
    ).catch(
      data => {
        this.messageService.add({ severity: 'warn', summary: '获取登记统计信息失败', detail: data.msg });
      }
    );
  }
  cancel = () => {
    this.deleteDetailVisible = false;
    this.articleId = '';
  }
  show = (data) => {
    this.title = data.articleDescription;
    this.detailVisible = true;
  }

}
