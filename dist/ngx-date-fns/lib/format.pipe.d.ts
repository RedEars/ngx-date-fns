import { PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import { Locale } from 'date-fns';
export declare class FormatPipe implements PipeTransform, OnDestroy {
    config: DateFnsConfigurationService;
    cd: ChangeDetectorRef;
    private localeChanged$;
    constructor(config: DateFnsConfigurationService, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform(date: DateFnsInputDate, dateFormat: string, options?: {
        locale?: Locale;
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        firstWeekContainsDate?: number;
        useAdditionalWeekYearTokens?: boolean;
        useAdditionalDayOfYearTokens?: boolean;
    }): string;
}
export declare class FormatPipeModule {
}
