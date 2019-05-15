import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxHeaders, NgxOrder } from '../types';

@Component({
  selector: '[ngx-table-header]',
  templateUrl: './ngx-table-header.component.html',
  styleUrls: ['./ngx-table-header.component.scss']
})
export class NgxTableHeaderComponent implements OnInit {

  order: NgxOrder;

  headers: NgxHeaders = [];
  @Input('headers')
  set setHeaders(headers: NgxHeaders) {
    this.headers = headers;
  }

  get getHeaders(): NgxHeaders {
    return this.headers;
  }

  @Output('order')
  orderEmitter: EventEmitter<NgxOrder> = new EventEmitter<NgxOrder>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(header: string) {
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

}
