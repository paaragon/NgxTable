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
    this.edit.emit(this.row);
  }

  isEditionEnabled(key: string) {
    return this.config.edit.enable && this.editions && this.editions[key] === true;
  }

  isRowEditting() {
    return this.config.edit.enable && this.editions && Object.keys(this.editions).some(key => this.editions[key]);
  }

  isLongContent(value: any){
    return value.toString().length > this.config.edit.longContent;
  }

  initEditions() {
    this.editions = {};
    for (const key in this.row) {
      if (this.editions[key]) {
        this.editions[key] = false;
      }
    }
  }

  enableEdition(key: string) {
    this.editions[key] = true;
  }

  cancelEdition(key: string) {
    this.editions[key] = false;
    this.row[key] = this.rowBK[key];
  }

  showLastColumn() {
    return this.config.create.enable || this.config.filter.enable || this.config.delete.enable;
  }
}
