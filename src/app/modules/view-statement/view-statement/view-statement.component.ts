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

  downloadPdf() {
    console.log('here');
    this.service.downloadPdfDocument().subscribe({
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
}
