import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPendingOrderComponent } from './seller-pending-order.component';

describe('SellerPendingOrderComponent', () => {
  let component: SellerPendingOrderComponent;
  let fixture: ComponentFixture<SellerPendingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerPendingOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerPendingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
