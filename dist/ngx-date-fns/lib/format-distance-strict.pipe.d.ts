import { PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate, DateFnsUnit, DateFnsRoundingMethod } from './types';
import { Locale } from 'date-fns';
export declare class FormatDistanceStrictPipe implements PipeTransform, OnDestroy {
    config: DateFnsConfigurationService;
    cd: ChangeDetectorRef;
    private localeChanged$;
    constructor(config: DateFnsConfigurationService, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform(date: DateFnsInputDate, dateToCompare: DateFnsInputDate, options?: {
        addSuffix?: boolean;
        unit?: DateFnsUnit;
        roundingMethod?: DateFnsRoundingMethod;
        locale?: Locale;
    }): string;
}
export declare class FormatDistanceStrictPipeModule {
}
