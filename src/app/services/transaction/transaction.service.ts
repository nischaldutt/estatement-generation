/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, Input, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Transaction } from '../../shared/interfaces/Transaction';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import {
  SortColumn,
  SortDirection,
} from '../../shared/directives/sortable.directive';
import { StatementService } from '../statement/statement.service';

interface SearchResult {
  transactions: Transaction[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(
  transactions: Transaction[],
  column: SortColumn,
  direction: string
): Transaction[] {
  if (direction === '' || column === '') {
    return transactions;
  } else {
    return [...transactions].sort((a, b) => {
      console.log({ a, b });
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(transaction: Transaction, term: string, pipe: PipeTransform) {
  // console.log({ transaction });
  // console.log({ term });
  return (
    // transaction.name.toLowerCase().includes(term.toLowerCase()) ||
    transaction.refAccount.includes(term)
    // pipe.transform(transaction.accountNo).includes(term) ||
    // pipe.transform(transaction.name).includes(term) ||
    // pipe.transform(transaction.txnType).includes(term) ||
    // pipe.transform(transaction.refAccount).includes(term)
  );
}

@Injectable({ providedIn: 'root' })
export class TransactionService {
  TRANSACTIONS!: Transaction[];

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _transactions$ = new BehaviorSubject<Transaction[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private pipe: DecimalPipe) {
    // console.log('2');
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(200),
        switchMap(() => {
          console.log('inside switch map');
          return this._search();
        }),
        delay(200),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        console.log({ result });
        this._transactions$.next(result.transactions);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get transactions$() {
    return this._transactions$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    // console.log('3');
    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._state;

    // 1. sort
    let transactions = sort(this.TRANSACTIONS, sortColumn, sortDirection);
    // console.log({ sorted: transactions });

    // 2. filter
    transactions = transactions?.filter((txn) =>
      matches(txn, searchTerm, this.pipe)
    );
    // console.log({ filtered: transactions });

    const total = transactions?.length;

    // 3. paginate
    transactions = transactions?.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );

    return of({ transactions, total });
  }
}
