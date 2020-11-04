import { Subject } from 'rxjs';
import { Locale } from 'date-fns';
export interface DateFnsConfiguration {
    /**
     * Observable language-aware pipes subscribe to get notified when the locale changes,
     * this is useful when pipes live in an OnPush component.
     */
    localeChanged: Subject<never>;
    /**
     * Returns the default locale used by date-fns
     */
    locale(): Locale | undefined;
    /**
     * Sets the default locale used by date-fns
     */
    setLocale(locale: Locale | undefined): void;
}
export declare class DateFnsConfigurationService implements DateFnsConfiguration {
    localeChanged: Subject<never>;
    private locale$;
    locale(): Locale | undefined;
    setLocale(locale: Locale | undefined): void;
}
/**
 * Helper function used by all pipes to calculate locale
 */
export declare const calculateLocale: (options: {
    locale?: Locale;
} | undefined, config: DateFnsConfiguration) => {
    locale?: Locale;
} | undefined;
