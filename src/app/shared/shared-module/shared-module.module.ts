import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TransactionTableComponent],
  imports: [CommonModule, FormsModule, NgbModule],
  exports: [TransactionTableComponent],
})
export class SharedModuleModule {}
