import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableConfig, NgxTablePlaceholders, NgxTableHeaders, NgxTableNew } from '../ngx-table.types';

@Component({
  selector: '[ngx-table-create]',
  templateUrl: './ngx-table-create.component.html',
  styleUrls: ['./ngx-table-create.component.scss']
})
export class NgxTableCreateComponent implements OnInit {

  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};
  newObj: NgxTableNew = {};
  pristine: NgxTableNew = {};

  buttonEnable = true;

  headersCopy: NgxTableHeaders;
  @Input() set headers(headers: NgxTableHeaders) {
    this.headersCopy = headers;
    this.buildNewObj();
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

  validate(pristine, header?) {
    if (header) {
      this.pristine[header] = true;
    }
    this.errors = {};
    this.buttonEnable = true;
    if (!this.config.create.validations) {
      return true;
    }
    for (const attr in this.config.create.validations) {
      if (pristine && !this.pristine[attr]) {
        continue;
      }
      if (!this.validateIput(attr)) {
        return false;
      }
    }
    return true;
  }

  private validateIput(header) {
    if (!this.config.create.validations[header]) {
      return true;
    }
    console.log('validating input');
    const validation = this.config.create.validations[header];
    const value = this.newObj[header];
    console.log(validation, value);

    if (!this.validateOptional(validation, header, value) ||
      !this.validateRegEx(validation, header)) {
      return false;
    }

    return true;
  }

  private validateOptional(validation, header, value) {
    if (validation.optional === false && !value) {
      this.errors[header] = {
        error: true,
        errorMsg: 'Field cannot be empty'
      };
      this.buttonEnable = false;
      return false;
    }

    return true;
  }

  private validateRegEx(validation, header) {
    const reg = new RegExp(validation.regex);
    if (!reg.test(this.newObj[header])) {
      this.errors[header] = {
        error: true,
        errorMsg: validation.errorMsg
      };
      this.buttonEnable = false;
      return false;
    }

    return true;
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  onCreate() {
    if (!this.validate(false)) {
      return;
    }

    this.create.emit(this.newObj);
    this.newObj = {};
    this.pristine = {};
  }

  getPlaceHolder(idx: number) {
    return this.placeholders ? this.placeholders[idx] : null;
  }

  isLockedColumn(header: string) {
    return this.config && this.config.create.lock && this.config.create.lock.indexOf(header) !== -1;
  }

  private buildNewObj() {
    this.newObj = {};
    for (const header of this.headers) {
      this.newObj[header] = null;
    }
  }

  private buildPlaceholders() {
    if (!this.placeholders && this.headers) {
      this.placeholders = this.headers.map(h => `New ${h}`);
    }
  }
}
