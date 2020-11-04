import { PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
export declare class DifferenceInCalendarWeeksPipe implements PipeTransform {
    transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate, options?: {
        weekStartsOn?: DateFnsWeekIndex;
    }): number;
}
export declare class DifferenceInCalendarWeeksPipeModule {
}
