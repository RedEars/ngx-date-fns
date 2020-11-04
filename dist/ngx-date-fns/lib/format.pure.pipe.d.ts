import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsInputDate } from './types';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
export declare class FormatPurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(date: DateFnsInputDate, dateFormat: string, options?: {
        locale?: Locale;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: number;
        useAdditionalWeekYearTokens?: boolean;
        useAdditionalDayOfYearTokens?: boolean;
    }): string;
}
export declare class FormatPurePipeModule {
}
