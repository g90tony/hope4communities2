import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureSectionComponent } from './future-section.component';

describe('FutureSectionComponent', () => {
  let component: FutureSectionComponent;
  let fixture: ComponentFixture<FutureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
