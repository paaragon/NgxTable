import { Component, OnInit } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableOrder, NgxTableFilter, NgxTableHeaders, NgxTableConfig, NgxTableNew, NgxTableEdition } from 'projects/paaragon/ngx-table/src/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngx-table';

  data: MockObj[] = mock;

  dataBK: MockObj[] = Object.assign([], this.data);

  elementsPerPage = 20;

  ngOnInit(): void {
    this.data = this.dataBK.splice(0, this.elementsPerPage);
  }

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
          errorMsg: 'Salary must be a number'
        }
      },
      lock: ['id']
    },
    edit: {
      enable: true,
      longContent: 30,
      lock: ['salary']
    },
    paginator: {
      enable: true
    }
  };

  onSort(order: NgxTableOrder) {
    this.orderObj = order;
    this.refresh();
  }

  onFilter(filter: NgxTableFilter) {
    console.log(filter);
    this.filterObj = filter;
    this.refresh();
  }

  onCreate(newObj: NgxTableNew) {
    this.dataBK.push(newObj as MockObj);
    this.refresh();
  }

  onDelete(index: number) {
    const row = this.data[index];
    const rowBKIndex = this.dataBK.findIndex(r =>
      Object.keys(r).every(key => r[key] === row[key])
    );
    this.dataBK.splice(rowBKIndex, 1);
    this.refresh();
  }

  onEdit(edition: NgxTableEdition) {
    this.dataBK[edition.index] = edition.row;
    this.refresh();
  }

  goToPage(page: number) {
    console.log('gotopage', page);
  }

  refresh() {
    const dataTmp = this.filter(Object.assign([], this.dataBK));
    this.data = this.sort(dataTmp);
  }

  filter(data: any[]): any[] {
    if (!this.filterObj) {
      return data;
    }
    return data.filter(row =>
      Object.keys(row).every(key =>
        !this.filterObj[key] ||
        row[key].toString().toLowerCase()
          .indexOf(this.filterObj[key].value.toString().toLowerCase()) !== -1)
    );
  }

  sort(data: any[]): any[] {
    if (!this.orderObj) {
      return data;
    }
    return data.sort((row1, row2) => {
      if (row1[this.orderObj.field] < row2[this.orderObj.field]) {
        return this.orderObj.direction * -1;
      }
      if (row1[this.orderObj.field] > row2[this.orderObj.field]) {
        return this.orderObj.direction;
      }

      return 0;
    });
  }
}
