import { NgModule, Pipe, PipeTransform } from '@angular/core';
import parseISO from 'date-fns/parseISO';

@Pipe({ name: 'dfnsParseIso' })
export class ParseIsoPipe implements PipeTransform {
  transform(
    dateString: any,
    options?: {
      additionalDigits?: 0 | 1 | 2;
    }
  ): Date {
    if (dateString instanceof Date) {
      return dateString;
    }
    return parseISO(dateString, options);
  }
}

@NgModule({
  declarations: [ParseIsoPipe],
  exports: [ParseIsoPipe]
})
export class ParseIsoPipeModule {}
