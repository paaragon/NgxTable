import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxTableConfig } from '../ngx-table.types';

@Component({
  selector: 'ngx-table-paginator',
  templateUrl: './ngx-table-paginator.component.html',
  styleUrls: ['./ngx-table-paginator.component.scss']
})
export class NgxTablePaginatorComponent implements OnInit {

  @Input() config: NgxTableConfig;

  totalElementsCopy: number;
  @Input() set totalElements(totalElements: number) {
    this.totalElementsCopy = totalElements;
    this.calculateTotalPages();
    this.calculateVisiblePages();
  }

  get totalElements(): number {
    return this.totalElementsCopy;
  }
  elementsPerPageCopy: number;
  @Input() set elementsPerPage(elementsPerPage: number) {
    this.elementsPerPageCopy = elementsPerPage;
    this.calculateTotalPages();
    this.calculateVisiblePages();
  }

  get elementsPerPage(): number {
    return this.elementsPerPageCopy;
  }

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  currentPage = 0;

  visiblePages = [];

  totalPages: number;

  constructor() { }

  ngOnInit() {
  }

  calculateVisiblePages() {
    if (this.config && this.totalPages && this.elementsPerPage && this.totalPages) {
      this.visiblePages = [];
      const visPages = this.config.paginator.visiblePages;
      const halfvisPages = Math.floor(visPages / 2);
      let firstPage = this.currentPage < halfvisPages ? 0 : this.currentPage - halfvisPages;
      let lastPage = firstPage + visPages;
      if (lastPage > this.totalPages - 1) {
        lastPage = this.totalPages - 1;
        firstPage = lastPage - visPages < 0 ? 0 : lastPage - visPages;
      }
      if (firstPage < 0) {
        this.visiblePages = [];
        return;
      }
      for (let i = firstPage; i <= lastPage; i++) {
        this.visiblePages.push(i);
      }
    }
  }

  calculateTotalPages() {
    if (this.config && this.totalElements && this.elementsPerPage) {
      const totalEl = this.totalElements;
      const ePP = this.elementsPerPage;
      this.totalPages = Math.ceil(totalEl / ePP);
    }
  }

  isFirstPage() {
    return this.currentPage === 0;
  }

  isLastPage() {
    return this.currentPage === this.totalPages - 1;
  }

  isCurrentPage(p: number) {
    return this.currentPage === p;
  }

  goToFirstPage() {
    if (this.currentPage > 0) {
      this.currentPage = 0;
      this.goToPage(this.currentPage);
    }
  }

  goToPrevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.goToPage(this.currentPage);
    }
  }

  goToPage(p) {
    this.currentPage = p;
    this.page.emit(this.currentPage);
    this.calculateVisiblePages();
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.goToPage(this.currentPage);
    }
  }

  goToLastPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage = this.totalPages - 1;
      this.goToPage(this.currentPage);
    }
  }
}
