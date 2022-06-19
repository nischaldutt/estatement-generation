import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementGenerationComponent } from './statement-generation/statement-generation.component';
import { UserDetailsCardComponent } from './user-details-card/user-details-card.component';
import { StatementFormComponent } from './statement-form/statement-form.component';
import { LatestTransactionsComponent } from './latest-transactions/latest-transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstErrorKeyPipe } from './first-error-key.pipe';


@NgModule({
  declarations: [
    StatementGenerationComponent,
    UserDetailsCardComponent,
    StatementFormComponent,
    LatestTransactionsComponent,
    FirstErrorKeyPipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    StatementGenerationComponent
  ]
})
export class StatementGenerationModule { }
