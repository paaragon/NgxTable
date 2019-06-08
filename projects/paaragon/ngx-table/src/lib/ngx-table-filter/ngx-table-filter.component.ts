import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  NgxTableHeaders, NgxTableFilter, NgxTableConfig,
  NgxTablePlaceholders, NgxTableOperator, NgxTableAutocomplete
} from '../ngx-table.types';
import FilterUtils from './filter.utils';

@Component({
  selector: '[ngx-table-filter]',
  templateUrl: './ngx-table-filter.component.html',
  styleUrls: ['./ngx-table-filter.component.scss']
})
export class NgxTableFilterComponent {

  /**
   * Filter debounce subscription
   */
  sub = null;

  filters: NgxTableFilter = {};
  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};

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
      FilterUtils.initFilters(this.filters, this.headers, this.config);
    }
  }

  get headers(): NgxTableHeaders {
    return this.headersBK;
  }

  @Input() humanHeaders: NgxTableHeaders;

  @Input() autocomplete: NgxTableAutocomplete;

  @Output() filter: EventEmitter<NgxTableFilter> = new EventEmitter<NgxTableFilter>();
  debouncer: Subject<NgxTableFilter> = new Subject<NgxTableFilter>();

  dropdowns = {};
  blockedDropdowns = {};

  constructor() {
  }

  onFilter() {
    const f: NgxTableFilter = {};
    for (const attr in this.filters) {
      if (this.filters[attr].value) {
        f[attr] = this.filters[attr];
      }
    }
    this.errors = FilterUtils.validateFilters(f, this.config.filter.validations);
    if (Object.keys(this.errors).length > 0) {
      return;
    }
    this.debouncer.next(f);
  }

  onKeyUp() {
    this.blockedDropdowns = {};
    this.onFilter();
  }

  onAutocomplete(header, value) {
    this.filters[header].value = value;
    this.blockedDropdowns[header] = true;
    this.onFilter();
    this.removeAutocomplete(header);
  }

  removeAutocomplete(header) {
    this.autocomplete[header] = null;
  }

  showDropdown(header: string) {
    return this.autocomplete[header] && this.autocomplete[header].length > 0 && !this.blockedDropdowns[header];
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

  private subscribeDebounce() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = this.debouncer
      .pipe(debounceTime(this.config.filter.debounceTime))
      .subscribe((val) => this.filter.emit(val));
  }
}
