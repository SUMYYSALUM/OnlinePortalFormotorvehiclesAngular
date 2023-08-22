import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMotorOrdersComponent } from './customer-motor-orders.component';

describe('CustomerMotorOrdersComponent', () => {
  let component: CustomerMotorOrdersComponent;
  let fixture: ComponentFixture<CustomerMotorOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMotorOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMotorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
