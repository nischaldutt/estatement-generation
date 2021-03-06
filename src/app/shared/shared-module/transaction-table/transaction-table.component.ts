import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Transaction } from '../../interfaces/Transaction';
import { TransactionService } from '../../../services/transaction/transaction.service';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../directives/sortable.directive';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
  providers: [TransactionService, DecimalPipe],
})
export class TransactionTableComponent {
  transactions$: Observable<Transaction[]>;
  total$: Observable<number>;

  @Input() txns!: Observable<Transaction[]>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: TransactionService) {
    // console.log('1');
    this.transactions$ = service.transactions$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: any) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngOnChanges(changes: any) {
    // console.log({ changes });
    this.transactions$ = changes.txns;
    this.txns.subscribe({
      next: (data) => (this.total$ = of(data.length)),
    });
  }
}
