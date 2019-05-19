import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import DeepMerge from './utils/DeepMerge';
import { NgxTableHeaders, NgxTableConfig, NgxTableOrder, NgxTableFilter, NgxTableNew, NgxTableEdition } from './ngx-table.types';
import { NgxTableService } from './ngx-table.service';

@Component({
  selector: 'ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTableComponent implements OnInit {

  @Input() humanHeaders: NgxTableHeaders;

  /**
   * Data of the table. Array of content
   */
  dataCopy: any[];
  @Input() set data(data: any[]) {
    this.dataCopy = data;
    this.initHeaders();
  }

  get data(): any[] {
    return this.dataCopy;
  }

  mergedConfig: NgxTableConfig;
  @Input() set config(conf: NgxTableConfig) {
    this.mergedConfig = DeepMerge.deepmerge(this.configBK, conf);
  }

  get config(): NgxTableConfig {
    return this.mergedConfig;
  }

  @Output() sort: EventEmitter<NgxTableOrder> = new EventEmitter<NgxTableOrder>();

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();

  @Output() create: EventEmitter<NgxTableNew> = new EventEmitter<NgxTableNew>();

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  @Output() edit: EventEmitter<NgxTableEdition> = new EventEmitter<NgxTableEdition>();

  headers: NgxTableHeaders;

  /**
   * Config of the table
   */
  configBK: NgxTableConfig = {
    placeholders: null,
    sort: {
      enable: false
    },
    filter: {
      enable: false,
      debounceTime: 200,
      validations: null,
      lock: null
    },
    create: {
      enable: false,
      validations: null,
      lock: null
    },
    delete: {
      enable: false
    },
    edit: {
      enable: false,
      longContent: 20,
      lock: null
    }
  };

  orderObj: NgxTableOrder;

  constructor(
    private tableService: NgxTableService
  ) { }

  ngOnInit() {
  }

  onSort(orderObj: NgxTableOrder) {
    this.sort.emit(orderObj);
  }

  onFilter(filterObj: NgxTableFilter) {
    this.filter.emit(filterObj);
  }

  onCreate(newObj: NgxTableNew) {
    this.create.emit(newObj);
  }

  onDelete(index: number) {
    console.log(index);
    this.delete.emit(index);
  }

  onEdit(edition: NgxTableEdition) {
    this.edit.emit(edition);
  }

  enableFilter() {
    return this.headers && this.config.filter.enable;
  }

  enableCreate() {
    return this.headers && this.config.create.enable;
  }

  enableBody() {
    return this.data && this.data.length > 0;
  }

  private initHeaders() {
    if (this.data && this.data.length > 0) {
      this.headers = this.getHeadersFromData(this.dataCopy);
    }
    if (!this.humanHeaders) {
      this.humanHeaders = this.headers;
    }
  }

  private getHeadersFromData(data: any[]): NgxTableHeaders {
    return Object.keys(data[0]);
  }
}
