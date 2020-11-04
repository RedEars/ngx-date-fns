import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsRoundingMethod, DateFnsUnit } from './types';
export declare class FormatDistanceStrictPurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate, options?: {
        addSuffix?: boolean;
        unit?: DateFnsUnit;
        roundingMethod?: DateFnsRoundingMethod;
        locale?: Locale;
    }): string;
}
export declare class FormatDistanceStrictPurePipeModule {
}
