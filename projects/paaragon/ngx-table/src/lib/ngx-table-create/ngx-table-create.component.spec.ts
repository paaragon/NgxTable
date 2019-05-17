import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableCreateComponent } from './ngx-table-create.component';

describe('NgxTableCreateComponent', () => {
  let component: NgxTableCreateComponent;
  let fixture: ComponentFixture<NgxTableCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
