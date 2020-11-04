import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
export declare class ParsePurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(dateString: string, formatString: string, backupDate: DateFnsInputDate, options?: {
        locale?: Locale;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: number;
        useAdditionalWeekYearTokens?: boolean;
        useAdditionalDayOfYearTokens?: boolean;
    }): Date;
}
export declare class ParsePurePipeModule {
}
