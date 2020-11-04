import { Pipe, NgModule, ɵɵdefineInjectable, Injectable, ChangeDetectorRef } from '@angular/core';
import addBusinessDays from 'date-fns/addBusinessDays';
import addDays from 'date-fns/addDays';
import addHours from 'date-fns/addHours';
import addISOWeekYears from 'date-fns/addISOWeekYears';
import addMilliseconds from 'date-fns/addMilliseconds';
import addMinutes from 'date-fns/addMinutes';
import addMonths from 'date-fns/addMonths';
import addQuarters from 'date-fns/addQuarters';
import addSeconds from 'date-fns/addSeconds';
import addWeeks from 'date-fns/addWeeks';
import addYears from 'date-fns/addYears';
import closestTo from 'date-fns/closestTo';
import { Subject } from 'rxjs';
import format from 'date-fns/format';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInCalendarISOWeeks from 'date-fns/differenceInCalendarISOWeeks';
import differenceInCalendarISOWeekYears from 'date-fns/differenceInCalendarISOWeekYears';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import differenceInCalendarWeeks from 'date-fns/differenceInCalendarWeeks';
import differenceInCalendarYears from 'date-fns/differenceInCalendarYears';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInISOWeekYears from 'date-fns/differenceInISOWeekYears';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInQuarters from 'date-fns/differenceInQuarters';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInBusinessDays from 'date-fns/differenceInBusinessDays';
import formatDistance from 'date-fns/formatDistance';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import endOfDay from 'date-fns/endOfDay';
import endOfHour from 'date-fns/endOfHour';
import endOfISOWeek from 'date-fns/endOfISOWeek';
import endOfISOWeekYear from 'date-fns/endOfISOWeekYear';
import endOfMinute from 'date-fns/endOfMinute';
import endOfMonth from 'date-fns/endOfMonth';
import endOfQuarter from 'date-fns/endOfQuarter';
import endOfSecond from 'date-fns/endOfSecond';
import endOfToday from 'date-fns/endOfToday';
import endOfTomorrow from 'date-fns/endOfTomorrow';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import endOfYesterday from 'date-fns/endOfYesterday';
import getDate from 'date-fns/getDate';
import getDayOfYear from 'date-fns/getDayOfYear';
import getDay from 'date-fns/getDay';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import getDaysInYear from 'date-fns/getDaysInYear';
import getHours from 'date-fns/getHours';
import getISODay from 'date-fns/getISODay';
import getISOWeek from 'date-fns/getISOWeek';
import getISOWeeksInYear from 'date-fns/getISOWeeksInYear';
import getMilliseconds from 'date-fns/getMilliseconds';
import getMinutes from 'date-fns/getMinutes';
import getMonth from 'date-fns/getMonth';
import getOverlappingDaysInIntervals from 'date-fns/getOverlappingDaysInIntervals';
import getQuarter from 'date-fns/getQuarter';
import getSeconds from 'date-fns/getSeconds';
import getTime from 'date-fns/getTime';
import getYear from 'date-fns/getYear';
import getUnixTime from 'date-fns/getUnixTime';
import getWeek from 'date-fns/getWeek';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import getWeeksInMonth from 'date-fns/getWeeksInMonth';
import getDecade from 'date-fns/getDecade';
import getWeekYear from 'date-fns/getWeekYear';
import lastDayOfISOWeek from 'date-fns/lastDayOfISOWeek';
import lastDayOfISOWeekYear from 'date-fns/lastDayOfISOWeekYear';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import lastDayOfQuarter from 'date-fns/lastDayOfQuarter';
import lastDayOfWeek from 'date-fns/lastDayOfWeek';
import lastDayOfYear from 'date-fns/lastDayOfYear';
import lastDayOfDecade from 'date-fns/lastDayOfDecade';
import max from 'date-fns/max';
import min from 'date-fns/min';
import startOfDay from 'date-fns/startOfDay';
import startOfHour from 'date-fns/startOfHour';
import startOfISOWeek from 'date-fns/startOfISOWeek';
import startOfISOWeekYear from 'date-fns/startOfISOWeekYear';
import startOfMinute from 'date-fns/startOfMinute';
import startOfMonth from 'date-fns/startOfMonth';
import startOfQuarter from 'date-fns/startOfQuarter';
import startOfSecond from 'date-fns/startOfSecond';
import startOfToday from 'date-fns/startOfToday';
import startOfTomorrow from 'date-fns/startOfTomorrow';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';
import startOfYesterday from 'date-fns/startOfYesterday';
import startOfDecade from 'date-fns/startOfDecade';
import startOfWeekYear from 'date-fns/startOfWeekYear';
import subDays from 'date-fns/subDays';
import subHours from 'date-fns/subHours';
import subISOWeekYears from 'date-fns/subISOWeekYears';
import subMilliseconds from 'date-fns/subMilliseconds';
import subMinutes from 'date-fns/subMinutes';
import subMonths from 'date-fns/subMonths';
import subQuarters from 'date-fns/subQuarters';
import subSeconds from 'date-fns/subSeconds';
import subWeeks from 'date-fns/subWeeks';
import subYears from 'date-fns/subYears';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isDate from 'date-fns/isDate';
import isEqual from 'date-fns/isEqual';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import isValid from 'date-fns/isValid';
import isToday from 'date-fns/isToday';
import isTomorrow from 'date-fns/isTomorrow';
import isWeekend from 'date-fns/isWeekend';
import isSameMonth from 'date-fns/isSameMonth';
import parse from 'date-fns/parse';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import isSameYear from 'date-fns/isSameYear';
import differenceInCalendarQuarters from 'date-fns/differenceInCalendarQuarters';
import getISOWeekYear from 'date-fns/getISOWeekYear';
import formatRelative from 'date-fns/formatRelative';
import de from 'date-fns/locale/de';
import parseISO from 'date-fns/parseISO';

class AddBusinessDaysPipe {
    transform(date, amount) {
        return addBusinessDays(date, amount);
    }
}
AddBusinessDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddBusinessDays' },] }
];
class AddBusinessDaysPipeModule {
}
AddBusinessDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddBusinessDaysPipe],
                exports: [AddBusinessDaysPipe]
            },] }
];

class AddDaysPipe {
    transform(date, amount) {
        return addDays(date, amount);
    }
}
AddDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddDays' },] }
];
class AddDaysPipeModule {
}
AddDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddDaysPipe],
                exports: [AddDaysPipe]
            },] }
];

class AddHoursPipe {
    transform(date, amount) {
        return addHours(date, amount);
    }
}
AddHoursPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddHours' },] }
];
class AddHoursPipeModule {
}
AddHoursPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddHoursPipe],
                exports: [AddHoursPipe]
            },] }
];

class AddISOWeekYearsPipe {
    transform(date, amount) {
        return addISOWeekYears(date, amount);
    }
}
AddISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddISOWeekYears' },] }
];
class AddISOWeekYearsPipeModule {
}
AddISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddISOWeekYearsPipe],
                exports: [AddISOWeekYearsPipe]
            },] }
];

class AddMillisecondsPipe {
    transform(date, amount) {
        return addMilliseconds(date, amount);
    }
}
AddMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddMilliseconds' },] }
];
class AddMillisecondsPipeModule {
}
AddMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddMillisecondsPipe],
                exports: [AddMillisecondsPipe]
            },] }
];

class AddMinutesPipe {
    transform(date, amount) {
        return addMinutes(date, amount);
    }
}
AddMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddMinutes' },] }
];
class AddMinutesPipeModule {
}
AddMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddMinutesPipe],
                exports: [AddMinutesPipe]
            },] }
];

class AddMonthsPipe {
    transform(date, amount) {
        return addMonths(date, amount);
    }
}
AddMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddMonths' },] }
];
class AddMonthsPipeModule {
}
AddMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddMonthsPipe],
                exports: [AddMonthsPipe]
            },] }
];

