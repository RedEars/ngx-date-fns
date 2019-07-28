import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { endOfMinute } from 'date-fns';

@Pipe({ name: 'dfnsEndOfMinute' })
export class EndOfMinutePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsEndOfMinute: missing required arguments';

  transform(date: string | number | Date): Date {
    if (isInvalidDate(date)) {
      throw new Error(EndOfMinutePipe.NO_ARGS_ERROR);
    }
    return endOfMinute(date);
  }
}
