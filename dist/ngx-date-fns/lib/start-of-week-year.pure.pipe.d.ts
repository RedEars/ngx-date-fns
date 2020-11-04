import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsFirstWeekDays, DateFnsInputDate, DateFnsWeekIndex } from './types';
export declare class StartOfWeekYearPurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(date: DateFnsInputDate, options?: {
        locale?: Locale;
        weekStartsOn?: DateFnsWeekIndex;
        firstWeekContainsDate?: DateFnsFirstWeekDays;
    }): Date;
}
export declare class StartOfWeekYearPurePipeModule {
}
