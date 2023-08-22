import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpareOrdersComponent } from './customer-spare-orders.component';

describe('CustomerSpareOrdersComponent', () => {
  let component: CustomerSpareOrdersComponent;
  let fixture: ComponentFixture<CustomerSpareOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSpareOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSpareOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
