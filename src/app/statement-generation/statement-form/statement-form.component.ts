import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidateDate } from '../../shared/date.validator';

@Component({
  selector: 'app-statement-form',
  templateUrl: './statement-form.component.html',
  styleUrls: ['./statement-form.component.css'],
})
export class StatementFormComponent implements OnInit {
  statementForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.statementForm = this.formBuilder.group({
      formType: new FormControl('month', [Validators.required]),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      selectedMonth: new FormControl('', [Validators.required]),
      selectedYear: new FormControl('', [Validators.required]),
    });

    this.statementForm
      .get('formType')
      ?.valueChanges.subscribe((currentFormType) => {
        console.log({ isFormValid: this.statementForm.valid });
        console.log({ currentFormType });
        switch (currentFormType) {
          case 'month': {
            this.resetControlValueAndValidations();
            this.statementForm
              .get('selectedYear')
              ?.setValidators([Validators.required]);
            this.statementForm.get('selectedMonth')?.updateValueAndValidity();
            this.statementForm
              .get('selectedMonth')
              ?.setValidators([Validators.required]);
            this.statementForm.get('selectedMonth')?.updateValueAndValidity();
            return;
          }
          case 'year': {
            this.resetControlValueAndValidations();
            this.statementForm
              .get('selectedYear')
              ?.setValidators([Validators.required]);
            this.statementForm.get('selectedMonth')?.updateValueAndValidity();
            return;
          }
          case 'custom': {
            this.resetControlValueAndValidations();
            this.statementForm
              .get('fromDate')
              ?.setValidators([Validators.required, ValidateDate]);
            this.statementForm.get('toDate')?.updateValueAndValidity();
            this.statementForm
              .get('toDate')
              ?.setValidators([Validators.required, ValidateDate]);
            this.statementForm.get('toDate')?.updateValueAndValidity();
            return;
          }
          default: {
            this.resetControlValueAndValidations();
            return;
          }
        }
      });
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  resetControlValueAndValidations() {
    for (let controlKey in this.statementForm.value) {
      console.log({ controlKey });
      if (controlKey !== 'formType') {
        this.statementForm.get(controlKey)?.reset();
        this.statementForm.get(controlKey)?.clearValidators();
        this.statementForm.get(controlKey)?.updateValueAndValidity();
      }
    }
  }

  get formType() {
    return this.statementForm.get('formType');
  }

  get fromDate() {
    return this.statementForm.get('fromDate');
  }

  get toDate() {
    return this.statementForm.get('toDate');
  }

  get selectedMonth() {
    return this.statementForm.get('selectedMonth');
  }

  get selectedYear() {
    return this.statementForm.get('selectedYear');
  }

  changeMonth(e: any) {
    this.selectedMonth?.setValue(e.target.value);
  }

  changeYear(e: any) {
    this.selectedYear?.setValue(e.target.value);
  }

  onSubmit() {
    this.statementForm.valid && console.log({ test: this.statementForm.value });
  }
}
