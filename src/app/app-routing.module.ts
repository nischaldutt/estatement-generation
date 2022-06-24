import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/login/login.component';
import { StatementGenerationComponent } from './modules/statement-generation/statement-generation/statement-generation.component';
import { ViewStatementComponent } from './modules/view-statement/view-statement/view-statement.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'generate-statement', component: StatementGenerationComponent },
  { path: 'view-statement', component: ViewStatementComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
