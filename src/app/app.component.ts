import { Component, OnInit } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableOrder, NgxTableFilter, NgxTableHeaders, NgxTableConfig, NgxTableNew, NgxTableEdition, NgxTableDelete } from 'projects/paaragon/ngx-table/src/projects';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngx-table';

  data: MockObj[];

  elementsPerPage = 5;
  currentPage = 0;
  totalelements = 0;

  orderObj: NgxTableOrder;
  filterObj: NgxTableFilter;
  headers: NgxTableHeaders = ['Id', 'Name', 'Last Name', 'Birth Date', 'Company', 'Salary'];
  placeholders: NgxTableHeaders = ['Id', 'Name', 'Last Name', 'Birth Date (dd/mm/yyyy)', 'Company', 'Salary'];

  config: NgxTableConfig = {
    sort: {
      enable: true
    },
    filter: {
      enable: true,
      validations: {
        salary: {
          regex: '^\\d+$',
          errorMsg: 'Salary must be a number'
        }
      },
      lock: ['name'],
      operators: [
        { name: 'like', symbol: '*' },
        { name: 'eq', symbol: '=' }
      ]
    },
    create: {
      enable: true,
      validations: {
        salary: {
          regex: '^\\d+$',
          errorMsg: 'Salary must be a number',
          optional: false
        }
      },
      lock: ['id']
    },
    edit: {
      enable: true,
      longContent: 30,
      lock: ['company'],
      validations: {
        salary: {
          regex: '^\\d+$',
          errorMsg: 'Salary must be a number',
          optional: false
        }
      }
    },
    paginator: {
      enable: true,
      elementsPerPage: this.elementsPerPage
    }
  };

  constructor(
    private service: AppService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  onSort(order: NgxTableOrder) {
    this.orderObj = order;
    this.refresh();
  }

  onFilter(filter: NgxTableFilter) {
    this.filterObj = filter;
    this.refresh();
  }

  onCreate(newObj: NgxTableNew) {
    this.service.add(newObj);
    this.refresh();
  }

  onDelete(delObj: NgxTableDelete) {
    const id = delObj.row.id;
    this.service.delete(id);
    this.refresh();
  }

  onEdit(edition: NgxTableEdition) {
    const id = edition.row.id;
    this.service.edit(id, edition.row);
    this.refresh();
  }

  onPage(page: number) {
    this.currentPage = page;
    this.refresh();
  }

  refresh() {
    const result = this.service.get(this.orderObj, this.filterObj, this.currentPage, this.elementsPerPage);
    this.data = result.data;
    this.totalelements = result.totalElements;
  }
}