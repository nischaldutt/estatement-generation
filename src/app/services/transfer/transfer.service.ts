import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor() {}

  private data: any;

  setData(data: any) {
    this.data = data;
  }

  getData() {
    // let temp = this.data;
    // this.clearData();
    return this.data;
  }

  clearData() {
    this.data = undefined;
  }
}
