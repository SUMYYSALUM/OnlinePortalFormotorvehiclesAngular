import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAprovedOrderComponent } from './seller-aproved-order.component';

describe('SellerAprovedOrderComponent', () => {
  let component: SellerAprovedOrderComponent;
  let fixture: ComponentFixture<SellerAprovedOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAprovedOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAprovedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
