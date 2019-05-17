import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { NgxTableHeaders, NgxTableFilter, NgxTableConfig, NgxTablePlaceholders } from '../ngx-table.types';

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
  placeholders: NgxTablePlaceholders;
  @Input('config')
  set config(config: NgxTableConfig) {
    this._config = config;
    this.buildPlaceholders();
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
      return;
    }
    this.debouncer.next(f);
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  cleanFilters() {
    for (let attr in this.filters) {
      this.filters[attr].value = null;
    }
    this.onFilter();
  }

  private validateFilters(f: NgxTableFilter): boolean {

    this.errors = {};
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
        this.errors[attr] = {
          error: true,
          errorMsg: validations[attr].errorMsg
        }
        return false;
      }
    }
    return true;
  }

  private initFilters() {
    if (this.filters && Object.keys(this.filters).length > 0) {
      return;
    }
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
      .subscribe((val) => {
        console.log(val);
        this.onFilterEmitter.emit(val);
      });
  }

  private buildPlaceholders() {
    if (this._config.placeholders) {
      this.placeholders = this._config.placeholders;
    } else {
      this.placeholders = this.headers;
    }
  }

}
