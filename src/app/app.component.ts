import { Component } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableOrder, NgxTableConfig, NgxTableFilter, NgxTableHeaders } from '@paaragon/ngx-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-table';

  data: MockObj[] = mock;

  dataBK: MockObj[] = Object.assign([], this.data);

  orderObj: NgxTableOrder;
  filterObj: NgxTableFilter;
  headers: NgxTableHeaders = ['Name', 'Last Name', 'Birth Date', 'Company', 'Salary'];
  placeholders: NgxTableHeaders = ['Name', 'Last Name', 'Birth Date (dd/mm/yyyy)', 'Company', 'Salary'];

  config: NgxTableConfig = {
    placeholders: this.placeholders,
    order: {
      enable: true
    },
    filter: {
      enable: true,
      validations: {
        salary: {
          regex: '^\\d+$',
          errorMsg: 'Salary must be a number'
        }
      }
    },
    create: {
      enable: true,
      validations: {
        salary: {
          regex: '^\\d+$',
          errorMsg: 'Salary must be a number'
        }
      }
    }
  };

  onOrder(order: NgxTableOrder) {
    this.orderObj = order;
    this.refresh();
  }

  onFilter(filter: NgxTableFilter) {
    this.filterObj = filter;
    this.refresh();
  }

  refresh() {
    const dataTmp = this.filter(Object.assign([], this.dataBK));
    this.data = this.sort(dataTmp);
  }

  filter(data: any[]): any[] {
    if (!this.filterObj) {
      return data;
    }
    return data.filter(data =>
      Object.keys(data).every(key =>
        !this.filterObj[key] ||
        data[key].toString().toLowerCase()
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
