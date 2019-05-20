import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableConfig } from '../ngx-table.types';

@Component({
  selector: 'ngx-table-paginator',
  templateUrl: './ngx-table-paginator.component.html',
  styleUrls: ['./ngx-table-paginator.component.scss']
})
export class NgxTablePaginatorComponent implements OnInit {

  @Input() config: NgxTableConfig;

  totalElementsCopy: number
  @Input() set totalElements(totalElements: number) {
    this.totalElementsCopy = totalElements;
    this.calculateVisiblePages();
  }

  get totalElements(): number {
    return this.totalElementsCopy;
  }
  elementsPerPageCopy: number;
  @Input() set elementsPerPage(elementsPerPage: number) {
    this.elementsPerPageCopy = elementsPerPage;
    this.calculateVisiblePages();
  }

  get elementsPerPage(): number {
    return this.elementsPerPageCopy;
  }

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  currentPage: number = 0;

  visiblePages = [];

  constructor() { }

  ngOnInit() {
  }

  calculateVisiblePages() {
    if (this.config && this.totalElements && this.elementsPerPage) {
      this.visiblePages = [];
      const visPages = this.config.paginator.visiblePages;
      const halfvisPages = Math.floor(visPages / 2);
      const firstPage = this.currentPage < halfvisPages ? 0 : this.currentPage - halfvisPages;
      const lastPage = firstPage + visPages;
      for (let i = firstPage; i < lastPage; i++) {
        this.visiblePages.push(i);
      }
    }
  }

  isFirstPage() {
    return this.currentPage === 0;
  }

  isLastPage() {
    return this.currentPage === this.totalElements;
  }

  isCurrentPage(p: number){
    return this.currentPage === p;
  }

  goToFirstPage() {
    this.currentPage = 0;
    this.page.emit(this.currentPage);
  }

  goToPrevPage() {
    this.currentPage--;
    this.page.emit(this.currentPage);
  }

  goToPage(p) {
    this.currentPage = p;
    this.page.emit(this.currentPage);
  }

  goToNextPage() {
    this.currentPage++;
    this.page.emit(this.currentPage);
  }

  goToLastPage() {
    this.currentPage = this.totalElements;
    this.page.emit(this.currentPage);
  }
}