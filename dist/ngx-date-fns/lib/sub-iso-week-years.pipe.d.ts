import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class SubISOWeekYearsPipe implements PipeTransform {
    transform(date: DateFnsInputDate, amount: number): Date;
}
export declare class SubISOWeekYearsPipeModule {
}