class AddQuartersPipe {
    transform(date, amount) {
        return addQuarters(date, amount);
    }
}
AddQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddQuarters' },] }
];
class AddQuartersPipeModule {
}
AddQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddQuartersPipe],
                exports: [AddQuartersPipe]
            },] }
];

class AddSecondsPipe {
    transform(date, amount) {
        return addSeconds(date, amount);
    }
}
AddSecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddSeconds' },] }
];
class AddSecondsPipeModule {
}
AddSecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddSecondsPipe],
                exports: [AddSecondsPipe]
            },] }
];

class AddWeeksPipe {
    transform(date, amount) {
        return addWeeks(date, amount);
    }
}
AddWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddWeeks' },] }
];
class AddWeeksPipeModule {
}
AddWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddWeeksPipe],
                exports: [AddWeeksPipe]
            },] }
];

class AddYearsPipe {
    transform(date, amount) {
        return addYears(date, amount);
    }
}
AddYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddYears' },] }
];
class AddYearsPipeModule {
}
AddYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddYearsPipe],
                exports: [AddYearsPipe]
            },] }
];

class ClosestToPipe {
    transform(dateToCompare, datesArray) {
        return closestTo(dateToCompare, datesArray);
    }
}
ClosestToPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsClosestTo' },] }
];
class ClosestToPipeModule {
}
ClosestToPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ClosestToPipe],
                exports: [ClosestToPipe]
            },] }
];

class DateFnsConfigurationService {
    constructor() {
        this.localeChanged = new Subject();
    }
    locale() {
        return this.locale$;
    }
    setLocale(locale) {
        this.locale$ = locale;
        this.localeChanged.next();
    }
}
DateFnsConfigurationService.ɵprov = ɵɵdefineInjectable({ factory: function DateFnsConfigurationService_Factory() { return new DateFnsConfigurationService(); }, token: DateFnsConfigurationService, providedIn: "root" });
DateFnsConfigurationService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/**
 * Helper function used by all pipes to calculate locale
 */
const calculateLocale = (options, config) => {
    const configLocale = config.locale();
    if (!options && configLocale) {
        return { locale: configLocale };
    }
    if (options && !options.locale && configLocale) {
        return Object.assign(Object.assign({}, options), { locale: configLocale });
    }
    return options;
};

class FormatPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, dateFormat, options) {
        return format(date, dateFormat, calculateLocale(options, this.config));
    }
}
FormatPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormat', pure: false },] }
];
FormatPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class FormatPipeModule {
}
FormatPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatPipe],
                exports: [FormatPipe]
            },] }
];

class DifferenceInCalendarDaysPipe {
    transform(dateLeft, dateRight) {
        return differenceInCalendarDays(dateLeft, dateRight);
    }
}
DifferenceInCalendarDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarDays' },] }
];
class DifferenceInCalendarDaysPipeModule {
}
DifferenceInCalendarDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarDaysPipe],
                exports: [DifferenceInCalendarDaysPipe]
            },] }
];

class DifferenceInCalendarISOWeeksPipe {
    transform(dateLeft, dateRight) {
        return differenceInCalendarISOWeeks(dateLeft, dateRight);
    }
}
DifferenceInCalendarISOWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarISOWeeks' },] }
];
class DifferenceInCalendarISOWeeksPipeModule {
}
DifferenceInCalendarISOWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarISOWeeksPipe],
                exports: [DifferenceInCalendarISOWeeksPipe]
            },] }
];

class DifferenceInCalendarISOWeekYearsPipe {
    transform(dateLeft, dateRight) {
        return differenceInCalendarISOWeekYears(dateLeft, dateRight);
    }
}
DifferenceInCalendarISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarISOWeekYears' },] }
];
class DifferenceInCalendarISOWeekYearsPipeModule {
}
DifferenceInCalendarISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarISOWeekYearsPipe],
                exports: [DifferenceInCalendarISOWeekYearsPipe]
            },] }
];

class DifferenceInCalendarMonthsPipe {
    transform(dateLeft, dateRight) {
        return differenceInCalendarMonths(dateLeft, dateRight);
    }
}
DifferenceInCalendarMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarMonths' },] }
];
class DifferenceInCalendarMonthsPipeModule {
}
DifferenceInCalendarMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarMonthsPipe],
                exports: [DifferenceInCalendarMonthsPipe]
            },] }
];

class DifferenceInCalendarWeeksPipe {
    transform(dateLeft, dateRight, options) {
        return differenceInCalendarWeeks(dateLeft, dateRight, options);
    }
}
DifferenceInCalendarWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarWeeks' },] }
];
class DifferenceInCalendarWeeksPipeModule {
}
DifferenceInCalendarWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarWeeksPipe],
                exports: [DifferenceInCalendarWeeksPipe]
            },] }
];

class DifferenceInCalendarYearsPipe {
    transform(dateLeft, dateRight) {
        return differenceInCalendarYears(dateLeft, dateRight);
    }
}
DifferenceInCalendarYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarYears' },] }
];
class DifferenceInCalendarYearsPipeModule {
}
DifferenceInCalendarYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarYearsPipe],
                exports: [DifferenceInCalendarYearsPipe]
            },] }
];

class DifferenceInDaysPipe {
    transform(dateLeft, dateRight) {
        return differenceInDays(dateLeft, dateRight);
    }
}
DifferenceInDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInDays' },] }
];
class DifferenceInDaysPipeModule {
}
DifferenceInDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInDaysPipe],
                exports: [DifferenceInDaysPipe]
            },] }
];

class DifferenceInHoursPipe {
    transform(dateLeft, dateRight) {
        return differenceInHours(dateLeft, dateRight);
    }
}
DifferenceInHoursPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInHours' },] }
];
class DifferenceInHoursPipeModule {
}
DifferenceInHoursPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInHoursPipe],
                exports: [DifferenceInHoursPipe]
            },] }
];

class DifferenceInISOWeekYearsPipe {
    transform(dateLeft, dateRight) {
        return differenceInISOWeekYears(dateLeft, dateRight);
    }
}
DifferenceInISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInISOWeekYears' },] }
];
class DifferenceInISOWeekYearsPipeModule {
}
DifferenceInISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInISOWeekYearsPipe],
                exports: [DifferenceInISOWeekYearsPipe]
            },] }
];

class DifferenceInMillisecondsPipe {
    transform(dateLeft, dateRight) {
        return differenceInMilliseconds(dateLeft, dateRight);
    }
}
DifferenceInMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMilliseconds' },] }
];
class DifferenceInMillisecondsPipeModule {
}
DifferenceInMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMillisecondsPipe],
                exports: [DifferenceInMillisecondsPipe]
            },] }
];

class DifferenceInMinutesPipe {
    transform(dateLeft, dateRight) {
        return differenceInMinutes(dateLeft, dateRight);
    }
}
DifferenceInMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMinutes' },] }
];
class DifferenceInMinutesPipeModule {
}
DifferenceInMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMinutesPipe],
                exports: [DifferenceInMinutesPipe]
            },] }
];

class DifferenceInMonthsPipe {
    transform(dateLeft, dateRight) {
        return differenceInMonths(dateLeft, dateRight);
    }
}
DifferenceInMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMonths' },] }
];
class DifferenceInMonthsPipeModule {
}
DifferenceInMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMonthsPipe],
                exports: [DifferenceInMonthsPipe]
            },] }
];

class DifferenceInQuartersPipe {
    transform(dateLeft, dateRight) {
        return differenceInQuarters(dateLeft, dateRight);
    }
}
DifferenceInQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInQuarters' },] }
];
class DifferenceInQuartersPipeModule {
}
DifferenceInQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInQuartersPipe],
                exports: [DifferenceInQuartersPipe]
            },] }
];

class DifferenceInSecondsPipe {
    transform(dateLeft, dateRight) {
        return differenceInSeconds(dateLeft, dateRight);
    }
}
DifferenceInSecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInSeconds' },] }
];
class DifferenceInSecondsPipeModule {
}
DifferenceInSecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInSecondsPipe],
                exports: [DifferenceInSecondsPipe]
            },] }
];

