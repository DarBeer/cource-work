import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCallsComponent } from './admin-calls.component';

describe('AdminCallsComponent', () => {
  let component: AdminCallsComponent;
  let fixture: ComponentFixture<AdminCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
