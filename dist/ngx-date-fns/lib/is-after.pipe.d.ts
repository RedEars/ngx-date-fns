import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class IsAfterPipe implements PipeTransform {
    transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate): boolean;
}
export declare class IsAfterPipeModule {
}
