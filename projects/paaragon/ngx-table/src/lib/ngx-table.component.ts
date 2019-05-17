import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import DeepMerge from './utils/DeepMerge';
import { NgxTableHeaders, NgxTableConfig, NgxTableOrder, NgxTableFilter, NgxTableNew } from './ngx-table.types';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTableComponent implements OnInit {

  @Input()
  humanHeaders: NgxTableHeaders;

  headers: NgxTableHeaders;

  /**
   * Data of the table. Array of content
   */
  content: any[];
  @Input('data')
  set data(data: any[]) {
    this.content = data;
    if (this.content && this.content.length > 0) {
      this.headers = this.getHeadersFromData(this.content);
      if (!this.humanHeaders) {
        this.humanHeaders = this.headers;
      }
    }
  }

  get data(): any[] {
    return this.content;
  }

  /**
   * Config of the table
   */
  configBK: NgxTableConfig = {
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

  mergedConfig: NgxTableConfig;

  @Input('config')
  set config(conf: NgxTableConfig) {
    this.mergedConfig = DeepMerge.deepmerge(this.configBK, conf);
  }

  get config(): NgxTableConfig {
    return this.mergedConfig;
  }

  @Output() order: EventEmitter<NgxTableOrder> = new EventEmitter<NgxTableOrder>();

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();

  @Output() create: EventEmitter<NgxTableNew> = new EventEmitter<NgxTableNew>();

  constructor() { }

  ngOnInit() {
  }

  onOrder(orderObj: NgxTableOrder) {
    this.order.emit(orderObj);
  }

  onFilter(filterObj: NgxTableFilter) {
    this.filter.emit(filterObj);
  }

  onCreate(newObj: NgxTableNew) {
    this.create.emit(newObj);
  }

  enableFilter() {
    return this.mergedConfig.filter.enable;
  }

  enableCreate() {
    return this.mergedConfig.create.enable;
  }

  enableBody() {
    return this.content && this.content.length > 0;
  }

  private getHeadersFromData(data: any[]): NgxTableHeaders {
    return Object.keys(data[0]);
  }

}
