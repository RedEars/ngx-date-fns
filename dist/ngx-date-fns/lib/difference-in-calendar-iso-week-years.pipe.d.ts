import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class DifferenceInCalendarISOWeekYearsPipe implements PipeTransform {
    transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number;
}
export declare class DifferenceInCalendarISOWeekYearsPipeModule {
}
