import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxTableComponent } from './ngx-table.component';
import { NgxTableHeaderComponent } from './ngx-table-header/ngx-table-header.component';
import { NgxTableBodyComponent } from './ngx-table-body/ngx-table-body.component';
import { NgxTableFilterComponent } from './ngx-table-filter/ngx-table-filter.component';
import { NgxTableCreateComponent } from './ngx-table-create/ngx-table-create.component';
import { NgxTableRowComponent } from './ngx-table-row/ngx-table-row.component';
import { NgxTablePaginatorComponent } from './ngx-table-paginator/ngx-table-paginator.component';

@NgModule({
  declarations: [
    NgxTableComponent,
    NgxTableHeaderComponent,
    NgxTableBodyComponent,
    NgxTableFilterComponent,
    NgxTableCreateComponent,
    NgxTableRowComponent,
    NgxTablePaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    NgxTableComponent
  ]
})
export class NgxTableModule { }
