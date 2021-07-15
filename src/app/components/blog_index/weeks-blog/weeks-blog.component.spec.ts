import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksBlogComponent } from './weeks-blog.component';

describe('WeeksBlogComponent', () => {
  let component: WeeksBlogComponent;
  let fixture: ComponentFixture<WeeksBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeksBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
