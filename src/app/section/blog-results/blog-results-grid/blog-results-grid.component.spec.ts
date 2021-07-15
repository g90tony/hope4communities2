import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogResultsGridComponent } from './blog-results-grid.component';

describe('BlogResultsGridComponent', () => {
  let component: BlogResultsGridComponent;
  let fixture: ComponentFixture<BlogResultsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogResultsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogResultsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
