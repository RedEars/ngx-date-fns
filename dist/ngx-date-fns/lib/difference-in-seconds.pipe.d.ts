import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class DifferenceInSecondsPipe implements PipeTransform {
    transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): number;
}
export declare class DifferenceInSecondsPipeModule {
}
