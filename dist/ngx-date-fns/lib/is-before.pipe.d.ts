import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class IsBeforePipe implements PipeTransform {
    transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate): boolean;
}
export declare class IsBeforePipeModule {
}
