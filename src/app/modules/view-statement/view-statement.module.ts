import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [ViewStatementComponent],
  imports: [CommonModule, SharedModuleModule],
})
export class ViewStatementModule {}
