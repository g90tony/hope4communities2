import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRelatedItemComponent } from './blog-related-item.component';

describe('BlogRelatedItemComponent', () => {
  let component: BlogRelatedItemComponent;
  let fixture: ComponentFixture<BlogRelatedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRelatedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRelatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
