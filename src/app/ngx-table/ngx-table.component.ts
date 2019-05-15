import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxConfig, NgxHeaders, NgxOrder } from './types';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss']
})
export class NgxTableComponent implements OnInit {

  /**
   * Data of the table. Array of content
   */
  data: any[];
  @Input('data')
  set setData(data: any[]) {
    this.data = data;
    if (this.data && this.data.length > 0 && !this.headers) {
      this.headers = this.getHeadersFromData(this.data);
    }
  }

  get getData() {
    return this.data;
  }

  @Input('headers')
  headers: NgxHeaders;

  /**
   * Config of the table
   */
  @Input('config')
  config: NgxConfig = {
    editable: false
  };


  @Output('order')
  orderEmitter: EventEmitter<NgxOrder[]> = new EventEmitter<NgxOrder[]>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(order: NgxOrder[]) {
    this.orderEmitter.emit(order);
  }

  private getHeadersFromData(data: any[]): NgxHeaders {
    return Object.keys(data[0]);
  }

}
