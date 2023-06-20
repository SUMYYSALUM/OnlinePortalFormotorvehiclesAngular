import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApprovedOrdersComponent } from './customer-approved-orders.component';

describe('CustomerApprovedOrdersComponent', () => {
  let component: CustomerApprovedOrdersComponent;
  let fixture: ComponentFixture<CustomerApprovedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerApprovedOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerApprovedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
