import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatementComponent } from './view-statement.component';

describe('ViewStatementComponent', () => {
  let component: ViewStatementComponent;
  let fixture: ComponentFixture<ViewStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
