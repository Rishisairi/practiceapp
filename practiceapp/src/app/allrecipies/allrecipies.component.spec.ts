import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrecipiesComponent } from './allrecipies.component';

describe('AllrecipiesComponent', () => {
  let component: AllrecipiesComponent;
  let fixture: ComponentFixture<AllrecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllrecipiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
