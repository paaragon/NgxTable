import { Component, OnInit, Input } from '@angular/core';
import { NgxTableConfig, NgxTablePlaceholders, NgxTableHeaders } from '../types';

@Component({
  selector: '[ngx-table-create]',
  templateUrl: './ngx-table-create.component.html',
  styleUrls: ['./ngx-table-create.component.scss']
})
export class NgxTableCreateComponent implements OnInit {

  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};

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

  private buildPlaceholders() {
    if (this._config.placeholders) {
      this.placeholders = this._config.placeholders.map(p => `New ${p}`);
    } else {
      this.placeholders = this.headers.map(h => `New ${h}`);
    }
  }

}
