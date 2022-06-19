import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsCardComponent } from './user-details-card.component';

describe('UserDetailsCardComponent', () => {
  let component: UserDetailsCardComponent;
  let fixture: ComponentFixture<UserDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
