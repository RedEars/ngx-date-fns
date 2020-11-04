import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
export declare class GetWeekOfMonthPurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(date: DateFnsInputDate, options?: {
        locale?: Locale;
        weekStartsOn?: DateFnsWeekIndex;
    }): number;
}
export declare class GetWeekOfMonthPurePipeModule {
}
