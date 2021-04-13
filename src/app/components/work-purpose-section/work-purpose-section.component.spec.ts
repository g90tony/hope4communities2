import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPurposeSectionComponent } from './work-purpose-section.component';

describe('WorkPurposeSectionComponent', () => {
  let component: WorkPurposeSectionComponent;
  let fixture: ComponentFixture<WorkPurposeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPurposeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPurposeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
