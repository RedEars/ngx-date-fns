import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
export declare class FormatDistanceToNowPurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(date: DateFnsInputDate, options?: {
        includeSeconds?: boolean;
        addSuffix?: boolean;
        locale?: Locale;
    }): string;
}
export declare class FormatDistanceToNowPurePipeModule {
}
