import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSparepartComponent } from './seller-sparepart.component';

describe('SellerSparepartComponent', () => {
  let component: SellerSparepartComponent;
  let fixture: ComponentFixture<SellerSparepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSparepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSparepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