class DifferenceInWeeksPipe {
    transform(dateLeft, dateRight) {
        return differenceInWeeks(dateLeft, dateRight);
    }
}
DifferenceInWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInWeeks' },] }
];
class DifferenceInWeeksPipeModule {
}
DifferenceInWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInWeeksPipe],
                exports: [DifferenceInWeeksPipe]
            },] }
];

class DifferenceInYearsPipe {
    transform(dateLeft, dateRight) {
        return differenceInYears(dateLeft, dateRight);
    }
}
DifferenceInYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInYears' },] }
];
class DifferenceInYearsPipeModule {
}
DifferenceInYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInYearsPipe],
                exports: [DifferenceInYearsPipe]
            },] }
];

class DifferenceInBusinessDaysPipe {
    transform(dateLeft, dateRight) {
        return differenceInBusinessDays(dateLeft, dateRight);
    }
}
DifferenceInBusinessDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInBusinessDays' },] }
];
class DifferenceInBusinessDaysPipeModule {
}
DifferenceInBusinessDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInBusinessDaysPipe],
                exports: [DifferenceInBusinessDaysPipe]
            },] }
];

class FormatDistancePipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, dateToCompare, options) {
        return formatDistance(date, dateToCompare, calculateLocale(options, this.config));
    }
}
FormatDistancePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistance', pure: false },] }
];
FormatDistancePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class FormatDistancePipeModule {
}
FormatDistancePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistancePipe],
                exports: [FormatDistancePipe]
            },] }
];

class FormatDistanceStrictPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, dateToCompare, options) {
        return formatDistanceStrict(date, dateToCompare, calculateLocale(options, this.config));
    }
}
FormatDistanceStrictPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistanceStrict', pure: false },] }
];
FormatDistanceStrictPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class FormatDistanceStrictPipeModule {
}
FormatDistanceStrictPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistanceStrictPipe],
                exports: [FormatDistanceStrictPipe]
            },] }
];

class FormatDistanceToNowPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return formatDistanceToNow(date, calculateLocale(options, this.config));
    }
}
FormatDistanceToNowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistanceToNow', pure: false },] }
];
FormatDistanceToNowPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class FormatDistanceToNowPipeModule {
}
FormatDistanceToNowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistanceToNowPipe],
                exports: [FormatDistanceToNowPipe]
            },] }
];

class EndOfDayPipe {
    transform(date) {
        return endOfDay(date);
    }
}
EndOfDayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfDay' },] }
];
class EndOfDayPipeModule {
}
EndOfDayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfDayPipe],
                exports: [EndOfDayPipe]
            },] }
];

class EndOfHourPipe {
    transform(date) {
        return endOfHour(date);
    }
}
EndOfHourPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfHour' },] }
];
class EndOfHourPipeModule {
}
EndOfHourPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfHourPipe],
                exports: [EndOfHourPipe]
            },] }
];

class EndOfISOWeekPipe {
    transform(date) {
        return endOfISOWeek(date);
    }
}
EndOfISOWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfISOWeek' },] }
];
class EndOfISOWeekPipeModule {
}
EndOfISOWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfISOWeekPipe],
                exports: [EndOfISOWeekPipe]
            },] }
];

class EndOfISOWeekYearPipe {
    transform(date) {
        return endOfISOWeekYear(date);
    }
}
EndOfISOWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfISOWeekYear' },] }
];
class EndOfISOWeekYearPipeModule {
}
EndOfISOWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfISOWeekYearPipe],
                exports: [EndOfISOWeekYearPipe]
            },] }
];

class EndOfMinutePipe {
    transform(date) {
        return endOfMinute(date);
    }
}
EndOfMinutePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfMinute' },] }
];
class EndOfMinutePipeModule {
}
EndOfMinutePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfMinutePipe],
                exports: [EndOfMinutePipe]
            },] }
];

class EndOfMonthPipe {
    transform(date) {
        return endOfMonth(date);
    }
}
EndOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfMonth' },] }
];
class EndOfMonthPipeModule {
}
EndOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfMonthPipe],
                exports: [EndOfMonthPipe]
            },] }
];

class EndOfQuarterPipe {
    transform(date) {
        return endOfQuarter(date);
    }
}
EndOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfQuarter' },] }
];
class EndOfQuarterPipeModule {
}
EndOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfQuarterPipe],
                exports: [EndOfQuarterPipe]
            },] }
];

class EndOfSecondPipe {
    transform(date) {
        return endOfSecond(date);
    }
}
EndOfSecondPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfSecond' },] }
];
class EndOfSecondPipeModule {
}
EndOfSecondPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfSecondPipe],
                exports: [EndOfSecondPipe]
            },] }
];

class EndOfTodayPipe {
    transform() {
        return endOfToday();
    }
}
EndOfTodayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfToday' },] }
];
class EndOfTodayPipeModule {
}
EndOfTodayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfTodayPipe],
                exports: [EndOfTodayPipe]
            },] }
];

class EndOfTomorrowPipe {
    transform() {
        return endOfTomorrow();
    }
}
EndOfTomorrowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfTomorrow' },] }
];
class EndOfTomorrowPipeModule {
}
EndOfTomorrowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfTomorrowPipe],
                exports: [EndOfTomorrowPipe]
            },] }
];

class EndOfWeekPipe {
    transform(date, options) {
        return endOfWeek(date, options);
    }
}
EndOfWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfWeek' },] }
];
class EndOfWeekPipeModule {
}
EndOfWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfWeekPipe],
                exports: [EndOfWeekPipe]
            },] }
];

class EndOfYearPipe {
    transform(date) {
        return endOfYear(date);
    }
}
EndOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfYear' },] }
];
class EndOfYearPipeModule {
}
EndOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfYearPipe],
                exports: [EndOfYearPipe]
            },] }
];

class EndOfYesterdayPipe {
    transform() {
        return endOfYesterday();
    }
}
EndOfYesterdayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfYesterday' },] }
];
class EndOfYesterdayPipeModule {
}
EndOfYesterdayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfYesterdayPipe],
                exports: [EndOfYesterdayPipe]
            },] }
];

class GetDatePipe {
    transform(date) {
        return getDate(date);
    }
}
GetDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDate' },] }
];
class GetDatePipeModule {
}
GetDatePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDatePipe],
                exports: [GetDatePipe]
            },] }
];

class GetDayOfYearPipe {
    transform(date) {
        return getDayOfYear(date);
    }
}
GetDayOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDayOfYear' },] }
];
class GetDayOfYearPipeModule {
}
GetDayOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDayOfYearPipe],
                exports: [GetDayOfYearPipe]
            },] }
];

class GetDayPipe {
    transform(date) {
        return getDay(date);
    }
}
GetDayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDay' },] }
];
class GetDayPipeModule {
}
GetDayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDayPipe],
                exports: [GetDayPipe]
            },] }
];

class GetDaysInMonthPipe {
    transform(date) {
        return getDaysInMonth(date);
    }
}
GetDaysInMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDaysInMonth' },] }
];
class GetDaysInMonthPipeModule {
}
GetDaysInMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDaysInMonthPipe],
                exports: [GetDaysInMonthPipe]
            },] }
];

class GetDaysInYearPipe {
    transform(date) {
        return getDaysInYear(date);
    }
}
GetDaysInYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDaysInYear' },] }
];
class GetDaysInYearPipeModule {
}
GetDaysInYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDaysInYearPipe],
                exports: [GetDaysInYearPipe]
            },] }
];

class GetHoursPipe {
    transform(date) {
        return getHours(date);
    }
}
GetHoursPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetHours' },] }
];
class GetHoursPipeModule {
}
GetHoursPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetHoursPipe],
                exports: [GetHoursPipe]
            },] }
];

class GetISODayPipe {
    transform(date) {
        return getISODay(date);
    }
}
GetISODayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetISODay' },] }
];
class GetISODayPipeModule {
}
GetISODayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetISODayPipe],
                exports: [GetISODayPipe]
            },] }
];

