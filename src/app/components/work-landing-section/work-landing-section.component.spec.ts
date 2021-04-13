import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLandingSectionComponent } from './work-landing-section.component';

describe('WorkLandingSectionComponent', () => {
  let component: WorkLandingSectionComponent;
  let fixture: ComponentFixture<WorkLandingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkLandingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
