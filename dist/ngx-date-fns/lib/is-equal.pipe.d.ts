import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class IsEqualPipe implements PipeTransform {
    transform(dateLeft: DateFnsInputDate, dateRight: DateFnsInputDate): boolean;
}
export declare class IsEqualPipeModule {
}
