import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableOrder, NgxTableConfig } from '../ngx-table.types';
import { faHashtag, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[ngx-table-header]',
  templateUrl: './ngx-table-header.component.html',
  styleUrls: ['./ngx-table-header.component.scss']
})
export class NgxTableHeaderComponent implements OnInit {

  orderObj: NgxTableOrder;

  faHashtag = faHashtag;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;

  @Input() headers: NgxTableHeaders = [];

  @Input() humanHeaders: NgxTableHeaders;

  @Input() config: NgxTableConfig;

  @Output() order: EventEmitter<NgxTableOrder> = new EventEmitter<NgxTableOrder>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(header: string) {
    if (!header || !this.config.order.enable) {
      return;
    }
    if (this.orderObj && this.orderObj.field === header && this.orderObj.direction === 1) {
      this.orderObj = {
        field: header,
        direction: -1
      };
    } else if (this.orderObj && this.orderObj.field === header && this.orderObj.direction === -1) {
      this.orderObj = null;
    } else {
      this.orderObj = {
        field: header,
        direction: 1
      };
    }

    this.order.emit(this.orderObj);
  }

  isAsc(header: string) {
    return this.orderObj && this.orderObj.field === header && this.orderObj.direction === 1;
  }

  isDesc(header: string) {
    return this.orderObj && this.orderObj.field === header && this.orderObj.direction === -1;
  }

  showLastColumn() {
    return this.config.create.enable || this.config.filter.enable;
  }
}
