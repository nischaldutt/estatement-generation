import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { StatementGenerationModule } from './statement-generation/statement-generation.module';
import { StatementPageModule } from './statement-page/statement-page.module';
import { ViewStatementModule } from './view-statement/view-statement.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    StatementGenerationModule,
    ViewStatementModule,
    StatementPageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
