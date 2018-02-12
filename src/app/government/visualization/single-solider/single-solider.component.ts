import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gas-single-solider',
  templateUrl: './single-solider.component.html',
  styleUrls: ['./single-solider.component.scss']
})

export class SingleSoliderComponent implements OnInit {
  downloadContainerVisible = false;
  path = '';
  constructor() { }

  ngOnInit() {

  }

  transformPath(path: string) {
    return path.replace(/\\/g, '\\\\');
  }
}
