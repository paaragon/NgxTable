import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig, NgxTableClick, NgxTableEdition } from '../ngx-table.types';
import RowUtils from './row.utils';

@Component({
  selector: '[ngx-table-row]',
  templateUrl: './ngx-table-row.component.html',
  styleUrls: ['./ngx-table-row.component.scss']
})
export class NgxTableRowComponent implements OnInit {

  errors: { [key: string]: { error: boolean, errorMsg: string } } = {};
  buttonEnable = true;

  editions: { [key: string]: boolean };

  rowCopy: any;
  rowBK: any;
  @Input() set row(row: any) {
    this.rowCopy = row;
    this.rowBK = Object.assign({}, row);
    this.initEditions();
  }

  get row(): any {
    return this.rowCopy;
  }

  @Input() config: NgxTableConfig;

  @Input() index: number;

  @Input() headers: NgxTableHeaders;

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  @Output() tableClick: EventEmitter<NgxTableClick> = new EventEmitter<NgxTableClick>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.row);
  }

  onEdit() {
    if (this.validate()) {
      this.edit.emit(this.row);
    }
  }

  onClick(key: string) {
    if (this.isCellEditable(key) && !this.isLockedColumn(key)) {
      this.editions[key] = true;
    } else {
      this.tableClick.emit({
        key,
        value: this.row[key],
        row: this.row
      });
    }
  }

  isCellEditable(key: string) {
    return this.config && this.config.edit.enable && !this.isLockedColumn(key);
  }

  isPointable(key: string) {
    return this.isCellEditable(key) || this.config && this.config.click && this.config.click.enable;
  }

  showInput(key: string) {
    return this.config && this.config.edit && this.config.edit.enable && this.editions && this.editions[key] === true;
  }

  isLockedColumn(key: string) {
    return this.config && this.config.edit.lock && this.config.edit.lock.indexOf(key) !== -1;
  }

  isRowEditting() {
    return this.config.edit.enable && this.editions && Object.keys(this.editions).some(key => this.editions[key]);
  }

  isLongContent(value: any) {
    return value.toString().length > this.config.edit.longContent;
  }

  initEditions() {
    if (this.editions) {
      return;
    }
    this.editions = {};
    for (const key in this.row) {
      if (this.editions[key]) {
        this.editions[key] = false;
      }
    }
  }

  cancelEdition(key: string) {
    this.editions[key] = false;
    this.row[key] = this.rowBK[key];
    this.errors = {};
  }

  showLastColumn() {
    return this.config && (this.config.create && this.config.create.enable || this.config.filter && this.config.filter.enable || this.config.delete && this.config.delete.enable);
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  validate() {
    this.errors = {};
    this.buttonEnable = true;
    if (!this.config.create.validations) {
      return true;
    }
    for (const attr in this.config.create.validations) {
      if (!this.config.create.validations[attr]) {
        continue;
      }
      const validation = this.config.create.validations[attr];
      const value = this.row[attr];
      const error = RowUtils.validateOneAttr(validation, attr, value);
      if (error) {
        this.errors[attr] = error;
      }
    }
    return true;
  }
}
