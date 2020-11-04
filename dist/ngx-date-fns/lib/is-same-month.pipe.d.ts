import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class IsSameMonthPipe implements PipeTransform {
    transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean;
}
export declare class IsSameMonthPipeModule {
}
