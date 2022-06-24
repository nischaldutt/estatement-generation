import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementDisplayComponent } from './statement-display/statement-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StatementDisplayComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    StatementDisplayComponent
  ]
})
export class StatementPageModule { }
