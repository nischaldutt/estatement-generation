import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  const regex = /([12]\d{3}-(0[1-9]|1[0-2]|[1-9])-(0[1-9]|[12]\d|3[01]|[1-9]))/;
  const { day, month, year } = control?.value;
  const dateEntered = `${year}-${month}-${day}`

  return regex.test(dateEntered)? null: { invalidDate: true }
}