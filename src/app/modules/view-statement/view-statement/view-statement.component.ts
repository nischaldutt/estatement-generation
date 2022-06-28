import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatementService } from 'src/app/services/statement/statement.service';
import { Transaction } from 'src/app/shared/interfaces/Transaction';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css'],
})
export class ViewStatementComponent implements OnInit {
  fetchedTxns!: Observable<Transaction[]>;

  constructor(private service: StatementService) {}

  ngOnInit(): void {
    this.fetchedTxns = this.service.fetchTransactions();
  }
}