class GetISOWeekPipe {
    transform(date) {
        return getISOWeek(date);
    }
}
GetISOWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetISOWeek' },] }
];
class GetISOWeekPipeModule {
}
GetISOWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetISOWeekPipe],
                exports: [GetISOWeekPipe]
            },] }
];

class GetISOWeeksInYearPipe {
    transform(date) {
        return getISOWeeksInYear(date);
    }
}
GetISOWeeksInYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetISOWeeksInYear' },] }
];
class GetISOWeeksInYearPipeModule {
}
GetISOWeeksInYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetISOWeeksInYearPipe],
                exports: [GetISOWeeksInYearPipe]
            },] }
];

class GetMillisecondsPipe {
    transform(date) {
        return getMilliseconds(date);
    }
}
GetMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetMilliseconds' },] }
];
class GetMillisecondsPipeModule {
}
GetMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetMillisecondsPipe],
                exports: [GetMillisecondsPipe]
            },] }
];

class GetMinutesPipe {
    transform(date) {
        return getMinutes(date);
    }
}
GetMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetMinutes' },] }
];
class GetMinutesPipeModule {
}
GetMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetMinutesPipe],
                exports: [GetMinutesPipe]
            },] }
];

class GetMonthPipe {
    transform(date) {
        return getMonth(date);
    }
}
GetMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetMonth' },] }
];
class GetMonthPipeModule {
}
GetMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetMonthPipe],
                exports: [GetMonthPipe]
            },] }
];

class GetOverlappingDaysInIntervalsPipe {
    transform(intervalLeft, intervalRight) {
        return getOverlappingDaysInIntervals(intervalLeft, intervalRight);
    }
}
GetOverlappingDaysInIntervalsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetOverlappingDaysInIntervals' },] }
];
class GetOverlappingDaysInIntervalsPipeModule {
}
GetOverlappingDaysInIntervalsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetOverlappingDaysInIntervalsPipe],
                exports: [GetOverlappingDaysInIntervalsPipe]
            },] }
];

class GetQuarterPipe {
    transform(date) {
        return getQuarter(date);
    }
}
GetQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetQuarter' },] }
];
class GetQuarterPipeModule {
}
GetQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetQuarterPipe],
                exports: [GetQuarterPipe]
            },] }
];

class GetSecondsPipe {
    transform(date) {
        return getSeconds(date);
    }
}
GetSecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetSeconds' },] }
];
class GetSecondsPipeModule {
}
GetSecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetSecondsPipe],
                exports: [GetSecondsPipe]
            },] }
];

class GetTimePipe {
    transform(date) {
        return getTime(date);
    }
}
GetTimePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetTime' },] }
];
class GetTimePipeModule {
}
GetTimePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetTimePipe],
                exports: [GetTimePipe]
            },] }
];

class GetYearPipe {
    transform(date) {
        return getYear(date);
    }
}
GetYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetYear' },] }
];
class GetYearPipeModule {
}
GetYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetYearPipe],
                exports: [GetYearPipe]
            },] }
];

class GetUnixTimePipe {
    transform(date) {
        return getUnixTime(date);
    }
}
GetUnixTimePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetUnixTime' },] }
];
class GetUnixTimePipeModule {
}
GetUnixTimePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetUnixTimePipe],
                exports: [GetUnixTimePipe]
            },] }
];

class GetWeekPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return getWeek(date, calculateLocale(options, this.config));
    }
}
GetWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeek', pure: false },] }
];
GetWeekPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class GetWeekPipeModule {
}
GetWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekPipe],
                exports: [GetWeekPipe]
            },] }
];

class GetWeekOfMonthPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return getWeekOfMonth(date, calculateLocale(options, this.config));
    }
}
GetWeekOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekOfMonth', pure: false },] }
];
GetWeekOfMonthPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class GetWeekOfMonthPipeModule {
}
GetWeekOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekOfMonthPipe],
                exports: [GetWeekOfMonthPipe]
            },] }
];

class GetWeeksInMonthPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return getWeeksInMonth(date, calculateLocale(options, this.config));
    }
}
GetWeeksInMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeeksInMonth', pure: false },] }
];
GetWeeksInMonthPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class GetWeeksInMonthPipeModule {
}
GetWeeksInMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeeksInMonthPipe],
                exports: [GetWeeksInMonthPipe]
            },] }
];

class GetDecadePipe {
    transform(date) {
        return getDecade(date);
    }
}
GetDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDecade' },] }
];
class GetDecadePipeModule {
}
GetDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDecadePipe],
                exports: [GetDecadePipe]
            },] }
];

class GetWeekYearPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return getWeekYear(date, calculateLocale(options, this.config));
    }
}
GetWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekYear', pure: false },] }
];
GetWeekYearPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class GetWeekYearPipeModule {
}
GetWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekYearPipe],
                exports: [GetWeekYearPipe]
            },] }
];

class LastDayOfISOWeekPipe {
    transform(date) {
        return lastDayOfISOWeek(date);
    }
}
LastDayOfISOWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfISOWeek' },] }
];
class LastDayOfISOWeekPipeModule {
}
LastDayOfISOWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfISOWeekPipe],
                exports: [LastDayOfISOWeekPipe]
            },] }
];

class LastDayOfISOWeekYearPipe {
    transform(date) {
        return lastDayOfISOWeekYear(date);
    }
}
LastDayOfISOWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfISOWeekYear' },] }
];
class LastDayOfISOWeekYearPipeModule {
}
LastDayOfISOWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfISOWeekYearPipe],
                exports: [LastDayOfISOWeekYearPipe]
            },] }
];

class LastDayOfMonthPipe {
    transform(date) {
        return lastDayOfMonth(date);
    }
}
LastDayOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfMonth' },] }
];
class LastDayOfMonthPipeModule {
}
LastDayOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfMonthPipe],
                exports: [LastDayOfMonthPipe]
            },] }
];

class LastDayOfQuarterPipe {
    transform(date) {
        return lastDayOfQuarter(date);
    }
}
LastDayOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfQuarter' },] }
];
class LastDayOfQuarterPipeModule {
}
LastDayOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfQuarterPipe],
                exports: [LastDayOfQuarterPipe]
            },] }
];

class LastDayOfWeekPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return lastDayOfWeek(date, calculateLocale(options, this.config));
    }
}
LastDayOfWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfWeek', pure: false },] }
];
LastDayOfWeekPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class LastDayOfWeekPipeModule {
}
LastDayOfWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfWeekPipe],
                exports: [LastDayOfWeekPipe]
            },] }
];

class LastDayOfYearPipe {
    transform(date) {
        return lastDayOfYear(date);
    }
}
LastDayOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfYear' },] }
];
class LastDayOfYearPipeModule {
}
LastDayOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfYearPipe],
                exports: [LastDayOfYearPipe]
            },] }
];

class LastDayOfDecadePipe {
    transform(date) {
        return lastDayOfDecade(date);
    }
}
LastDayOfDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfDecade' },] }
];
class LastDayOfDecadePipeModule {
}
LastDayOfDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfDecadePipe],
                exports: [LastDayOfDecadePipe]
            },] }
];

class MaxPipe {
    transform(dates) {
        return max(dates);
    }
}
MaxPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsMax' },] }
];
class MaxPipeModule {
}
MaxPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MaxPipe],
                exports: [MaxPipe]
            },] }
];

class MinPipe {
    transform(dates) {
        return min(dates);
    }
}
MinPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsMin' },] }
];
class MinPipeModule {
}
MinPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MinPipe],
                exports: [MinPipe]
            },] }
];

class StartOfDayPipe {
    transform(date) {
        return startOfDay(date);
    }
}
StartOfDayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfDay' },] }
];
class StartOfDayPipeModule {
}
StartOfDayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfDayPipe],
                exports: [StartOfDayPipe]
            },] }
];

class StartOfHourPipe {
    transform(date) {
        return startOfHour(date);
    }
}
StartOfHourPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfHour' },] }
];
class StartOfHourPipeModule {
}
StartOfHourPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfHourPipe],
                exports: [StartOfHourPipe]
            },] }
];

