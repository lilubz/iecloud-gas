import { Directive, Input, HostListener } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Util } from '../core/util';

declare const $;
@Directive({
  selector: '[gasExportFile]'
})
export class ExportFileDirective {
  @Input() request: (params?: { resultType?: string }) => Promise<any>;
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (this.request) {
      this.request({ resultType: 'excel' }).then(data => {
        if (data.status === 0) {
          this.util.downloadFile(data.data);
        } else {
          this.messageService.add({ severity: 'warn', summary: '', detail: data.msg });
        }
      });
    }
  }

  constructor(
    private messageService: MessageService,
    private util: Util
  ) { }

}
