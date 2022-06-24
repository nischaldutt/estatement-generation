export interface Transaction {
  accountNo: string;
  name: string;
  accountBalance: number;
  time: Date;
  txnType: string;
  txnAmount: number;
  refAccount: string;
}