class StartOfISOWeekPipe {
    transform(date) {
        return startOfISOWeek(date);
    }
}
StartOfISOWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfISOWeek' },] }
];
class StartOfISOWeekPipeModule {
}
StartOfISOWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfISOWeekPipe],
                exports: [StartOfISOWeekPipe]
            },] }
];

class StartOfISOWeekYearPipe {
    transform(date) {
        return startOfISOWeekYear(date);
    }
}
StartOfISOWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfISOWeekYear' },] }
];
class StartOfISOWeekYearPipeModule {
}
StartOfISOWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfISOWeekYearPipe],
                exports: [StartOfISOWeekYearPipe]
            },] }
];

class StartOfMinutePipe {
    transform(date) {
        return startOfMinute(date);
    }
}
StartOfMinutePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfMinute' },] }
];
class StartOfMinutePipeModule {
}
StartOfMinutePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfMinutePipe],
                exports: [StartOfMinutePipe]
            },] }
];

class StartOfMonthPipe {
    transform(date) {
        return startOfMonth(date);
    }
}
StartOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfMonth' },] }
];
class StartOfMonthPipeModule {
}
StartOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfMonthPipe],
                exports: [StartOfMonthPipe]
            },] }
];

class StartOfQuarterPipe {
    transform(date) {
        return startOfQuarter(date);
    }
}
StartOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfQuarter' },] }
];
class StartOfQuarterPipeModule {
}
StartOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfQuarterPipe],
                exports: [StartOfQuarterPipe]
            },] }
];

class StartOfSecondPipe {
    transform(date) {
        return startOfSecond(date);
    }
}
StartOfSecondPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfSecond' },] }
];
class StartOfSecondPipeModule {
}
StartOfSecondPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfSecondPipe],
                exports: [StartOfSecondPipe]
            },] }
];

class StartOfTodayPipe {
    transform() {
        return startOfToday();
    }
}
StartOfTodayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfToday' },] }
];
class StartOfTodayPipeModule {
}
StartOfTodayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfTodayPipe],
                exports: [StartOfTodayPipe]
            },] }
];

class StartOfTomorrowPipe {
    transform() {
        return startOfTomorrow();
    }
}
StartOfTomorrowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfTomorrow' },] }
];
class StartOfTomorrowPipeModule {
}
StartOfTomorrowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfTomorrowPipe],
                exports: [StartOfTomorrowPipe]
            },] }
];

class StartOfWeekPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return startOfWeek(date, calculateLocale(options, this.config));
    }
}
StartOfWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfWeek', pure: false },] }
];
StartOfWeekPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class StartOfWeekPipeModule {
}
StartOfWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfWeekPipe],
                exports: [StartOfWeekPipe]
            },] }
];

class StartOfYearPipe {
    transform(date) {
        return startOfYear(date);
    }
}
StartOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfYear' },] }
];
class StartOfYearPipeModule {
}
StartOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfYearPipe],
                exports: [StartOfYearPipe]
            },] }
];

class StartOfYesterdayPipe {
    transform() {
        return startOfYesterday();
    }
}
StartOfYesterdayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfYesterday' },] }
];
class StartOfYesterdayPipeModule {
}
StartOfYesterdayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfYesterdayPipe],
                exports: [StartOfYesterdayPipe]
            },] }
];

class StartOfDecadePipe {
    transform(date) {
        return startOfDecade(date);
    }
}
StartOfDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfDecade' },] }
];
class StartOfDecadePipeModule {
}
StartOfDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfDecadePipe],
                exports: [StartOfDecadePipe]
            },] }
];

class StartOfWeekYearPipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(date, options) {
        return startOfWeekYear(date, calculateLocale(options, this.config));
    }
}
StartOfWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfWeekYear', pure: false },] }
];
StartOfWeekYearPipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class StartOfWeekYearPipeModule {
}
StartOfWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfWeekYearPipe],
                exports: [StartOfWeekYearPipe]
            },] }
];

class SubDaysPipe {
    transform(date, amount) {
        return subDays(date, amount);
    }
}
SubDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubDays' },] }
];
class SubDaysPipeModule {
}
SubDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubDaysPipe],
                exports: [SubDaysPipe]
            },] }
];

class SubHoursPipe {
    transform(date, amount) {
        return subHours(date, amount);
    }
}
SubHoursPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubHours' },] }
];
class SubHoursPipeModule {
}
SubHoursPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubHoursPipe],
                exports: [SubHoursPipe]
            },] }
];

class SubISOWeekYearsPipe {
    transform(date, amount) {
        return subISOWeekYears(date, amount);
    }
}
SubISOWeekYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubISOWeekYears' },] }
];
class SubISOWeekYearsPipeModule {
}
SubISOWeekYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubISOWeekYearsPipe],
                exports: [SubISOWeekYearsPipe]
            },] }
];

class SubMillisecondsPipe {
    transform(date, amount) {
        return subMilliseconds(date, amount);
    }
}
SubMillisecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubMilliseconds' },] }
];
class SubMillisecondsPipeModule {
}
SubMillisecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubMillisecondsPipe],
                exports: [SubMillisecondsPipe]
            },] }
];

class SubMinutesPipe {
    transform(date, amount) {
        return subMinutes(date, amount);
    }
}
SubMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubMinutes' },] }
];
class SubMinutesPipeModule {
}
SubMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubMinutesPipe],
                exports: [SubMinutesPipe]
            },] }
];

class SubMonthsPipe {
    transform(date, amount) {
        return subMonths(date, amount);
    }
}
SubMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubMonths' },] }
];
class SubMonthsPipeModule {
}
SubMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubMonthsPipe],
                exports: [SubMonthsPipe]
            },] }
];

class SubQuartersPipe {
    transform(date, amount) {
        return subQuarters(date, amount);
    }
}
SubQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubQuarters' },] }
];
class SubQuartersPipeModule {
}
SubQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubQuartersPipe],
                exports: [SubQuartersPipe]
            },] }
];

class SubSecondsPipe {
    transform(date, amount) {
        return subSeconds(date, amount);
    }
}
SubSecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubSeconds' },] }
];
class SubSecondsPipeModule {
}
SubSecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubSecondsPipe],
                exports: [SubSecondsPipe]
            },] }
];

class SubWeeksPipe {
    transform(date, amount) {
        return subWeeks(date, amount);
    }
}
SubWeeksPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubWeeks' },] }
];
class SubWeeksPipeModule {
}
SubWeeksPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubWeeksPipe],
                exports: [SubWeeksPipe]
            },] }
];

class SubYearsPipe {
    transform(date, amount) {
        return subYears(date, amount);
    }
}
SubYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubYears' },] }
];
class SubYearsPipeModule {
}
SubYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubYearsPipe],
                exports: [SubYearsPipe]
            },] }
];

class IsAfterPipe {
    transform(date, dateToCompare) {
        return isAfter(date, dateToCompare);
    }
}
IsAfterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsAfter' },] }
];
class IsAfterPipeModule {
}
IsAfterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsAfterPipe],
                exports: [IsAfterPipe]
            },] }
];

class IsBeforePipe {
    transform(date, dateToCompare) {
        return isBefore(date, dateToCompare);
    }
}
IsBeforePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsBefore' },] }
];
class IsBeforePipeModule {
}
IsBeforePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsBeforePipe],
                exports: [IsBeforePipe]
            },] }
];

class IsDatePipe {
    transform(date) {
        return isDate(date);
    }
}
IsDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsDate' },] }
];
class IsDatePipeModule {
}
IsDatePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsDatePipe],
                exports: [IsDatePipe]
            },] }
];

class IsEqualPipe {
    transform(dateLeft, dateRight) {
        return isEqual(dateLeft, dateRight);
    }
}
IsEqualPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsEqual' },] }
];
class IsEqualPipeModule {
}
IsEqualPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsEqualPipe],
                exports: [IsEqualPipe]
            },] }
];

