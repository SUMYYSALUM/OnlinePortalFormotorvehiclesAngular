import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMotorOrdersComponent } from './seller-motor-orders.component';

describe('SellerMotorOrdersComponent', () => {
  let component: SellerMotorOrdersComponent;
  let fixture: ComponentFixture<SellerMotorOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerMotorOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerMotorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
