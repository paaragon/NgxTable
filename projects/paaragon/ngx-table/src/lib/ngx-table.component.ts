import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import DeepMerge from './utils/DeepMerge';
import {
  NgxTableHeaders, NgxTableConfig, NgxTableSort,
  NgxTableFilter, NgxTableNew, NgxTableEdition, NgxTableDelete, NgxTableAutocomplete, NgxTableClick
} from './ngx-table.types';

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

  @Input() totalElements: number;

  @Input() autocomplete: NgxTableAutocomplete;

  @Output() sort: EventEmitter<NgxTableSort> = new EventEmitter<NgxTableSort>();

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();

  @Output() create: EventEmitter<NgxTableNew> = new EventEmitter<NgxTableNew>();

  @Output() delete: EventEmitter<NgxTableDelete> = new EventEmitter<NgxTableDelete>();

  @Output() edit: EventEmitter<NgxTableEdition> = new EventEmitter<NgxTableEdition>();

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  @Output() tableClick: EventEmitter<NgxTableClick> = new EventEmitter<NgxTableClick>();

  headers: NgxTableHeaders;

  /**
   * Config of the table
   */
  configBK: NgxTableConfig = {
    placeholders: null,
    enumerate: true,
    sort: {
      enable: false
    },
    filter: {
      enable: false,
      debounceTime: 200,
      validations: null,
      lock: null,
      operators: null
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
      lock: null,
      validations: null
    },
    paginator: {
      enable: false,
      elementsPerPage: 10,
      visiblePages: 5
    },
    click: {
      enable: false
    }
  };

  sortObj: NgxTableSort;
  currentPage: number;

  constructor(
  ) { }

  ngOnInit() {
  }

  onSort(sortObj: NgxTableSort) {
    this.sort.emit(sortObj);
  }

  onFilter(filterObj: NgxTableFilter) {
    this.filter.emit(filterObj);
  }

  onCreate(newObj: NgxTableNew) {
    this.create.emit(newObj);
  }

  onDelete(del: NgxTableDelete) {
    this.delete.emit(del);
  }

  onEdit(edition: NgxTableEdition) {
    this.edit.emit(edition);
  }

  onClick(clickObj: NgxTableClick) {
    this.tableClick.emit(clickObj);
  }

  onPage(page: number) {
    this.page.emit(page);
  }

  enableFilter() {
    return this.headers && this.config && this.config.filter.enable;
  }

  enableCreate() {
    return this.headers && this.config && this.config.create.enable;
  }

  enableBody() {
    return this.data && this.data.length > 0;
  }

  enablePaginator() {
    return this.config && this.config.paginator.enable && this.data && this.data.length > 0;
  }

  getElementsPerPage() {
    return this.config.paginator.elementsPerPage;
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
