import { PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import { Locale } from 'date-fns';
export declare class FormatDistanceToNowPipe implements PipeTransform, OnDestroy {
    config: DateFnsConfigurationService;
    cd: ChangeDetectorRef;
    private localeChanged$;
    constructor(config: DateFnsConfigurationService, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform(date: DateFnsInputDate, options?: {
        includeSeconds?: boolean;
        addSuffix?: boolean;
        locale?: Locale;
    }): string;
}
export declare class FormatDistanceToNowPipeModule {
}
