import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableOrder, NgxTableConfig } from '../types';

@Component({
  selector: '[ngx-table-header]',
  templateUrl: './ngx-table-header.component.html',
  styleUrls: ['./ngx-table-header.component.scss']
})
export class NgxTableHeaderComponent implements OnInit {

  order: NgxTableOrder;

  headers: NgxTableHeaders = [];
  @Input('headers')
  set setHeaders(headers: NgxTableHeaders) {
    this.headers = headers;
  }

  get getHeaders(): NgxTableHeaders {
    return this.headers;
  }

  @Input('config')
  config: NgxTableConfig;

  @Output('order')
  orderEmitter: EventEmitter<NgxTableOrder> = new EventEmitter<NgxTableOrder>();

  constructor() { }

  ngOnInit() {
    if (this.config) {

    }
  }

  onOrder(header: string) {
    if (!this.config.order.enable) {
      return;
    }
    if (this.order && this.order.field === header && this.order.direction === 1) {
      this.order = {
        field: header,
        direction: -1
      };
    } else if (this.order && this.order.field === header && this.order.direction === -1) {
      this.order = null;
    } else {
      this.order = {
        field: header,
        direction: 1
      };
    }

    this.orderEmitter.emit(this.order);
  }

  isAsc(header: string) {
    return this.order && this.order.field === header && this.order.direction === 1;
  }

  isDesc(header: string) {
    return this.order && this.order.field === header && this.order.direction === -1;
  }

  isOrderable() {
    return this.config && this.config.order && this.config.order.enable;
  }

}
