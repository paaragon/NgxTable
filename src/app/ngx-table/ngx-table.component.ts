import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableOrder, NgxTableHeaders, NgxTableConfig, NgxTableFilter } from './types';
import DeepMerge from '../utils/DeepMerge';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss']
})
export class NgxTableComponent implements OnInit {

  @Input('headers')
  humanHeaders: NgxTableHeaders;

  headers: NgxTableHeaders;

  /**
   * Data of the table. Array of content
   */
  _data: any[];
  @Input('data')
  set data(data: any[]) {
    this._data = data;
    if (this._data && this._data.length > 0) {
      this.headers = this.getHeadersFromData(this._data);
      if (!this.humanHeaders) {
        this.humanHeaders = this.headers;
      }
    }
  }

  get data(): any[] {
    return this._data;
  }

  /**
   * Config of the table
   */
  _configBK: NgxTableConfig = {
    placeholders: [],
    order: {
      enable: false
    },
    filter: {
      enable: false,
      debounceTime: 200,
      validations: {}
    },
    create: {
      enable: false,
      validations: {}
    }
  };

  _config: NgxTableConfig;

  @Input('config')
  set config(conf: NgxTableConfig) {
    this._config = DeepMerge.deepmerge(this._configBK, conf);
  }

  get config(): NgxTableConfig {
    return this._config;
  }

  @Output('order')
  orderEmitter: EventEmitter<NgxTableOrder> = new EventEmitter<NgxTableOrder>();

  @Output('filter')
  filterEmitter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(order: NgxTableOrder) {
    this.orderEmitter.emit(order);
  }

  onFilter(filter: NgxTableFilter) {
    this.filterEmitter.emit(filter);
  }

  enableFilter() {
    return this._config.filter.enable;
  }

  enableCreate() {
    return this._config.create.enable;
  }

  enableBody() {
    return this._data && this._data.length > 0;
  }

  private getHeadersFromData(data: any[]): NgxTableHeaders {
    return Object.keys(data[0]);
  }

}
