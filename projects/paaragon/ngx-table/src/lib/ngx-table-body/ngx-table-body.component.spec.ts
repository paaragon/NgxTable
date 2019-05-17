import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableBodyComponent } from './ngx-table-body.component';

describe('NgxTableBodyComponent', () => {
  let component: NgxTableBodyComponent;
  let fixture: ComponentFixture<NgxTableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
