import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatementGenerationModule } from './statement-generation/statement-generation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatementGenerationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
