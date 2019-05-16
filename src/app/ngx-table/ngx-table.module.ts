import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgxTableComponent } from './ngx-table.component';
import { NgxTableHeaderComponent } from './ngx-table-header/ngx-table-header.component';
import { NgxTableBodyComponent } from './ngx-table-body/ngx-table-body.component';
import { NgxTableFilterComponent } from './ngx-table-filter/ngx-table-filter.component';

@NgModule({
  declarations: [NgxTableComponent, NgxTableHeaderComponent, NgxTableBodyComponent, NgxTableFilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxTableComponent
  ]
})
export class NgxTableModule { }
