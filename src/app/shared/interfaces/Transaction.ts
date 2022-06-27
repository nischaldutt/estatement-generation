export interface Transaction {
  accountNo: string;
  name: string;
  time: string;
  txnType: string;
  refAccount: string;
  txnAmount: number;
  accountBalance: number;
}
