import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowusSectionComponent } from './knowus-section.component';

describe('KnowusSectionComponent', () => {
  let component: KnowusSectionComponent;
  let fixture: ComponentFixture<KnowusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowusSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
