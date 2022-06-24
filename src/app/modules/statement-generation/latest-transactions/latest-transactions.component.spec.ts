import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTransactionsComponent } from './latest-transactions.component';

describe('LatestTransactionsComponent', () => {
  let component: LatestTransactionsComponent;
  let fixture: ComponentFixture<LatestTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
