import { PipeTransform } from '@angular/core';
import { DateFnsInputDate } from './types';
export declare class GetOverlappingDaysInIntervalsPipe implements PipeTransform {
    transform(intervalLeft: {
        start: DateFnsInputDate;
        end: DateFnsInputDate;
    }, intervalRight: {
        start: DateFnsInputDate;
        end: DateFnsInputDate;
    }): number;
}
export declare class GetOverlappingDaysInIntervalsPipeModule {
}
