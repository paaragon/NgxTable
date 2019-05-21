import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig } from '../ngx-table.types';
import { faTrash, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[ngx-table-row]',
  templateUrl: './ngx-table-row.component.html',
  styleUrls: ['./ngx-table-row.component.scss']
})
export class NgxTableRowComponent implements OnInit {

  faTrash = faTrash;
  faTimes = faTimes;
  faSave = faSave;

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

  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

  onEdit() {
    if (this.validate()) {
      this.edit.emit(this.row);
    }
  }

  isCellEditable(key: string) {
    return this.config && this.config.edit.enable && !this.isLockedColumn(key);
  }

  showInput(key: string) {
    return this.config.edit.enable && this.editions && this.editions[key] === true;
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

  enableEdition(key: string) {
    if (!this.isLockedColumn(key)) {
      this.editions[key] = true;
    }
  }

  cancelEdition(key: string) {
    this.editions[key] = false;
    this.row[key] = this.rowBK[key];
    this.errors = {};
  }

  showLastColumn() {
    return this.config.create.enable || this.config.filter.enable || this.config.delete.enable;
  }

  hasValidationError(header: string) {
    return this.errors && this.errors[header] && this.errors[header].error;
  }

  private validate() {
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
      if (validation.optional === false && !value) {
        this.errors[attr] = {
          error: true,
          errorMsg: 'Field cannot be empty'
        };
        this.buttonEnable = false;
        return false;
      }
      const reg = new RegExp(validation.regex);
      if (!reg.test(this.row[attr])) {
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
}
