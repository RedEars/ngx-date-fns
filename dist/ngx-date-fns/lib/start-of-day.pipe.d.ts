import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class StartOfDayPipe implements PipeTransform {
    transform(date: DateFnsInputDate): Date;
}
export declare class StartOfDayPipeModule {
}
