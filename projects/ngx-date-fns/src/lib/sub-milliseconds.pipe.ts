import { Pipe, PipeTransform } from '@angular/core';
import { isInvalidDate } from './utils';
import { subMilliseconds } from 'date-fns';

@Pipe({ name: 'dfnsSubMilliseconds' })
export class SubMillisecondsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsSubMilliseconds: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (isInvalidDate(date)) {
      throw new Error(SubMillisecondsPipe.NO_ARGS_ERROR);
    }
    return subMilliseconds(date, amount || 0);
  }
}
