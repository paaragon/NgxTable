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
  dataBK: any[];
  @Input() set data(data: any[]) {
    this.dataCopy = data;
    this.dataBK = Object.assign([], data);
    this.initHeaders();
  }

  get data(): any[] {
    return this.dataCopy;
  }

  mergedConfig: NgxTableConfig;
  @Input() set config(conf: NgxTableConfig) {
    this.mergedConfig = DeepMerge.deepmerge(this.configBK, conf);
    this.goToPage(0);
  }

  get config(): NgxTableConfig {
    return this.mergedConfig;
  }

  @Input() totalElements: number;

  @Output() sort: EventEmitter<NgxTableOrder> = new EventEmitter<NgxTableOrder>();

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();

  @Output() create: EventEmitter<NgxTableNew> = new EventEmitter<NgxTableNew>();

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  @Output() edit: EventEmitter<NgxTableEdition> = new EventEmitter<NgxTableEdition>();

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

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
    }
  };

  orderObj: NgxTableOrder;

  constructor(
    private service: NgxTableService
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
    this.delete.emit(index);
  }

  onEdit(edition: NgxTableEdition) {
    this.edit.emit(edition);
  }

  onPage(page: number) {
    if (this.page.observers.length === 0) {
      console.log('nosotros llevamos la paginacion');
      this.goToPage(page);
    }
    this.page.emit(page);
  }

  goToPage(page) {
    if (this.config) {
      this.dataCopy = this.service.goToPage(this.dataBK, page, this.config.paginator.elementsPerPage);
    }
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
