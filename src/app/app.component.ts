import { Component } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableOrder, NgxTableConfig, NgxTableFilter } from './ngx-table/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-table';

  data: MockObj[] = mock;
  // backup data
  dataBK: MockObj[] = this.data.map(row => row);

  orderObj: NgxTableOrder;
  filterObj: NgxTableFilter;

  config: NgxTableConfig = {
    order: {
      enable: true
    },
    filter: {
      enable: true
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
    const dataTmp = this.filter(this.dataBK);
    this.data = this.sort(dataTmp);
  }

  filter(data: any[]): any[] {
    return data.filter(data =>
      Object.keys(data).every(key =>
        !this.filterObj[key] || data[key].toLowerCase().indexOf(this.filterObj[key].value.toLowerCase()) !== -1)
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
