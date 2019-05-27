import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig, NgxTableEdition, NgxTableDelete } from '../ngx-table.types';

@Component({
  selector: '[ngx-table-body]',
  templateUrl: './ngx-table-body.component.html',
  styleUrls: ['./ngx-table-body.component.scss']
})
export class NgxTableBodyComponent implements OnInit {

  showBody = true;

  @Input() config: NgxTableConfig;

  dataBK: any[];
  @Input() set data(data: any[]) {
    this.dataBK = data;
    this.reloadBody();
  }

  get data() {
    return this.dataBK;
  }

  @Input() headers: NgxTableHeaders;

  @Output() delete: EventEmitter<NgxTableDelete> = new EventEmitter<NgxTableDelete>();

  @Output() edit: EventEmitter<NgxTableEdition> = new EventEmitter<NgxTableEdition>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(index: number, row: any) {
    this.delete.emit({ numrow: index, row });
  }

  onEdit(i, row: any) {
    this.edit.emit({ numrow: i, row });
  }

  reloadBody() {
    this.showBody = false;
    setTimeout(() => this.showBody = true);
  }
}
