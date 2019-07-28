import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { differenceInCalendarWeeks } from 'date-fns';

@Pipe({ name: 'dfnsDifferenceInCalendarWeeks' })
export class DifferenceInCalendarWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsDifferenceInCalendarWeeks: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date,
    options?: {
      weekStartsOn?: number;
    }
  ): number {
    if (isInvalidDate(dateLeft) || isInvalidDate(dateRight)) {
      throw new Error(DifferenceInCalendarWeeksPipe.NO_ARGS_ERROR);
    }
    return differenceInCalendarWeeks(dateLeft, dateRight, options);
  }
}
