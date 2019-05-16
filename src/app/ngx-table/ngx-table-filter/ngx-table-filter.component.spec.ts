import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableFilterComponent } from './ngx-table-filter.component';

describe('NgxTableFilterComponent', () => {
  let component: NgxTableFilterComponent;
  let fixture: ComponentFixture<NgxTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
