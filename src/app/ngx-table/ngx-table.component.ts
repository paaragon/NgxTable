import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableOrder, NgxTableHeaders, NgxTableConfig } from './types';

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
  headers: NgxTableHeaders;

  /**
   * Config of the table
   */
  @Input('config')
  config: NgxTableConfig = {
    editable: false,
    order: {
      enable: false
    },
    filter: {
      enable: false
    }
  };


  @Output('order')
  orderEmitter: EventEmitter<NgxTableOrder[]> = new EventEmitter<NgxTableOrder[]>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(order: NgxTableOrder[]) {
    this.orderEmitter.emit(order);
  }

  private getHeadersFromData(data: any[]): NgxTableHeaders {
    return Object.keys(data[0]);
  }

}
