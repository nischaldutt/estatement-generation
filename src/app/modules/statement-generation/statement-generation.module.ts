import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementGenerationComponent } from './statement-generation/statement-generation.component';
import { UserDetailsCardComponent } from './user-details-card/user-details-card.component';
import { StatementFormComponent } from './statement-form/statement-form.component';
import { LatestTransactionsComponent } from './latest-transactions/latest-transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstErrorKeyPipe } from 'src/app/shared/pipes/first-error-key.pipe';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    StatementGenerationComponent,
    UserDetailsCardComponent,
    StatementFormComponent,
    LatestTransactionsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
  ],
  exports: [StatementGenerationComponent],
})
export class StatementGenerationModule {}
