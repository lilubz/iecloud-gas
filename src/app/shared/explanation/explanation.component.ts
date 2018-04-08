import { Component, OnInit, OnDestroy, Input, } from '@angular/core';

@Component({
  selector: 'gas-explanation',
  template: `
   <div class="explanation">
     <i class="fa fa-question-circle"  [pTooltip]="tooltip" [tooltipPosition]="position" ></i>
    </div>
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
