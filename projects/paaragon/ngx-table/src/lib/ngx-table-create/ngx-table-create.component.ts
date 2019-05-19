import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableConfig, NgxTablePlaceholders, NgxTableHeaders, NgxTableNew } from '../ngx-table.types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[ngx-table-create]',
  templateUrl: './ngx-table-create.component.html',
  styleUrls: ['./ngx-table-create.component.scss']
})
export class NgxTableCreateComponent implements OnInit {

  faPlus = faPlus;

  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};
  newObj: NgxTableNew = {};

  buttonEnable = true;

  headersCopy: NgxTableHeaders;
  @Input() set headers(headers: NgxTableHeaders) {
    this.headersCopy = headers;
    this.buildPlaceholders();
  }

  get headers() {
    return this.headersCopy;
  }

  placeholders: NgxTablePlaceholders;
  @Input() set humanHeaders(headers: NgxTableHeaders) {
    this.placeholders = headers.map(p => `New ${p}`);
  }

  get humanHeaders() {
    return this.placeholders;
  }

  configBK: NgxTableConfig;
  @Input() set config(config: NgxTableConfig) {
    this.configBK = config;
  }
  get config() {
    return this.configBK;
  }

  @Output()
  create: EventEmitter<NgxTableNew> = new EventEmitter<NgxTableNew>();

  constructor() { }

  ngOnInit() {
  }

  validate() {
    this.errors = {};
    this.buttonEnable = true;
    if (!this.config.create.validations) {
      return true;
    }
    for (const attr in this.newObj) {
      if (!this.newObj[attr]) {
        continue;
      }
      const validation = this.config.create.validations[attr];
      if (!validation) {
        continue;
      }
      const reg = new RegExp(validation.regex);
      if (!reg.test(this.newObj[attr])) {
        this.errors[attr] = {
          error: true,
          errorMsg: validation.errorMsg
        };
        this.buttonEnable = false;
        return false;
      }
    }
    return true;
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  onCreate() {
    if (!this.validate()) {
      return;
    }

    this.create.emit(this.newObj);
    this.newObj = {};
  }

  getPlaceHolder(idx: number) {
    return this.placeholders ? this.placeholders[idx] : null;
  }

  isLockedColumn(header: string) {
    return this.config && this.config.create.lock && this.config.create.lock.indexOf(header) !== -1;
  }

  private buildPlaceholders() {
    if (!this.placeholders && this.headers) {
      this.placeholders = this.headers.map(h => `New ${h}`);
    }
  }
}
