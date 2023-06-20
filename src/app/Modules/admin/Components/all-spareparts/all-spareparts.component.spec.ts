import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSparepartsComponent } from './all-spareparts.component';

describe('AllSparepartsComponent', () => {
  let component: AllSparepartsComponent;
  let fixture: ComponentFixture<AllSparepartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSparepartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSparepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
