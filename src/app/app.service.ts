import { Injectable } from '@angular/core';
import mock, { MockObj } from './mock/table.mock';
import { NgxTableNew, NgxTableFilter, NgxTableSort } from 'projects/paaragon/ngx-table/src/projects';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dataRepository: MockObj[] = mock;

  constructor() { }

  public get(sort: NgxTableSort, filter: NgxTableFilter, page: number, elementsPerPage: number): { data: MockObj[], totalElements: number } {
    let data: MockObj[] = Object.assign([], this.dataRepository);
    data = this.filter(data, filter);
    data = this.sort(data, sort);
    data = this.goToPage(data, page, elementsPerPage);
    return { data, totalElements: this.dataRepository.length };
  }

  public add(newObj: NgxTableNew) {
    newObj.id = Math.floor(Math.random() * (5000 - 2000)) + 2000;;
    this.dataRepository.push(newObj as MockObj);
  }

  public edit(id: number, row: any) {
    const index = this.dataRepository.findIndex(row => row.id === id);
    this.dataRepository[index] = row;
  }

  public delete(id: number) {
    const index = this.dataRepository.findIndex(row => row.id === id);
    this.dataRepository.splice(index, 1);
  }

  private goToPage(data: any[], page: number, elementsPerPage: number): any[] {
    const firstElement = page * elementsPerPage;
    const lastElement = firstElement + elementsPerPage;
    return data.slice(firstElement, lastElement);
  }

  private sort(data: any[], sortObj: NgxTableSort): any[] {
    if (!sortObj) {
      return data;
    }
    return data.sort((row1, row2) => {
      if (row1[sortObj.field] < row2[sortObj.field]) {
        return sortObj.direction * -1;
      }
      if (row1[sortObj.field] > row2[sortObj.field]) {
        return sortObj.direction;
      }

      return 0;
    });
  }

  private filter(data: any[], filterObj: NgxTableFilter): any[] {
    if (!filterObj) {
      return data;
    }
    return data.filter(row =>
      Object.keys(row).every((key) => {
        const filter = filterObj[key];
        if (!filter) {
          return true;
        }
        if (filter.operator && filter.operator.name === 'eq') {
          return this.filterEquals(filter, row[key]);
        }
        return this.filterContains(filter, row[key]);
      })
    );
  }

  private filterEquals(filter, value) {
    return !filter || value === filter.value;
  }

  private filterContains(filter, value) {
    return !filter ||
      value.toString().toLowerCase()
        .indexOf(filter.value.toString().toLowerCase()) !== -1
  }

}
