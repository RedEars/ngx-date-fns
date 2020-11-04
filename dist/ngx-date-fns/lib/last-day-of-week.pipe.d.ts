import { PipeTransform, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DateFnsInputDate, DateFnsWeekIndex } from './types';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from './date-fns-configuration.service';
export declare class LastDayOfWeekPipe implements PipeTransform, OnDestroy {
    config: DateFnsConfigurationService;
    cd: ChangeDetectorRef;
    private localeChanged$;
    constructor(config: DateFnsConfigurationService, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform(date: DateFnsInputDate, options?: {
        locale?: Locale;
        weekStartsOn?: DateFnsWeekIndex;
    }): Date;
}
export declare class LastDayOfWeekPipeModule {
}
