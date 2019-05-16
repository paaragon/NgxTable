import { Component, OnInit, Input } from '@angular/core';
import { NgxTableHeaders } from '../types';

@Component({
  selector: '[ngx-table-filter]',
  templateUrl: './ngx-table-filter.component.html',
  styleUrls: ['./ngx-table-filter.component.scss']
})
export class NgxTableFilterComponent implements OnInit {

  @Input('headers')
  headers: NgxTableHeaders;

  constructor() { }

  ngOnInit() {
  }

}
