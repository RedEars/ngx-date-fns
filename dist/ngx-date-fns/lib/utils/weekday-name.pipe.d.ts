import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import { DateFnsConfigurationService } from '../date-fns-configuration.service';
declare const formats: {
    x1: string;
    x2: string;
    x3: string;
    full: string;
};
/**
 * - `x1`: One char. 'M' for Monday.
 * - `x2`: Two chars. 'Mo' for Monday.
 * - `x3`: Three chars. 'Mon' for Monday.
 * - `full`: Full weekday name. 'Monday' for Monday.
 */
export declare type WeekdayNameFormat = keyof typeof formats;
export declare class WeekdayNamePipe implements PipeTransform, OnDestroy {
    config: DateFnsConfigurationService;
    cd: ChangeDetectorRef;
    private localeChanged$;
    constructor(config: DateFnsConfigurationService, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    transform(day: number, view?: WeekdayNameFormat, options?: {
        locale?: Locale;
    }): string;
}
export declare class WeekdayNamePipeModule {
}
export {};
