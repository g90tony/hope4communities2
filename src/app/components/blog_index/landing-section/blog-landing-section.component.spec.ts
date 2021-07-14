import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLandingSectionComponent } from './blog-landing-section.component';

describe('BlogLandingSectionComponent', () => {
  let component: BlogLandingSectionComponent;
  let fixture: ComponentFixture<BlogLandingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogLandingSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
