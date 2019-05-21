import { Injectable } from '@angular/core';
import { NgxTableFilter, NgxTableOrder, NgxTableNew, NgxTableEdition } from './ngx-table.types';
import { first } from '../../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxTableService {

  constructor() { }

  sort(data: any[], orderObj: NgxTableOrder) {
    if (!orderObj) {
      return;
    }
    data.sort((row1, row2) => {
      if (row1[orderObj.field] < row2[orderObj.field]) {
        return orderObj.direction * -1;
      }
      if (row1[orderObj.field] > row2[orderObj.field]) {
        return orderObj.direction;
      }

      return 0;
    });
  }

  filter(data: any[], filterObj: NgxTableFilter): any[] {
    if (!filterObj) {
      return data;
    }
    console.log('filtering');
    return data.filter(row =>
      Object.keys(row).every(key =>
        !filterObj[key] ||
        row[key].toString().toLowerCase()
          .indexOf(filterObj[key].value.toString().toLowerCase()) !== -1)
    );
  }

  create(data: any[], newObj: NgxTableNew): any[] {
    data.push(newObj);
    return data;
  }

  delete(data: any[], index: number): any[] {
    data.splice(index, 1);
    return data;
  }

  edit(data: any[], edition: NgxTableEdition): any[] {
    data[edition.index] = edition.row;
    return data;
  }

  goToPage(data: any[], page: number, elementsPerPage: number) {
    const firstElement = page * elementsPerPage;
    const lastElement = firstElement + elementsPerPage;
    return data.slice(firstElement, lastElement);
  }
}
