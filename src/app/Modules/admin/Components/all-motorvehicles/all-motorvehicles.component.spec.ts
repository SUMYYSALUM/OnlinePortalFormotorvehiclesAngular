import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMotorvehiclesComponent } from './all-motorvehicles.component';

describe('AllMotorvehiclesComponent', () => {
  let component: AllMotorvehiclesComponent;
  let fixture: ComponentFixture<AllMotorvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMotorvehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMotorvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
