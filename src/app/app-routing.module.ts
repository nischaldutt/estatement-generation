import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login/login.component";
import { StatementGenerationComponent } from "./statement-generation/statement-generation/statement-generation.component";
import { StatementDisplayComponent } from './statement-page/statement-display/statement-display.component';
import { ViewStatementComponent } from "./view-statement/view-statement/view-statement.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'generate-statement', component: StatementGenerationComponent },
  { path: 'view-statement', component: ViewStatementComponent },
  { path: 'stat-page', component: StatementDisplayComponent},
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
