import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { NgxTableHeaders, NgxTableFilter, NgxTableConfig } from '../types';

@Component({
  selector: '[ngx-table-filter]',
  templateUrl: './ngx-table-filter.component.html',
  styleUrls: ['./ngx-table-filter.component.scss']
})
export class NgxTableFilterComponent implements OnInit {

  sub = null;

  filters: NgxTableFilter = {};

  _config: NgxTableConfig;
  @Input('config')
  set config(config: NgxTableConfig) {
    this._config = config;
    this.subscribeDebounce();
  }

  get config() {
    return this._config;
  }

  _headers: NgxTableHeaders;
  @Input('headers')
  set headers(headers: NgxTableHeaders) {
    this._headers = headers;
    this.initFilters();
  }

  get headers() {
    return this._headers;
  }

  @Output('filter')
  onFilterEmitter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();
  debouncer: Subject<NgxTableFilter> = new Subject<NgxTableFilter>();

  constructor() {
  }

  ngOnInit() {
  }

  onFilter() {
    const f: NgxTableFilter = {};
    for (let attr in this.filters) {
      if (this.filters[attr].value) {
        f[attr] = this.filters[attr];
      }
    }
    this.debouncer.next(f);
  }

  private initFilters() {
    for (let i = 0; i < this._headers.length; i++) {
      this.filters[this._headers[i]] = {
        operator: null,
        value: null
      }
    }
  }

  private subscribeDebounce() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = this.debouncer
      .pipe(debounceTime(this._config.filter.debounceTime))
      .subscribe((val) => this.onFilterEmitter.emit(val));
  }

}
