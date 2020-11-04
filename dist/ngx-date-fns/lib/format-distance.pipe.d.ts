import { PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DateFnsInputDate } from './types';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { Locale } from 'date-fns';
export declare class FormatDistancePipe implements PipeTransform, OnDestroy {
    config: DateFnsConfigurationService;
    cd: ChangeDetectorRef;
    private localeChanged$;
    constructor(config: DateFnsConfigurationService, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate, options?: {
        includeSeconds?: boolean;
        addSuffix?: boolean;
        locale?: Locale;
    }): string;
}
export declare class FormatDistancePipeModule {
}
