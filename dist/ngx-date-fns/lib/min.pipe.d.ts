import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class MinPipe implements PipeTransform {
    transform(dates: DateFnsInputDate[]): Date;
}
export declare class MinPipeModule {
}
