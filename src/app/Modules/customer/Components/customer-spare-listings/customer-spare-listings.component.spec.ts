import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpareListingsComponent } from './customer-spare-listings.component';

describe('CustomerSpareListingsComponent', () => {
  let component: CustomerSpareListingsComponent;
  let fixture: ComponentFixture<CustomerSpareListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSpareListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSpareListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
