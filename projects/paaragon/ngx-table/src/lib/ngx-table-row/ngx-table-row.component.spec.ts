import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableRowComponent } from './ngx-table-row.component';

describe('NgxTableRowComponent', () => {
  let component: NgxTableRowComponent;
  let fixture: ComponentFixture<NgxTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
