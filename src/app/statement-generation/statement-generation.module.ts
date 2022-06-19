import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementGenerationComponent } from './statement-generation/statement-generation.component';
import { UserDetailsCardComponent } from './user-details-card/user-details-card.component';
import { StatementFormComponent } from './statement-form/statement-form.component';
import { LatestTransactionsComponent } from './latest-transactions/latest-transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StatementGenerationComponent,
    UserDetailsCardComponent,
    StatementFormComponent,
    LatestTransactionsComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    StatementGenerationComponent
  ]
})
export class StatementGenerationModule { }
