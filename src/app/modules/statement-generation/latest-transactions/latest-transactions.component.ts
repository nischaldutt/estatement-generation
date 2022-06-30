import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatementService } from 'src/app/services/statement/statement.service';
import { TransferService } from 'src/app/services/transfer/transfer.service';
import { Transaction } from 'src/app/shared/interfaces/Transaction';

@Component({
  selector: 'app-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.css'],
})
export class LatestTransactionsComponent implements OnInit {
  myTxns!: Observable<Transaction[]>;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    const { trans } = this.transferService.getData();
    this.myTxns = of(trans);
  }
}
