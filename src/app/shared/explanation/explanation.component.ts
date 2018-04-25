import { Component, OnInit, OnDestroy, Input, } from '@angular/core';

@Component({
  selector: 'gas-explanation',
  template: `
   
     <i class="fa fa-question-circle explanation" [pTooltip]="tooltip" [tooltipPosition]="position" ></i>

    `,
  styleUrls: ['./explanation.component.css']
})
export class ExplanationComponent implements OnInit, OnDestroy {
  @Input() tooltip: string;
  @Input() position: string = 'right';
  constructor() { }

  ngOnInit() {
  }


  ngOnDestroy() {
  }
}
