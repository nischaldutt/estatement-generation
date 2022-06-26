import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCarousalComponent } from './custom-carousal.component';

describe('CustomCarousalComponent', () => {
  let component: CustomCarousalComponent;
  let fixture: ComponentFixture<CustomCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCarousalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
