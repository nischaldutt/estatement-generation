import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransactionTableComponent],
  imports: [CommonModule, FormsModule],
  exports: [TransactionTableComponent],
})
export class SharedModuleModule {}
