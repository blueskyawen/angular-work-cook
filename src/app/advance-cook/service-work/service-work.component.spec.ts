import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkComponent } from './service-work.component';

describe('ServiceWorkComponent', () => {
  let component: ServiceWorkComponent;
  let fixture: ComponentFixture<ServiceWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
