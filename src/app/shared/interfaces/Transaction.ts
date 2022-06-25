export interface Transaction {
  accountNo: string;
  name: string;
  time: Date;
  txnType: string;
  refAccount: string;
  txnAmount: number;
  accountBalance: number;
}
