import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogResultsHeaderComponent } from './blog-results-header.component';

describe('BlogResultsHeaderComponent', () => {
  let component: BlogResultsHeaderComponent;
  let fixture: ComponentFixture<BlogResultsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogResultsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogResultsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
