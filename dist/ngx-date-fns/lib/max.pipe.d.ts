import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class MaxPipe implements PipeTransform {
    transform(dates: DateFnsInputDate[]): Date;
}
export declare class MaxPipeModule {
}
