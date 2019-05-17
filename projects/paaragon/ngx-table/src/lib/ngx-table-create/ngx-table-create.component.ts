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

  buttonEnable: boolean = true;

  @Input('headers')
  headers: NgxTableHeaders;

  _config: NgxTableConfig;
  placeholders: NgxTablePlaceholders;
  @Input('config')
  set config(config: NgxTableConfig) {
    this._config = config;
    this.buildPlaceholders();
  }

  @Output('create')
  createEmitter: EventEmitter<NgxTableNew> = new EventEmitter<NgxTableNew>();

  get config() {
    return this._config;
  }

  constructor() { }

  ngOnInit() {
  }

  validate() {
    this.errors = {};
    this.buttonEnable = true;
    if (!this.config.create.validations) {
      return true;
    }
    for (let attr in this.newObj) {
      const validation = this.config.create.validations[attr];
      if (!validation || !this.newObj[attr]) {
        continue;
      }
      const reg = new RegExp(validation.regex);
      if (!reg.test(this.newObj[attr])) {
        this.errors[attr] = {
          error: true,
          errorMsg: validation.errorMsg
        }
        this.buttonEnable = false;
        return false;
      }
    }
    return true;
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  create() {
    if (!this.validate()) {
      console.log('NOOOOpe');
      return;
    }

    this.createEmitter.emit(this.newObj);
    this.newObj = {};
  }

  private buildPlaceholders() {
    if (this._config.placeholders) {
      this.placeholders = this._config.placeholders.map(p => `New ${p}`);
    } else {
      this.placeholders = this.headers.map(h => `New ${h}`);
    }
  }

}
