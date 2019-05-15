import { Component } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxOrder } from './ngx-table/types';

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

  onOrder(order: NgxOrder) {
    // restore data
    if (!order) {
      this.data = this.dataBK.map(row => row);
      return;
    }
    // sort data
    this.data.sort((row1, row2) => {
      if (row1[order.field] < row2[order.field]) {
        return order.direction * -1;
      }
      if (row1[order.field] > row2[order.field]) {
        return order.direction;
      }

      return 0;
    });
  }
}
