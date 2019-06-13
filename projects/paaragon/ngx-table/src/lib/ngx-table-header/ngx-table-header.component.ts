import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableSort, NgxTableConfig } from '../ngx-table.types';
import NgxTableUtils from '../utils/ngx-table.utils';

@Component({
  selector: '[ngx-table-header]',
  templateUrl: './ngx-table-header.component.html',
  styleUrls: ['./ngx-table-header.component.scss']
})
export class NgxTableHeaderComponent implements OnInit {

  sortObj: NgxTableSort;

  @Input() headers: NgxTableHeaders = [];

  @Input() humanHeaders: NgxTableHeaders;

  @Input() config: NgxTableConfig;

  @Output() sort: EventEmitter<NgxTableSort> = new EventEmitter<NgxTableSort>();

  private showLastColumnAux = NgxTableUtils.showLastColumn;
  private showEnumerateColumnAux = NgxTableUtils.showEnumerateColumn;

  constructor() { }

  ngOnInit() {
  }

  onSort(header: string) {
    if (!header || !this.config.sort.enable) {
      return;
    }
    if (this.sortObj && this.sortObj.field === header && this.sortObj.direction === 1) {
      this.sortObj = {
        field: header,
        direction: -1
      };
    } else if (this.sortObj && this.sortObj.field === header && this.sortObj.direction === -1) {
      this.sortObj = null;
    } else {
      this.sortObj = {
        field: header,
        direction: 1
      };
    }

    this.sort.emit(this.sortObj);
  }

  isAsc(header: string) {
    return this.sortObj && this.sortObj.field === header && this.sortObj.direction === 1;
  }

  isDesc(header: string) {
    return this.sortObj && this.sortObj.field === header && this.sortObj.direction === -1;
  }

  isSortable() {
    return this.config && this.config.sort && !this.config.sort.enable;
  }

  showLastColumn() {
    this.showLastColumnAux(this.config);
  }

  showEnumerateColumn() {
    return this.showEnumerateColumnAux(this.config);
  }
}
