import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class EndOfHourPipe implements PipeTransform {
    transform(date: DateFnsInputDate): Date;
}
export declare class EndOfHourPipeModule {
}
