import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { ValidateDate } from '../../../shared/validators/date.validator';
import { TransferService } from 'src/app/services/transfer/transfer.service';
import { StatementService } from 'src/app/services/statement/statement.service';

const monthLastDay: any = {
  '01': 31,
  '02': 28,
  '03': 31,
  '04': 30,
  '05': 31,
  '06': 30,
  '07': 31,
  '08': 31,
  '09': 30,
  '10': 31,
  '11': 30,
  '12': 31,
};

@Component({
  selector: 'app-statement-form',
  templateUrl: './statement-form.component.html',
  styleUrls: ['./statement-form.component.css'],
})
export class StatementFormComponent implements OnInit {
  statementForm!: FormGroup;
  today!: NgbDateStruct;

  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private calendar: NgbCalendar,
    private router: Router,
    private transferService: TransferService,
    private statementService: StatementService
  ) {}

  ngOnInit() {
    this.today = this.calendar.getToday();

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
    // run change detection explicitly after the change
    this.cdRef.detectChanges();
  }

  resetControlValueAndValidations() {
    for (let controlKey in this.statementForm.value) {
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
    if (this.statementForm.valid) {
      let fromDate = '';
      let toDate = '';

      const { email } = this.transferService.getData();

      switch (this.statementForm.value.formType) {
        case 'month': {
          const { selectedMonth, selectedYear } = this.statementForm.value;
          // console.log({ selectedMonth, selectedYear });
          fromDate = `${selectedYear}-${selectedMonth}-01`;
          toDate = `${selectedYear}-${selectedMonth}-${monthLastDay[selectedMonth]}`;
          // console.log({ day: monthLastDay[selectedMonth] });
          this.transferService.setFromDate(fromDate);
          this.transferService.setToDate(toDate);
          break;
        }
        case 'year': {
          const { selectedYear } = this.statementForm.value;
          // console.log({ selectedYear });
          fromDate = `${selectedYear}-01-01`;
          toDate = `${selectedYear}-12-31`;
          this.transferService.setFromDate(fromDate);
          this.transferService.setToDate(toDate);
          break;
        }
        case 'custom': {
          const { fromDate, toDate } = this.statementForm.value;
          // console.log({ fromDate, toDate });
          const day1 = fromDate.day1 < 10 ? `0${fromDate.day1}` : fromDate.day1;
          const month1 =
            fromDate.month1 < 10 ? `0${fromDate.month1}` : fromDate.month1;

          const day2 = fromDate.day2 < 10 ? `0${fromDate.day2}` : fromDate.day2;
          const month2 =
            fromDate.month2 < 10 ? `0${fromDate.month2}` : fromDate.month2;

          const { year1 } = fromDate;
          const { year2 } = toDate;
          this.transferService.setFromDate(`${day1}-${month1}, ${year1}`);
          this.transferService.setToDate(`${day2}-${month2}, ${year2}`);
          break;
        }
        default:
          return;
      }

      this.statementService
        .fetchTransactions(
          email,
          this.transferService.getFromDate(),
          this.transferService.getToDate()
        )
        .subscribe({
          next: (data) => {
            // console.log({ fetchTransactions: data });
            this.transferService.setFetchedTxns(data);
            this.router.navigateByUrl('/view-statement');
          },
          error: (error) => {
            console.log({ error });
            alert('Something went wrong!');
          },
        });
    }
  }
}
