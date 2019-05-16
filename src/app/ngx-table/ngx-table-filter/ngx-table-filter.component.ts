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
  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};

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
    if (!this.validateFilters(f)) {
      console.log('not valid');
      return;
    }
    this.debouncer.next(f);
  }

  private validateFilters(f: NgxTableFilter): boolean {

    const validations = this._config.filter.validations;
    if (Object.keys(validations).length === 0) {
      return true;
    }

    for (let attr in f) {
      if (!validations[attr]) {
        continue;
      }
      const text = f[attr].value;

      const regex = new RegExp(validations[attr].regex);

      if (!regex.test(text)) {
        return false;
      }
    }
    return true;
  }

  private initFilters() {
    if (this.filters && Object.keys(this.filters).length > 0) {
      return;
    }
    console.log('init filters');
    for (let i = 0; i < this._headers.length; i++) {
      this.filters[this._headers[i]] = {
        operator: null,
        value: null
      }
    }
  }

  private subscribeDebounce() {
    console.log('subscribing');
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = this.debouncer
      .pipe(debounceTime(this._config.filter.debounceTime))
      .subscribe((val) => {
        console.log(val);
        this.onFilterEmitter.emit(val);
      });
  }

}
