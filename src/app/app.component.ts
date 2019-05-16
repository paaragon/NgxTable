import { Component } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableOrder, NgxTableConfig } from './ngx-table/types';

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

  config: NgxTableConfig = {
    order: {
      enable: false
    }
  };

  /**
   * This method handles the order event
   * @param order 
   */
  onOrder(order: NgxTableOrder) {
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
