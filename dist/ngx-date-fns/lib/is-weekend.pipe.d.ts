import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class IsWeekendPipe implements PipeTransform {
    transform(date: DateFnsInputDate): boolean;
}
export declare class IsWeekendPipeModule {
}
