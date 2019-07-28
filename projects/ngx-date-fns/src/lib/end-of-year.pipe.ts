import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { endOfYear } from 'date-fns';

@Pipe({ name: 'dfnsEndOfYear' })
export class EndOfYearPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfYear: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(EndOfYearPipe.NO_ARGS_ERROR);
    }
    return endOfYear(date);
  }
}
