import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSpareOrdersComponent } from './seller-spare-orders.component';

describe('SellerSpareOrdersComponent', () => {
  let component: SellerSpareOrdersComponent;
  let fixture: ComponentFixture<SellerSpareOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSpareOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSpareOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
