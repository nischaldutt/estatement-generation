import { Component, OnInit } from '@angular/core';
import { FakeUserImageService } from 'src/app/services/fake-user-image/fake-user-image.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { TransferService } from 'src/app/services/transfer/transfer.service';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.css'],
})
export class UserDetailsCardComponent implements OnInit {
  fakeUserImageUrl!: string;
  username!: string;
  accountNo!: string;
  email!: string;
  address!: string;
  accountBalance!: number;

  constructor(
    private fakeUserService: FakeUserImageService,
    private transferService: TransferService
  ) {}

  ngOnInit(): void {
    this.fakeUserService.fetchFakeUser().subscribe({
      next: (data: any) => {
        const { image_url } = data;
        this.fakeUserImageUrl = image_url;
        const {
          accountHolderAddress,
          accountHolderName,
          accountNumber,
          currentBalance,
          email,
        } = this.transferService.getData();
        this.username = accountHolderName;
        this.accountNo = accountNumber;
        this.email = email;
        this.address = accountHolderAddress;
        this.accountBalance = currentBalance;
      },
      error: (error) => console.log({ error }),
    });
  }
}
