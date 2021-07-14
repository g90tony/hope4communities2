import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIndexPageComponent } from './blog-index-page.component';

describe('BlogIndexPageComponent', () => {
  let component: BlogIndexPageComponent;
  let fixture: ComponentFixture<BlogIndexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogIndexPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
