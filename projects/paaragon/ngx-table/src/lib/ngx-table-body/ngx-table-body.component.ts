import { Component, OnInit, Input } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig } from '../ngx-table.types';

@Component({
  selector: '[ngx-table-body]',
  templateUrl: './ngx-table-body.component.html',
  styleUrls: ['./ngx-table-body.component.scss']
})
export class NgxTableBodyComponent implements OnInit {

  @Input() config: NgxTableConfig;

  @Input() data: any[];

  @Input() headers: NgxTableHeaders;

  constructor() { }

  ngOnInit() {
  }

  showLastColumn() {
    return this.config.create.enable || this.config.filter.enable;
  }
}
