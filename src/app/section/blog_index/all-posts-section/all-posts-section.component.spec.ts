import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostsBlogComponent } from './all-posts-section.component';

describe('AllPostsBlogComponent', () => {
  let component: AllPostsBlogComponent;
  let fixture: ComponentFixture<AllPostsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPostsBlogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
