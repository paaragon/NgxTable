import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTableComponent } from './ngx-table.component';
import { NgxTableHeaderComponent } from './ngx-table-header/ngx-table-header.component';
import { NgxTableBodyComponent } from './ngx-table-body/ngx-table-body.component';

@NgModule({
  declarations: [NgxTableComponent, NgxTableHeaderComponent, NgxTableBodyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgxTableComponent
  ]
})
export class NgxTableModule { }
