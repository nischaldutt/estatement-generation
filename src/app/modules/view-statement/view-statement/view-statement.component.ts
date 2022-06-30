import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MailServiceService } from 'src/app/services/mail-service/mail-service.service';
import { StatementService } from 'src/app/services/statement/statement.service';
import { TransferService } from 'src/app/services/transfer/transfer.service';
import { Transaction } from 'src/app/shared/interfaces/Transaction';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css'],
})
export class ViewStatementComponent implements OnInit {
  email!: string;
  fromDate!: string;
  toDate!: string;

  fetchedTxns!: Observable<Transaction[]>;

  constructor(
    private service: StatementService,
    private transferService: TransferService,
    private mailService: MailServiceService
  ) {}

  ngOnInit(): void {
    this.email = this.transferService.getData().email;

    const response = this.transferService.getFetchedTxns();
    this.fetchedTxns = of(response);
  }

  downloadPdf() {
    // console.log('here');
    // console.log({
    //   email: this.transferService.getData().email,
    //   from: this.transferService.getFromDate(),
    //   to: this.transferService.getToDate(),
    // });

    this.service
      .downloadPdfDocument(
        this.transferService.getData().email,
        this.transferService.getFromDate(),
        this.transferService.getToDate()
      )
      .subscribe({
        next: (data: Blob) => {
          var file = new Blob([data], { type: 'application/pdf' });
          var fileURL = URL.createObjectURL(file);

          window.open(fileURL);
          var a = document.createElement('a');
          a.href = fileURL;
          a.target = '_blank';
          a.download = 'Account-Statement.pdf';
          document.body.appendChild(a);
          a.click();
        },
        error: (error) => console.log({ error }),
      });
  }

  sendMail() {
    this.mailService
      .sendMail(
        this.transferService.getData().email,
        this.transferService.getFromDate(),
        this.transferService.getToDate()
      )
      .subscribe({
        next: (data) => {
          console.log({ data });
          alert('Mail sent!');
        },
        error: (error) => {
          console.log({ error });
        },
      });
    alert('Mail Sent!');
  }
}
