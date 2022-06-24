import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-statement-display',
  templateUrl: './statement-display.component.html',
  styleUrls: ['./statement-display.component.css']
})
export class StatementDisplayComponent implements OnInit {

  constructor() {
    this.refreshTransactions();
   }

  ngOnInit(): void {
  }
  trans!: any;
  transaction_data: any[]=[
    {
     trans_date : "09/06/2022",
     val_date:"09/06/2022",
     trans_remarks:"UPI/216013389108/Swiggy Order Id/swiggyupi@axisb/Axis BankLtd./AXISSDKV336b5b2",
     debit_amount:"290",
     credit_amount:"",
     balance:"15420.47"
    },
    {
      trans_date : "09/06/2022",
      val_date:"09/06/2022",
      trans_remarks:"UPI/216013389108/Swiggy Order Id/swiggyupi@axisb/Axis BankLtd./AXISSDKV336b5b2",
      debit_amount:"290",
      credit_amount:"",
      balance:"15420.47"
     },
     {
      trans_date : "09/06/2022",
      val_date:"09/06/2022",
      trans_remarks:"UPI/216013389108/Swiggy Order Id/swiggyupi@axisb/Axis BankLtd./AXISSDKV336b5b2",
      debit_amount:"290",
      credit_amount:"",
      balance:"15420.47"
     },
     {
      trans_date : "09/06/2022",
      val_date:"09/06/2022",
      trans_remarks:"UPI/216013389108/Swiggy Order Id/swiggyupi@axisb/Axis BankLtd./AXISSDKV336b5b2",
      debit_amount:"290",
      credit_amount:"",
      balance:"15420.47"
     },
    {
      trans_date : "09/06/2022",
      val_date:"09/06/2022",
      trans_remarks:"BIL/ONL/000418172532/TAMILNADU/090380033588T43/Ko",
      debit_amount:"5476",
      credit_amount:"",
      balance:"9944.27"
     }
  ];

  page = 1;
  pageSize = 2;
  collectionSize = this.transaction_data.length;

  refreshTransactions() {
      this.trans = this.transaction_data
      .map((trans, i) => ({id: i + 1, ...trans}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
