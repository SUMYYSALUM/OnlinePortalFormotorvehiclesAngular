import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMotorVehiclesComponent } from './seller-motor-vehicles.component';

describe('SellerMotorVehiclesComponent', () => {
  let component: SellerMotorVehiclesComponent;
  let fixture: ComponentFixture<SellerMotorVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerMotorVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerMotorVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
