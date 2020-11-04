import { PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
export declare class FormatRelativePurePipe implements PipeTransform {
    config: DateFnsConfigurationService;
    constructor(config: DateFnsConfigurationService);
    transform(date: DateFnsInputDate, baseDate?: DateFnsInputDate, options?: {
        weekStartsOn?: number;
        locale?: Locale;
    }): string;
}
export declare class FormatRelativePurePipeModule {
}
