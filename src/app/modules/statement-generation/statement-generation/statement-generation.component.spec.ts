import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementGenerationComponent } from './statement-generation.component';

describe('StatementGenerationComponent', () => {
  let component: StatementGenerationComponent;
  let fixture: ComponentFixture<StatementGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
