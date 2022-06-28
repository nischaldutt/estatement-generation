import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StatementService } from 'src/app/services/statement/statement.service';
import { Transaction } from 'src/app/shared/interfaces/Transaction';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.css'],
})
export class LatestTransactionsComponent implements OnInit {
  myTxns!: Observable<Transaction[]>;

  constructor(private statementService: StatementService) {}

  ngOnInit(): void {
    // console.log('here');
    this.myTxns = this.statementService.fetchTransactions();

    // .subscribe({
    //   next: (data) => (this.myTxns = data),
    //   error: (error) => console.log({ error }),
    // });
  }
}
