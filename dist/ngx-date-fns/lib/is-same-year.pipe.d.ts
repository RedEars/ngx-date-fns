import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class IsSameYearPipe implements PipeTransform {
    transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean;
}
export declare class IsSameYearPipeModule {
}
