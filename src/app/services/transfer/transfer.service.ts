import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/shared/interfaces/Transaction';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor() {}

  private data: any;
  private fromDate!: string;
  private toDate!: string;
  private fetchedTxns!: Transaction[];

  setData(data: any) {
    this.data = data;
  }

  setFromDate(date: string) {
    this.fromDate = date;
  }

  setToDate(date: string) {
    this.toDate = date;
  }

  setFetchedTxns(fetchedTxns: Transaction[]) {
    this.fetchedTxns = fetchedTxns;
  }

  getData() {
    // let temp = this.data;
    // this.clearData();
    return this.data;
  }

  getFromDate() {
    return this.fromDate;
  }

  getToDate() {
    return this.toDate;
  }

  getFetchedTxns() {
    return this.fetchedTxns;
  }

  clearData() {
    this.data = undefined;
  }
}
