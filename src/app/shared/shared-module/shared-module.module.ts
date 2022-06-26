import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomCarousalComponent } from './custom-carousal/custom-carousal.component';
import { FirstErrorKeyPipe } from '../pipes/first-error-key.pipe';

@NgModule({
  declarations: [
    TransactionTableComponent,
    CustomCarousalComponent,
    FirstErrorKeyPipe,
  ],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [
    TransactionTableComponent,
    CustomCarousalComponent,
    FirstErrorKeyPipe,
  ],
})
export class SharedModuleModule {}