class IsFuturePipe {
    transform(date) {
        return isFuture(date);
    }
}
IsFuturePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsFuture' },] }
];
class IsFuturePipeModule {
}
IsFuturePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsFuturePipe],
                exports: [IsFuturePipe]
            },] }
];

class IsPastPipe {
    transform(date) {
        return isPast(date);
    }
}
IsPastPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsPast' },] }
];
class IsPastPipeModule {
}
IsPastPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsPastPipe],
                exports: [IsPastPipe]
            },] }
];

class IsValidPipe {
    transform(date) {
        return isValid(date);
    }
}
IsValidPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsValid' },] }
];
class IsValidPipeModule {
}
IsValidPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsValidPipe],
                exports: [IsValidPipe]
            },] }
];

class IsTodayPipe {
    transform(date) {
        return isToday(date);
    }
}
IsTodayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsToday' },] }
];
class IsTodayPipeModule {
}
IsTodayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsTodayPipe],
                exports: [IsTodayPipe]
            },] }
];

class IsTomorrowPipe {
    transform(date) {
        return isTomorrow(date);
    }
}
IsTomorrowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsTomorrow' },] }
];
class IsTomorrowPipeModule {
}
IsTomorrowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsTomorrowPipe],
                exports: [IsTomorrowPipe]
            },] }
];

class IsWeekendPipe {
    transform(date) {
        return isWeekend(date);
    }
}
IsWeekendPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsWeekend' },] }
];
class IsWeekendPipeModule {
}
IsWeekendPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsWeekendPipe],
                exports: [IsWeekendPipe]
            },] }
];

class IsSameMonthPipe {
    transform(dateLeft, dateRight) {
        return isSameMonth(dateLeft, dateRight);
    }
}
IsSameMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsSameMonth' },] }
];
class IsSameMonthPipeModule {
}
IsSameMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsSameMonthPipe],
                exports: [IsSameMonthPipe]
            },] }
];

class ParsePipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(dateString, formatString, backupDate, options) {
        return parse(dateString, formatString, backupDate, calculateLocale(options, this.config));
    }
}
ParsePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsParse', pure: false },] }
];
ParsePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class ParsePipeModule {
}
ParsePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParsePipe],
                exports: [ParsePipe]
            },] }
];

const formats = {
    x1: 'eeeee',
    x2: 'eeeeee',
    x3: 'eee',
    full: 'eeee'
};
class WeekdayNamePipe {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.localeChanged$ = this.config.localeChanged.subscribe(_ => this.cd.markForCheck());
    }
    ngOnDestroy() {
        this.localeChanged$.unsubscribe();
    }
    transform(day, view = 'full', options) {
        const locale = calculateLocale(options, this.config);
        const now = new Date();
        const week = eachDayOfInterval({
            start: startOfWeek(now, locale),
            end: endOfWeek(now, locale)
        });
        return format(week[day], formats[view], locale);
    }
}
WeekdayNamePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsWeekdayName', pure: false },] }
];
WeekdayNamePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService },
    { type: ChangeDetectorRef }
];
class WeekdayNamePipeModule {
}
WeekdayNamePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WeekdayNamePipe],
                exports: [WeekdayNamePipe]
            },] }
];

class IsSameYearPipe {
    transform(dateLeft, dateRight) {
        return isSameYear(dateLeft, dateRight);
    }
}
IsSameYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsSameYear' },] }
];
class IsSameYearPipeModule {
}
IsSameYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsSameYearPipe],
                exports: [IsSameYearPipe]
            },] }
];

class DifferenceInCalendarQuartersPipe {
    transform(dateLeft, dateRight) {
        return differenceInCalendarQuarters(dateLeft, dateRight);
    }
}
DifferenceInCalendarQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInCalendarQuarters' },] }
];
class DifferenceInCalendarQuartersPipeModule {
}
DifferenceInCalendarQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInCalendarQuartersPipe],
                exports: [DifferenceInCalendarQuartersPipe]
            },] }
];

class GetISOWeekYearPipe {
    transform(date) {
        return getISOWeekYear(date);
    }
}
GetISOWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetISOWeekYear' },] }
];
class GetISOWeekYearPipeModule {
}
GetISOWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetISOWeekYearPipe],
                exports: [GetISOWeekYearPipe]
            },] }
];

class FormatPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, dateFormat, options) {
        return format(date, dateFormat, calculateLocale(options, this.config));
    }
}
FormatPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatPure' },] }
];
FormatPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class FormatPurePipeModule {
}
FormatPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatPurePipe],
                exports: [FormatPurePipe]
            },] }
];

class FormatRelativePurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, baseDate = new Date(), options) {
        const formatRelativeLocale = {
            lastWeek: 'eeee',
            yesterday: '\'Gestern\'',
            today: '\'Heute\'',
            tomorrow: '\'Morgen\'',
            nextWeek: 'eeee',
            other: 'eeee'
        };
        const locale = Object.assign(Object.assign({}, de), { formatRelative: (token) => formatRelativeLocale[token] });
        return formatRelative(date, baseDate, { locale });
    }
}
FormatRelativePurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatRelativePure' },] }
];
FormatRelativePurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class FormatRelativePurePipeModule {
}
FormatRelativePurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatRelativePurePipe],
                exports: [FormatRelativePurePipe]
            },] }
];

class FormatDistancePurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, dateToCompare, options) {
        return formatDistance(date, dateToCompare, calculateLocale(options, this.config));
    }
}
FormatDistancePurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistancePure' },] }
];
FormatDistancePurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class FormatDistancePurePipeModule {
}
FormatDistancePurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistancePurePipe],
                exports: [FormatDistancePurePipe]
            },] }
];

class FormatDistanceStrictPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, dateToCompare, options) {
        return formatDistanceStrict(date, dateToCompare, calculateLocale(options, this.config));
    }
}
FormatDistanceStrictPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistanceStrictPure' },] }
];
FormatDistanceStrictPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class FormatDistanceStrictPurePipeModule {
}
FormatDistanceStrictPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistanceStrictPurePipe],
                exports: [FormatDistanceStrictPurePipe]
            },] }
];

class FormatDistanceToNowPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return formatDistanceToNow(date, calculateLocale(options, this.config));
    }
}
FormatDistanceToNowPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsFormatDistanceToNowPure' },] }
];
FormatDistanceToNowPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class FormatDistanceToNowPurePipeModule {
}
FormatDistanceToNowPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistanceToNowPurePipe],
                exports: [FormatDistanceToNowPurePipe]
            },] }
];

class GetWeekPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return getWeek(date, calculateLocale(options, this.config));
    }
}
GetWeekPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekPure' },] }
];
GetWeekPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class GetWeekPurePipeModule {
}
GetWeekPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekPurePipe],
                exports: [GetWeekPurePipe]
            },] }
];

class GetWeekOfMonthPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return getWeekOfMonth(date, calculateLocale(options, this.config));
    }
}
GetWeekOfMonthPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekOfMonthPure' },] }
];
GetWeekOfMonthPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class GetWeekOfMonthPurePipeModule {
}
GetWeekOfMonthPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekOfMonthPurePipe],
                exports: [GetWeekOfMonthPurePipe]
            },] }
];

class GetWeeksInMonthPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return getWeeksInMonth(date, calculateLocale(options, this.config));
    }
}
GetWeeksInMonthPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeeksInMonthPure' },] }
];
GetWeeksInMonthPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class GetWeeksInMonthPurePipeModule {
}
GetWeeksInMonthPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeeksInMonthPurePipe],
                exports: [GetWeeksInMonthPurePipe]
            },] }
];

class GetWeekYearPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return getWeekYear(date, calculateLocale(options, this.config));
    }
}
GetWeekYearPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetWeekYearPure' },] }
];
GetWeekYearPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class GetWeekYearPurePipeModule {
}
GetWeekYearPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetWeekYearPurePipe],
                exports: [GetWeekYearPurePipe]
            },] }
];

class StartOfWeekPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return startOfWeek(date, calculateLocale(options, this.config));
    }
}
StartOfWeekPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfWeekPure' },] }
];
StartOfWeekPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class StartOfWeekPurePipeModule {
}
StartOfWeekPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfWeekPurePipe],
                exports: [StartOfWeekPurePipe]
            },] }
];

class StartOfWeekYearPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return startOfWeekYear(date, calculateLocale(options, this.config));
    }
}
StartOfWeekYearPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfWeekYearPure' },] }
];
StartOfWeekYearPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class StartOfWeekYearPurePipeModule {
}
StartOfWeekYearPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfWeekYearPurePipe],
                exports: [StartOfWeekYearPurePipe]
            },] }
];

class LastDayOfWeekPurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(date, options) {
        return lastDayOfWeek(date, calculateLocale(options, this.config));
    }
}
LastDayOfWeekPurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfWeekPure' },] }
];
LastDayOfWeekPurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class LastDayOfWeekPurePipeModule {
}
LastDayOfWeekPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfWeekPurePipe],
                exports: [LastDayOfWeekPurePipe]
            },] }
];

class ParsePurePipe {
    constructor(config) {
        this.config = config;
    }
    transform(dateString, formatString, backupDate, options) {
        return parse(dateString, formatString, backupDate, calculateLocale(options, this.config));
    }
}
ParsePurePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsParsePure' },] }
];
ParsePurePipe.ctorParameters = () => [
    { type: DateFnsConfigurationService }
];
class ParsePurePipeModule {
}
ParsePurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParsePurePipe],
                exports: [ParsePurePipe]
            },] }
];

class ParseIsoPipe {
    transform(dateString, options) {
        if (dateString instanceof Date) {
            return dateString;
        }
        return parseISO(dateString, options);
    }
}
ParseIsoPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsParseIso' },] }
];
class ParseIsoPipeModule {
}
ParseIsoPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParseIsoPipe],
                exports: [ParseIsoPipe]
            },] }
];

const PIPES = [
    AddBusinessDaysPipeModule,
    AddDaysPipeModule,
    AddHoursPipeModule,
    AddISOWeekYearsPipeModule,
    AddMillisecondsPipeModule,
    AddMinutesPipeModule,
    AddMonthsPipeModule,
    AddQuartersPipeModule,
    AddSecondsPipeModule,
    AddWeeksPipeModule,
    AddYearsPipeModule,
    ClosestToPipeModule,
    FormatPipeModule,
    DifferenceInCalendarDaysPipeModule,
    DifferenceInCalendarISOWeeksPipeModule,
    DifferenceInCalendarISOWeekYearsPipeModule,
    DifferenceInCalendarQuartersPipeModule,
    DifferenceInCalendarMonthsPipeModule,
    DifferenceInCalendarWeeksPipeModule,
    DifferenceInCalendarYearsPipeModule,
    DifferenceInDaysPipeModule,
    DifferenceInHoursPipeModule,
    DifferenceInISOWeekYearsPipeModule,
    DifferenceInMillisecondsPipeModule,
    DifferenceInMinutesPipeModule,
    DifferenceInMonthsPipeModule,
    DifferenceInQuartersPipeModule,
    DifferenceInSecondsPipeModule,
    DifferenceInWeeksPipeModule,
    DifferenceInYearsPipeModule,
    DifferenceInBusinessDaysPipeModule,
    FormatDistancePipeModule,
    FormatDistanceStrictPipeModule,
    FormatDistanceToNowPipeModule,
    EndOfDayPipeModule,
    EndOfHourPipeModule,
    EndOfISOWeekYearPipeModule,
    EndOfISOWeekPipeModule,
    EndOfMinutePipeModule,
    EndOfMonthPipeModule,
    EndOfQuarterPipeModule,
    EndOfSecondPipeModule,
    EndOfTodayPipeModule,
    EndOfTomorrowPipeModule,
    EndOfWeekPipeModule,
    EndOfYearPipeModule,
    EndOfYesterdayPipeModule,
    GetDatePipeModule,
    GetDayOfYearPipeModule,
    GetDayPipeModule,
    GetDaysInMonthPipeModule,
    GetDaysInYearPipeModule,
    GetHoursPipeModule,
    GetISODayPipeModule,
    GetISOWeekPipeModule,
    GetISOWeeksInYearPipeModule,
    GetISOWeekYearPipeModule,
    GetMillisecondsPipeModule,
    GetMinutesPipeModule,
    GetMonthPipeModule,
    GetOverlappingDaysInIntervalsPipeModule,
    GetQuarterPipeModule,
    GetSecondsPipeModule,
    GetTimePipeModule,
    GetUnixTimePipeModule,
    GetYearPipeModule,
    GetWeekPipeModule,
    GetWeekOfMonthPipeModule,
    GetWeeksInMonthPipeModule,
    GetDecadePipeModule,
    GetWeekYearPipeModule,
    LastDayOfISOWeekPipeModule,
    LastDayOfISOWeekYearPipeModule,
    LastDayOfMonthPipeModule,
    LastDayOfQuarterPipeModule,
    LastDayOfWeekPipeModule,
    LastDayOfYearPipeModule,
    LastDayOfDecadePipeModule,
    MaxPipeModule,
    MinPipeModule,
    StartOfDayPipeModule,
    StartOfHourPipeModule,
    StartOfISOWeekPipeModule,
    StartOfISOWeekYearPipeModule,
    StartOfMinutePipeModule,
    StartOfMonthPipeModule,
    StartOfQuarterPipeModule,
    StartOfSecondPipeModule,
    StartOfTodayPipeModule,
    StartOfTomorrowPipeModule,
    StartOfWeekPipeModule,
    StartOfYearPipeModule,
    StartOfYesterdayPipeModule,
    StartOfDecadePipeModule,
    StartOfWeekYearPipeModule,
    SubDaysPipeModule,
    SubHoursPipeModule,
    SubISOWeekYearsPipeModule,
    SubMillisecondsPipeModule,
    SubMinutesPipeModule,
    SubMonthsPipeModule,
    SubQuartersPipeModule,
    SubSecondsPipeModule,
    SubWeeksPipeModule,
    SubYearsPipeModule,
    IsAfterPipeModule,
    IsBeforePipeModule,
    IsDatePipeModule,
    IsEqualPipeModule,
    IsFuturePipeModule,
    IsPastPipeModule,
    IsValidPipeModule,
    IsTodayPipeModule,
    IsTomorrowPipeModule,
    IsWeekendPipeModule,
    IsSameMonthPipeModule,
    ParsePipeModule,
    WeekdayNamePipeModule,
    IsSameYearPipeModule,
    FormatPurePipeModule,
    FormatRelativePurePipeModule,
    FormatDistancePurePipeModule,
    FormatDistanceStrictPurePipeModule,
    FormatDistanceToNowPurePipeModule,
    GetWeekPurePipeModule,
    GetWeekOfMonthPurePipeModule,
    GetWeeksInMonthPurePipeModule,
    GetWeekYearPurePipeModule,
    StartOfWeekPurePipeModule,
    StartOfWeekYearPurePipeModule,
    LastDayOfWeekPurePipeModule,
    ParsePurePipeModule,
    ParseIsoPipeModule
];
class DateFnsModule {
    static forRoot() {
        return {
            ngModule: DateFnsModule,
            providers: [DateFnsConfigurationService]
        };
    }
}
DateFnsModule.decorators = [
    { type: NgModule, args: [{
                exports: PIPES
            },] }
];

// TODO: add exports from module imports

/**
 * Generated bundle index. Do not edit.
 */

