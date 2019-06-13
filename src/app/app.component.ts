import { Component, OnInit } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableSort, NgxTableFilter, NgxTableHeaders, NgxTableConfig, NgxTableNew, NgxTableEdition, NgxTableDelete, NgxTableAutocomplete, NgxTableClick } from 'projects/paaragon/ngx-table/src/projects';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngx-table';

  showAlert = false;
  alertMsg1 = '';
  alertMsg2 = '';
  alertTimeout = null;

  data: MockObj[];

  elementsPerPage = 5;
  currentPage = 0;
  totalelements = 0;

  sortObj: NgxTableSort;
  filterObj: NgxTableFilter;
  headers: NgxTableHeaders = ['Id', 'Name', 'Last Name', 'Birth Date', 'Company', 'Salary'];
  placeholders: NgxTableHeaders = ['Id', 'Name', 'Last Name', 'Birth Date (dd/mm/yyyy)', 'Company', 'Salary'];

  autocomplete: NgxTableAutocomplete = {};

  config: NgxTableConfig = {
    enumerate: true,
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
        },
        birthdate: {
          regex: '[0-9]{4}-[0-9]{2}-[0-9]{2}',
          errorMsg: 'Birth date must be yyyy-mm-dd'
        }
      },
      lock: ['id']
    },
    edit: {
      enable: true,
      longContent: 30,
      lock: ['id'],
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
    },
    click: {
      enable: true,
    }
  };

  constructor(
    private service: AppService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  onSort(sort: NgxTableSort) {
    this.sortObj = sort;
    this.refresh();
  }

  onFilter(filter: NgxTableFilter) {
    this.filterObj = filter;
    this.refresh();
    this.refreshAutocomplete();
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

  onClick(clickObj: NgxTableClick) {

    if (this.alertTimeout) {
      clearTimeout(this.alertTimeout);
    }

    const rowStr = JSON.stringify(clickObj.row);
    this.alertMsg1 = `${clickObj.key}: ${clickObj.value}`;
    this.alertMsg2 = `${rowStr}`;
    this.showAlert = true;
    this.alertTimeout = setTimeout(() => this.showAlert = false, 2000);
  }

  onPage(page: number) {
    this.currentPage = page;
    this.refresh();
  }

  refresh() {
    const result = this.service.get(this.sortObj, this.filterObj, this.currentPage, this.elementsPerPage);
    this.data = result.data;
    this.totalelements = result.totalElements;
  }

  refreshAutocomplete() {
    this.autocomplete = {};
    const filterKeys = Object.keys(this.filterObj);

    for (const key of filterKeys) {
      this.autocomplete[key] = this.data.map(d => d[key]);
    }
  }
}