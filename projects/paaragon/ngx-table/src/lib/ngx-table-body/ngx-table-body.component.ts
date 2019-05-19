import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig } from '../ngx-table.types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[ngx-table-body]',
  templateUrl: './ngx-table-body.component.html',
  styleUrls: ['./ngx-table-body.component.scss']
})
export class NgxTableBodyComponent implements OnInit {

  faTrash = faTrash;

  @Input() config: NgxTableConfig;

  @Input() data: any[];

  @Input() headers: NgxTableHeaders;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  showLastColumn() {
    return this.config.create.enable || this.config.filter.enable;
  }

  onDelete(index: number) {
    this.delete.emit(index);
  }
}
