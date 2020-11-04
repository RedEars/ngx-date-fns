import { PipeTransform } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
export declare class EndOfWeekPipe implements PipeTransform {
    transform(date: DateFnsInputDate, options?: {
        weekStartsOn?: DateFnsWeekIndex;
    }): Date;
}
export declare class EndOfWeekPipeModule {
}
