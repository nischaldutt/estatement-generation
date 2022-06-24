import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementDisplayComponent } from './statement-display.component';

describe('StatementDisplayComponent', () => {
  let component: StatementDisplayComponent;
  let fixture: ComponentFixture<StatementDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
