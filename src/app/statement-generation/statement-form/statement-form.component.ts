import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidateDate } from '../../shared/date.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statement-form',
  templateUrl: './statement-form.component.html',
  styleUrls: ['./statement-form.component.css'],
})
export class StatementFormComponent implements OnInit {
  statementForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.statementForm = this.formBuilder.group({
      formType: new FormControl('month', [Validators.required]),
      fromDate: new FormControl('', [Validators.required]),
      toDate: new FormControl(''),
    });

    this.statementForm.get('formType')?.valueChanges.subscribe((response) => {
      if (response == 'month') {
        this.statementForm.get('toDate')?.clearValidators();
        this.statementForm.get('toDate')?.updateValueAndValidity();
      } else {
        this.statementForm.get('toDate')?.setValidators(Validators.required);
        this.statementForm.get('toDate')?.updateValueAndValidity();
      }
    });
  }

  // saveForm() {
  //   if (this.profileForm.valid) {
  //     console.log('Profile form data :: ', this.profileForm.value);
  //   }

  get formType() {
    return this.statementForm.get('formType');
  }

  get fromDate() {
    return this.statementForm.get('fromDate');
  }

  get toDate() {
    return this.statementForm.get('toDate');
  }

  onSubmit() {
    // this.statementForm.valid &&
    console.log(this.statementForm.value);
    this.redirectToStatementPage();
  }

  redirectToStatementPage() {
    this.router.navigateByUrl('/stat-page');
  }
}
