import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTablePaginatorComponent } from './ngx-table-paginator.component';

describe('NgxTablePaginatorComponent', () => {
  let component: NgxTablePaginatorComponent;
  let fixture: ComponentFixture<NgxTablePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTablePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
