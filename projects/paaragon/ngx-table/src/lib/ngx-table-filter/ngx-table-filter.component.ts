import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgxTableHeaders, NgxTableFilter, NgxTableConfig, NgxTablePlaceholders, NgxTableOperator } from '../ngx-table.types';

@Component({
  selector: '[ngx-table-filter]',
  templateUrl: './ngx-table-filter.component.html',
  styleUrls: ['./ngx-table-filter.component.scss']
})
export class NgxTableFilterComponent implements OnInit {

  /**
   * Filter debounce subscription
   */
  sub = null;

  filters: NgxTableFilter = {};
  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};
  placeholders: NgxTablePlaceholders;

  private configCopy: NgxTableConfig;
  @Input() set config(config: NgxTableConfig) {
    this.configCopy = config;
    this.subscribeDebounce();
  }

  get config() {
    return this.configCopy;
  }

  private headersBK;
  @Input() set headers(headers: NgxTableHeaders) {
    this.headersBK = headers;
    if (this.headersBK) {
      this.initFilters();
      this.buildPlaceholders();
    }
  }

  get headers(): NgxTableHeaders {
    return this.headersBK;
  }

  @Input() set humanHeaders(headers: NgxTableHeaders) {
    this.placeholders = headers;
  }

  get humanHeaders() {
    return this.placeholders;
  }

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();
  debouncer: Subject<NgxTableFilter> = new Subject<NgxTableFilter>();

  dropdowns = {};

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

  hasOperator(key: string) {
    return this.config &&
      this.config.filter.operators &&
      !this.isLocked(key) &&
      this.filters &&
      this.filters[key] &&
      this.filters[key].operator;
  }

  isLocked(header: string) {
    return this.config && this.config.filter.lock && this.config.filter.lock.indexOf(header) !== -1;
  }

  cleanFilters() {
    for (const attr in this.filters) {
      if (this.filters[attr]) {
        this.filters[attr].value = null;
      }
    }
    this.onFilter();
  }

  getPlaceHolder(idx: number) {
    return this.placeholders ? this.placeholders[idx] : null;
  }

  setOperator(header: string, operator: NgxTableOperator) {
    this.filters[header].operator = operator;
    this.closeDropdown(header);
    this.onFilter();
  }

  openDropdown(header: string) {
    this.dropdowns[header] = true;
  }

  closeDropdown(header: string) {
    this.dropdowns[header] = false;
  }

  isDropdownOpen(header: string) {
    return this.dropdowns[header];
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
    for (const header of this.headers) {
      if (this.filters[header]) {
        continue;
      }
      let operator = null;
      if (this.config && this.config.filter.operators && this.config.filter.operators.length > 0) {
        operator = this.config.filter.operators[0];
      }
      this.filters[header] = {
        operator,
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
      .subscribe((val) => this.filter.emit(val));
  }

  private buildPlaceholders() {
    if (!this.placeholders && this.headers) {
      this.placeholders = this.headers;
    }
  }
}
