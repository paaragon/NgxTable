import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableHeaderComponent } from './ngx-table-header.component';

describe('NgxTableHeaderComponent', () => {
  let component: NgxTableHeaderComponent;
  let fixture: ComponentFixture<NgxTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
