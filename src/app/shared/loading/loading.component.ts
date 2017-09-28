import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'gas-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#loading-text").text('test');
  }

}
