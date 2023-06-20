import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMotorsListingsComponent } from './customer-motors-listings.component';

describe('CustomerMotorsListingsComponent', () => {
  let component: CustomerMotorsListingsComponent;
  let fixture: ComponentFixture<CustomerMotorsListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMotorsListingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMotorsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
