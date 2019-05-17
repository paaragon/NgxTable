import { Component, OnInit, Input } from '@angular/core';
import { NgxTableConfig, NgxTablePlaceholders, NgxTableHeaders, NgxTableNew } from '../types';

@Component({
  selector: '[ngx-table-create]',
  templateUrl: './ngx-table-create.component.html',
  styleUrls: ['./ngx-table-create.component.scss']
})
export class NgxTableCreateComponent implements OnInit {

  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};
  newObj: NgxTableNew = {};

  @Input('headers')
  headers: NgxTableHeaders;

  _config: NgxTableConfig;
  placeholders: NgxTablePlaceholders;
  @Input('config')
  set config(config: NgxTableConfig) {
    this._config = config;
    this.buildPlaceholders();
  }

  get config() {
    return this._config;
  }

  constructor() { }

  ngOnInit() {
  }

  validate() {
    return true;
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  create() {

  }

  private buildPlaceholders() {
    if (this._config.placeholders) {
      this.placeholders = this._config.placeholders.map(p => `New ${p}`);
    } else {
      this.placeholders = this.headers.map(h => `New ${h}`);
    }
  }

}
