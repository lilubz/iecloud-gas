import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gas-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent implements OnInit, OnDestroy {
  returnURL: string;
  setIntervalUrl: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let oldUrl = this.route.queryParams['value'].url;
    this.returnURL = oldUrl || '';
    this.setIntervalUrl = setInterval(go, 1000);
    var second = 3; //利用了全局变量来执行
    function go() {
      second--;
      if (second > 0) {
        document.getElementById("totalSecond").innerHTML = second + ''; //每次设置的second的值都不一样了。
      } else {
        location.href = ('#' + oldUrl) || '';
      }
    }
  }
  ngOnDestroy() {
    clearInterval(this.setIntervalUrl)
  }
}