export { AddBusinessDaysPipe, AddBusinessDaysPipeModule, AddDaysPipe, AddDaysPipeModule, AddHoursPipe, AddHoursPipeModule, AddISOWeekYearsPipe, AddISOWeekYearsPipeModule, AddMillisecondsPipe, AddMillisecondsPipeModule, AddMinutesPipe, AddMinutesPipeModule, AddMonthsPipe, AddMonthsPipeModule, AddQuartersPipe, AddQuartersPipeModule, AddSecondsPipe, AddSecondsPipeModule, AddWeeksPipe, AddWeeksPipeModule, AddYearsPipe, AddYearsPipeModule, ClosestToPipe, ClosestToPipeModule, DateFnsConfigurationService, DateFnsModule, DifferenceInBusinessDaysPipe, DifferenceInBusinessDaysPipeModule, DifferenceInCalendarDaysPipe, DifferenceInCalendarDaysPipeModule, DifferenceInCalendarISOWeekYearsPipe, DifferenceInCalendarISOWeekYearsPipeModule, DifferenceInCalendarISOWeeksPipe, DifferenceInCalendarISOWeeksPipeModule, DifferenceInCalendarMonthsPipe, DifferenceInCalendarMonthsPipeModule, DifferenceInCalendarQuartersPipe, DifferenceInCalendarQuartersPipeModule, DifferenceInCalendarWeeksPipe, DifferenceInCalendarWeeksPipeModule, DifferenceInCalendarYearsPipe, DifferenceInCalendarYearsPipeModule, DifferenceInDaysPipe, DifferenceInDaysPipeModule, DifferenceInHoursPipe, DifferenceInHoursPipeModule, DifferenceInISOWeekYearsPipe, DifferenceInISOWeekYearsPipeModule, DifferenceInMillisecondsPipe, DifferenceInMillisecondsPipeModule, DifferenceInMinutesPipe, DifferenceInMinutesPipeModule, DifferenceInMonthsPipe, DifferenceInMonthsPipeModule, DifferenceInQuartersPipe, DifferenceInQuartersPipeModule, DifferenceInSecondsPipe, DifferenceInSecondsPipeModule, DifferenceInWeeksPipe, DifferenceInWeeksPipeModule, DifferenceInYearsPipe, DifferenceInYearsPipeModule, EndOfDayPipe, EndOfDayPipeModule, EndOfHourPipe, EndOfHourPipeModule, EndOfISOWeekPipe, EndOfISOWeekPipeModule, EndOfISOWeekYearPipe, EndOfISOWeekYearPipeModule, EndOfMinutePipe, EndOfMinutePipeModule, EndOfMonthPipe, EndOfMonthPipeModule, EndOfQuarterPipe, EndOfQuarterPipeModule, EndOfSecondPipe, EndOfSecondPipeModule, EndOfTodayPipe, EndOfTodayPipeModule, EndOfTomorrowPipe, EndOfTomorrowPipeModule, EndOfWeekPipe, EndOfWeekPipeModule, EndOfYearPipe, EndOfYearPipeModule, EndOfYesterdayPipe, EndOfYesterdayPipeModule, FormatDistancePipe, FormatDistancePipeModule, FormatDistancePurePipe, FormatDistancePurePipeModule, FormatDistanceStrictPipe, FormatDistanceStrictPipeModule, FormatDistanceStrictPurePipe, FormatDistanceStrictPurePipeModule, FormatDistanceToNowPipe, FormatDistanceToNowPipeModule, FormatDistanceToNowPurePipe, FormatDistanceToNowPurePipeModule, FormatPipe, FormatPipeModule, FormatPurePipe, FormatPurePipeModule, FormatRelativePurePipe, FormatRelativePurePipeModule, GetDatePipe, GetDatePipeModule, GetDayOfYearPipe, GetDayOfYearPipeModule, GetDayPipe, GetDayPipeModule, GetDaysInMonthPipe, GetDaysInMonthPipeModule, GetDaysInYearPipe, GetDaysInYearPipeModule, GetDecadePipe, GetDecadePipeModule, GetHoursPipe, GetHoursPipeModule, GetISODayPipe, GetISODayPipeModule, GetISOWeekPipe, GetISOWeekPipeModule, GetISOWeekYearPipe, GetISOWeekYearPipeModule, GetISOWeeksInYearPipe, GetISOWeeksInYearPipeModule, GetMillisecondsPipe, GetMillisecondsPipeModule, GetMinutesPipe, GetMinutesPipeModule, GetMonthPipe, GetMonthPipeModule, GetOverlappingDaysInIntervalsPipe, GetOverlappingDaysInIntervalsPipeModule, GetQuarterPipe, GetQuarterPipeModule, GetSecondsPipe, GetSecondsPipeModule, GetTimePipe, GetTimePipeModule, GetUnixTimePipe, GetUnixTimePipeModule, GetWeekOfMonthPipe, GetWeekOfMonthPipeModule, GetWeekOfMonthPurePipe, GetWeekOfMonthPurePipeModule, GetWeekPipe, GetWeekPipeModule, GetWeekPurePipe, GetWeekPurePipeModule, GetWeekYearPipe, GetWeekYearPipeModule, GetWeekYearPurePipe, GetWeekYearPurePipeModule, GetWeeksInMonthPipe, GetWeeksInMonthPipeModule, GetWeeksInMonthPurePipe, GetWeeksInMonthPurePipeModule, GetYearPipe, GetYearPipeModule, IsAfterPipe, IsAfterPipeModule, IsBeforePipe, IsBeforePipeModule, IsDatePipe, IsDatePipeModule, IsEqualPipe, IsEqualPipeModule, IsFuturePipe, IsFuturePipeModule, IsPastPipe, IsPastPipeModule, IsSameMonthPipe, IsSameMonthPipeModule, IsSameYearPipe, IsSameYearPipeModule, IsTodayPipe, IsTodayPipeModule, IsTomorrowPipe, IsTomorrowPipeModule, IsValidPipe, IsValidPipeModule, IsWeekendPipe, IsWeekendPipeModule, LastDayOfDecadePipe, LastDayOfDecadePipeModule, LastDayOfISOWeekPipe, LastDayOfISOWeekPipeModule, LastDayOfISOWeekYearPipe, LastDayOfISOWeekYearPipeModule, LastDayOfMonthPipe, LastDayOfMonthPipeModule, LastDayOfQuarterPipe, LastDayOfQuarterPipeModule, LastDayOfWeekPipe, LastDayOfWeekPipeModule, LastDayOfWeekPurePipe, LastDayOfWeekPurePipeModule, LastDayOfYearPipe, LastDayOfYearPipeModule, MaxPipe, MaxPipeModule, MinPipe, MinPipeModule, ParseIsoPipe, ParseIsoPipeModule, ParsePipe, ParsePipeModule, ParsePurePipe, ParsePurePipeModule, StartOfDayPipe, StartOfDayPipeModule, StartOfDecadePipe, StartOfDecadePipeModule, StartOfHourPipe, StartOfHourPipeModule, StartOfISOWeekPipe, StartOfISOWeekPipeModule, StartOfISOWeekYearPipe, StartOfISOWeekYearPipeModule, StartOfMinutePipe, StartOfMinutePipeModule, StartOfMonthPipe, StartOfMonthPipeModule, StartOfQuarterPipe, StartOfQuarterPipeModule, StartOfSecondPipe, StartOfSecondPipeModule, StartOfTodayPipe, StartOfTodayPipeModule, StartOfTomorrowPipe, StartOfTomorrowPipeModule, StartOfWeekPipe, StartOfWeekPipeModule, StartOfWeekPurePipe, StartOfWeekPurePipeModule, StartOfWeekYearPipe, StartOfWeekYearPipeModule, StartOfWeekYearPurePipe, StartOfWeekYearPurePipeModule, StartOfYearPipe, StartOfYearPipeModule, StartOfYesterdayPipe, StartOfYesterdayPipeModule, SubDaysPipe, SubDaysPipeModule, SubHoursPipe, SubHoursPipeModule, SubISOWeekYearsPipe, SubISOWeekYearsPipeModule, SubMillisecondsPipe, SubMillisecondsPipeModule, SubMinutesPipe, SubMinutesPipeModule, SubMonthsPipe, SubMonthsPipeModule, SubQuartersPipe, SubQuartersPipeModule, SubSecondsPipe, SubSecondsPipeModule, SubWeeksPipe, SubWeeksPipeModule, SubYearsPipe, SubYearsPipeModule, WeekdayNamePipe, WeekdayNamePipeModule, calculateLocale };
//# sourceMappingURL=ngx-date-fns.js.map
