import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgxTableHeaders, NgxTableFilter, NgxTableConfig, NgxTablePlaceholders } from '../ngx-table.types';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[ngx-table-filter]',
  templateUrl: './ngx-table-filter.component.html',
  styleUrls: ['./ngx-table-filter.component.scss']
})
export class NgxTableFilterComponent implements OnInit {

  faFilter = faFilter;

  sub = null;

  filters: NgxTableFilter = {};
  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};

  configBK: NgxTableConfig;
  placeholders: NgxTablePlaceholders;
  @Input()
  set config(config: NgxTableConfig) {
    this.configBK = config;
    this.buildPlaceholders();
    this.subscribeDebounce();
  }

  get config() {
    return this.configBK;
  }

  private headersBK;

  @Input()
  set headers(headers: NgxTableHeaders) {
    this.headersBK = headers;
    this.initFilters();
  }

  get headers(): NgxTableHeaders {
    return this.headersBK;
  }

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();
  debouncer: Subject<NgxTableFilter> = new Subject<NgxTableFilter>();

  constructor() {
  }

  ngOnInit() {
  }

  onFilter() {
    const f: NgxTableFilter = {};
    for (const attr in this.filters) {
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
    for (const attr in this.filters) {
      if (this.filters[attr]) {
        this.filters[attr].value = null;
      }
    }
    this.onFilter();
  }

  private validateFilters(f: NgxTableFilter): boolean {

    this.errors = {};
    const validations = this.config.filter.validations;

    if (Object.keys(validations).length === 0) {
      return true;
    }

    for (const attr in f) {
      if (!validations[attr]) {
        continue;
      }
      const text = f[attr].value;

      const regex = new RegExp(validations[attr].regex);

      if (!regex.test(text)) {
        this.errors[attr] = {
          error: true,
          errorMsg: validations[attr].errorMsg
        };
        return false;
      }
    }
    return true;
  }

  private initFilters() {
    if (this.filters && Object.keys(this.filters).length > 0) {
      return;
    }
    for (const header of this.headers) {
      this.filters[header] = {
        operator: null,
        value: null
      };
    }
  }

  private subscribeDebounce() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = this.debouncer
      .pipe(debounceTime(this.config.filter.debounceTime))
      .subscribe((val) => {
        console.log(val);
        this.filter.emit(val);
      });
  }

  private buildPlaceholders() {
    if (this.config.placeholders) {
      this.placeholders = this.config.placeholders;
    } else {
      this.placeholders = this.headers;
    }
  }

}
