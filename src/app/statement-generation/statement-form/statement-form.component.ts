import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {ValidateDate} from "../../shared/date.validator";

@Component({
  selector: 'app-statement-form',
  templateUrl: './statement-form.component.html',
  styleUrls: ['./statement-form.component.css'],
})
export class StatementFormComponent {
  statementForm = new FormGroup({
    fromDate: new FormControl("", [Validators.required, ValidateDate]),
    toDate: new FormControl("", [Validators.required, ValidateDate]),
  })
  
  get fromDate() {
    return this.statementForm.get('fromDate');
  }

  get toDate() {
    return this.statementForm.get('toDate');
  }

  onSubmit() {
    console.log(this.statementForm.value)
  }
}
