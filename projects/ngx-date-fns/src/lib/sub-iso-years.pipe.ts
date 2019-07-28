import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { subISOYears } from 'date-fns';

@Pipe({ name: 'dfnsSubISOYears' })
export class SubISOYearsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubISOYears: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (isInvalidDate(date)) {
      throw new Error(SubISOYearsPipe.NO_ARGS_ERROR);
    }
    return subISOYears(date, amount || 0);
  }
}
