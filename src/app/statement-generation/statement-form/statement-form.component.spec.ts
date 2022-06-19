import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementFormComponent } from './statement-form.component';

describe('StatementFormComponent', () => {
  let component: StatementFormComponent;
  let fixture: ComponentFixture<StatementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
