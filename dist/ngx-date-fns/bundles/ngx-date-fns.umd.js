(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('date-fns/addBusinessDays'), require('date-fns/addDays'), require('date-fns/addHours'), require('date-fns/addISOWeekYears'), require('date-fns/addMilliseconds'), require('date-fns/addMinutes'), require('date-fns/addMonths'), require('date-fns/addQuarters'), require('date-fns/addSeconds'), require('date-fns/addWeeks'), require('date-fns/addYears'), require('date-fns/closestTo'), require('rxjs'), require('date-fns/format'), require('date-fns/differenceInCalendarDays'), require('date-fns/differenceInCalendarISOWeeks'), require('date-fns/differenceInCalendarISOWeekYears'), require('date-fns/differenceInCalendarMonths'), require('date-fns/differenceInCalendarWeeks'), require('date-fns/differenceInCalendarYears'), require('date-fns/differenceInDays'), require('date-fns/differenceInHours'), require('date-fns/differenceInISOWeekYears'), require('date-fns/differenceInMilliseconds'), require('date-fns/differenceInMinutes'), require('date-fns/differenceInMonths'), require('date-fns/differenceInQuarters'), require('date-fns/differenceInSeconds'), require('date-fns/differenceInWeeks'), require('date-fns/differenceInYears'), require('date-fns/differenceInBusinessDays'), require('date-fns/formatDistance'), require('date-fns/formatDistanceStrict'), require('date-fns/formatDistanceToNow'), require('date-fns/endOfDay'), require('date-fns/endOfHour'), require('date-fns/endOfISOWeek'), require('date-fns/endOfISOWeekYear'), require('date-fns/endOfMinute'), require('date-fns/endOfMonth'), require('date-fns/endOfQuarter'), require('date-fns/endOfSecond'), require('date-fns/endOfToday'), require('date-fns/endOfTomorrow'), require('date-fns/endOfWeek'), require('date-fns/endOfYear'), require('date-fns/endOfYesterday'), require('date-fns/getDate'), require('date-fns/getDayOfYear'), require('date-fns/getDay'), require('date-fns/getDaysInMonth'), require('date-fns/getDaysInYear'), require('date-fns/getHours'), require('date-fns/getISODay'), require('date-fns/getISOWeek'), require('date-fns/getISOWeeksInYear'), require('date-fns/getMilliseconds'), require('date-fns/getMinutes'), require('date-fns/getMonth'), require('date-fns/getOverlappingDaysInIntervals'), require('date-fns/getQuarter'), require('date-fns/getSeconds'), require('date-fns/getTime'), require('date-fns/getYear'), require('date-fns/getUnixTime'), require('date-fns/getWeek'), require('date-fns/getWeekOfMonth'), require('date-fns/getWeeksInMonth'), require('date-fns/getDecade'), require('date-fns/getWeekYear'), require('date-fns/lastDayOfISOWeek'), require('date-fns/lastDayOfISOWeekYear'), require('date-fns/lastDayOfMonth'), require('date-fns/lastDayOfQuarter'), require('date-fns/lastDayOfWeek'), require('date-fns/lastDayOfYear'), require('date-fns/lastDayOfDecade'), require('date-fns/max'), require('date-fns/min'), require('date-fns/startOfDay'), require('date-fns/startOfHour'), require('date-fns/startOfISOWeek'), require('date-fns/startOfISOWeekYear'), require('date-fns/startOfMinute'), require('date-fns/startOfMonth'), require('date-fns/startOfQuarter'), require('date-fns/startOfSecond'), require('date-fns/startOfToday'), require('date-fns/startOfTomorrow'), require('date-fns/startOfWeek'), require('date-fns/startOfYear'), require('date-fns/startOfYesterday'), require('date-fns/startOfDecade'), require('date-fns/startOfWeekYear'), require('date-fns/subDays'), require('date-fns/subHours'), require('date-fns/subISOWeekYears'), require('date-fns/subMilliseconds'), require('date-fns/subMinutes'), require('date-fns/subMonths'), require('date-fns/subQuarters'), require('date-fns/subSeconds'), require('date-fns/subWeeks'), require('date-fns/subYears'), require('date-fns/isAfter'), require('date-fns/isBefore'), require('date-fns/isDate'), require('date-fns/isEqual'), require('date-fns/isFuture'), require('date-fns/isPast'), require('date-fns/isValid'), require('date-fns/isToday'), require('date-fns/isTomorrow'), require('date-fns/isWeekend'), require('date-fns/isSameMonth'), require('date-fns/parse'), require('date-fns/eachDayOfInterval'), require('date-fns/isSameYear'), require('date-fns/differenceInCalendarQuarters'), require('date-fns/getISOWeekYear'), require('date-fns/formatRelative'), require('date-fns/locale/de'), require('date-fns/parseISO')) :
    typeof define === 'function' && define.amd ? define('ngx-date-fns', ['exports', '@angular/core', 'date-fns/addBusinessDays', 'date-fns/addDays', 'date-fns/addHours', 'date-fns/addISOWeekYears', 'date-fns/addMilliseconds', 'date-fns/addMinutes', 'date-fns/addMonths', 'date-fns/addQuarters', 'date-fns/addSeconds', 'date-fns/addWeeks', 'date-fns/addYears', 'date-fns/closestTo', 'rxjs', 'date-fns/format', 'date-fns/differenceInCalendarDays', 'date-fns/differenceInCalendarISOWeeks', 'date-fns/differenceInCalendarISOWeekYears', 'date-fns/differenceInCalendarMonths', 'date-fns/differenceInCalendarWeeks', 'date-fns/differenceInCalendarYears', 'date-fns/differenceInDays', 'date-fns/differenceInHours', 'date-fns/differenceInISOWeekYears', 'date-fns/differenceInMilliseconds', 'date-fns/differenceInMinutes', 'date-fns/differenceInMonths', 'date-fns/differenceInQuarters', 'date-fns/differenceInSeconds', 'date-fns/differenceInWeeks', 'date-fns/differenceInYears', 'date-fns/differenceInBusinessDays', 'date-fns/formatDistance', 'date-fns/formatDistanceStrict', 'date-fns/formatDistanceToNow', 'date-fns/endOfDay', 'date-fns/endOfHour', 'date-fns/endOfISOWeek', 'date-fns/endOfISOWeekYear', 'date-fns/endOfMinute', 'date-fns/endOfMonth', 'date-fns/endOfQuarter', 'date-fns/endOfSecond', 'date-fns/endOfToday', 'date-fns/endOfTomorrow', 'date-fns/endOfWeek', 'date-fns/endOfYear', 'date-fns/endOfYesterday', 'date-fns/getDate', 'date-fns/getDayOfYear', 'date-fns/getDay', 'date-fns/getDaysInMonth', 'date-fns/getDaysInYear', 'date-fns/getHours', 'date-fns/getISODay', 'date-fns/getISOWeek', 'date-fns/getISOWeeksInYear', 'date-fns/getMilliseconds', 'date-fns/getMinutes', 'date-fns/getMonth', 'date-fns/getOverlappingDaysInIntervals', 'date-fns/getQuarter', 'date-fns/getSeconds', 'date-fns/getTime', 'date-fns/getYear', 'date-fns/getUnixTime', 'date-fns/getWeek', 'date-fns/getWeekOfMonth', 'date-fns/getWeeksInMonth', 'date-fns/getDecade', 'date-fns/getWeekYear', 'date-fns/lastDayOfISOWeek', 'date-fns/lastDayOfISOWeekYear', 'date-fns/lastDayOfMonth', 'date-fns/lastDayOfQuarter', 'date-fns/lastDayOfWeek', 'date-fns/lastDayOfYear', 'date-fns/lastDayOfDecade', 'date-fns/max', 'date-fns/min', 'date-fns/startOfDay', 'date-fns/startOfHour', 'date-fns/startOfISOWeek', 'date-fns/startOfISOWeekYear', 'date-fns/startOfMinute', 'date-fns/startOfMonth', 'date-fns/startOfQuarter', 'date-fns/startOfSecond', 'date-fns/startOfToday', 'date-fns/startOfTomorrow', 'date-fns/startOfWeek', 'date-fns/startOfYear', 'date-fns/startOfYesterday', 'date-fns/startOfDecade', 'date-fns/startOfWeekYear', 'date-fns/subDays', 'date-fns/subHours', 'date-fns/subISOWeekYears', 'date-fns/subMilliseconds', 'date-fns/subMinutes', 'date-fns/subMonths', 'date-fns/subQuarters', 'date-fns/subSeconds', 'date-fns/subWeeks', 'date-fns/subYears', 'date-fns/isAfter', 'date-fns/isBefore', 'date-fns/isDate', 'date-fns/isEqual', 'date-fns/isFuture', 'date-fns/isPast', 'date-fns/isValid', 'date-fns/isToday', 'date-fns/isTomorrow', 'date-fns/isWeekend', 'date-fns/isSameMonth', 'date-fns/parse', 'date-fns/eachDayOfInterval', 'date-fns/isSameYear', 'date-fns/differenceInCalendarQuarters', 'date-fns/getISOWeekYear', 'date-fns/formatRelative', 'date-fns/locale/de', 'date-fns/parseISO'], factory) :
    (global = global || self, factory(global['ngx-date-fns'] = {}, global.ng.core, global.addBusinessDays, global.addDays, global.addHours, global.addISOWeekYears, global.addMilliseconds, global.addMinutes, global.addMonths, global.addQuarters, global.addSeconds, global.addWeeks, global.addYears, global.closestTo, global.rxjs, global.format, global.differenceInCalendarDays, global.differenceInCalendarISOWeeks, global.differenceInCalendarISOWeekYears, global.differenceInCalendarMonths, global.differenceInCalendarWeeks, global.differenceInCalendarYears, global.differenceInDays, global.differenceInHours, global.differenceInISOWeekYears, global.differenceInMilliseconds, global.differenceInMinutes, global.differenceInMonths, global.differenceInQuarters, global.differenceInSeconds, global.differenceInWeeks, global.differenceInYears, global.differenceInBusinessDays, global.formatDistance, global.formatDistanceStrict, global.formatDistanceToNow, global.endOfDay, global.endOfHour, global.endOfISOWeek, global.endOfISOWeekYear, global.endOfMinute, global.endOfMonth, global.endOfQuarter, global.endOfSecond, global.endOfToday, global.endOfTomorrow, global.endOfWeek, global.endOfYear, global.endOfYesterday, global.getDate, global.getDayOfYear, global.getDay, global.getDaysInMonth, global.getDaysInYear, global.getHours, global.getISODay, global.getISOWeek, global.getISOWeeksInYear, global.getMilliseconds, global.getMinutes, global.getMonth, global.getOverlappingDaysInIntervals, global.getQuarter, global.getSeconds, global.getTime, global.getYear, global.getUnixTime, global.getWeek, global.getWeekOfMonth, global.getWeeksInMonth, global.getDecade, global.getWeekYear, global.lastDayOfISOWeek, global.lastDayOfISOWeekYear, global.lastDayOfMonth, global.lastDayOfQuarter, global.lastDayOfWeek, global.lastDayOfYear, global.lastDayOfDecade, global.max, global.min, global.startOfDay, global.startOfHour, global.startOfISOWeek, global.startOfISOWeekYear, global.startOfMinute, global.startOfMonth, global.startOfQuarter, global.startOfSecond, global.startOfToday, global.startOfTomorrow, global.startOfWeek, global.startOfYear, global.startOfYesterday, global.startOfDecade, global.startOfWeekYear, global.subDays, global.subHours, global.subISOWeekYears, global.subMilliseconds, global.subMinutes, global.subMonths, global.subQuarters, global.subSeconds, global.subWeeks, global.subYears, global.isAfter, global.isBefore, global.isDate, global.isEqual, global.isFuture, global.isPast, global.isValid, global.isToday, global.isTomorrow, global.isWeekend, global.isSameMonth, global.parse, global.eachDayOfInterval, global.isSameYear, global.differenceInCalendarQuarters, global.getISOWeekYear, global.formatRelative, global.de, global.parseISO));
}(this, (function (exports, i0, addBusinessDays, addDays, addHours, addISOWeekYears, addMilliseconds, addMinutes, addMonths, addQuarters, addSeconds, addWeeks, addYears, closestTo, rxjs, format, differenceInCalendarDays, differenceInCalendarISOWeeks, differenceInCalendarISOWeekYears, differenceInCalendarMonths, differenceInCalendarWeeks, differenceInCalendarYears, differenceInDays, differenceInHours, differenceInISOWeekYears, differenceInMilliseconds, differenceInMinutes, differenceInMonths, differenceInQuarters, differenceInSeconds, differenceInWeeks, differenceInYears, differenceInBusinessDays, formatDistance, formatDistanceStrict, formatDistanceToNow, endOfDay, endOfHour, endOfISOWeek, endOfISOWeekYear, endOfMinute, endOfMonth, endOfQuarter, endOfSecond, endOfToday, endOfTomorrow, endOfWeek, endOfYear, endOfYesterday, getDate, getDayOfYear, getDay, getDaysInMonth, getDaysInYear, getHours, getISODay, getISOWeek, getISOWeeksInYear, getMilliseconds, getMinutes, getMonth, getOverlappingDaysInIntervals, getQuarter, getSeconds, getTime, getYear, getUnixTime, getWeek, getWeekOfMonth, getWeeksInMonth, getDecade, getWeekYear, lastDayOfISOWeek, lastDayOfISOWeekYear, lastDayOfMonth, lastDayOfQuarter, lastDayOfWeek, lastDayOfYear, lastDayOfDecade, max, min, startOfDay, startOfHour, startOfISOWeek, startOfISOWeekYear, startOfMinute, startOfMonth, startOfQuarter, startOfSecond, startOfToday, startOfTomorrow, startOfWeek, startOfYear, startOfYesterday, startOfDecade, startOfWeekYear, subDays, subHours, subISOWeekYears, subMilliseconds, subMinutes, subMonths, subQuarters, subSeconds, subWeeks, subYears, isAfter, isBefore, isDate, isEqual, isFuture, isPast, isValid, isToday, isTomorrow, isWeekend, isSameMonth, parse, eachDayOfInterval, isSameYear, differenceInCalendarQuarters, getISOWeekYear, formatRelative, de, parseISO) { 'use strict';

    addBusinessDays = addBusinessDays && Object.prototype.hasOwnProperty.call(addBusinessDays, 'default') ? addBusinessDays['default'] : addBusinessDays;
    addDays = addDays && Object.prototype.hasOwnProperty.call(addDays, 'default') ? addDays['default'] : addDays;
    addHours = addHours && Object.prototype.hasOwnProperty.call(addHours, 'default') ? addHours['default'] : addHours;
    addISOWeekYears = addISOWeekYears && Object.prototype.hasOwnProperty.call(addISOWeekYears, 'default') ? addISOWeekYears['default'] : addISOWeekYears;
    addMilliseconds = addMilliseconds && Object.prototype.hasOwnProperty.call(addMilliseconds, 'default') ? addMilliseconds['default'] : addMilliseconds;
    addMinutes = addMinutes && Object.prototype.hasOwnProperty.call(addMinutes, 'default') ? addMinutes['default'] : addMinutes;
    addMonths = addMonths && Object.prototype.hasOwnProperty.call(addMonths, 'default') ? addMonths['default'] : addMonths;
    addQuarters = addQuarters && Object.prototype.hasOwnProperty.call(addQuarters, 'default') ? addQuarters['default'] : addQuarters;
    addSeconds = addSeconds && Object.prototype.hasOwnProperty.call(addSeconds, 'default') ? addSeconds['default'] : addSeconds;
    addWeeks = addWeeks && Object.prototype.hasOwnProperty.call(addWeeks, 'default') ? addWeeks['default'] : addWeeks;
    addYears = addYears && Object.prototype.hasOwnProperty.call(addYears, 'default') ? addYears['default'] : addYears;
    closestTo = closestTo && Object.prototype.hasOwnProperty.call(closestTo, 'default') ? closestTo['default'] : closestTo;
    format = format && Object.prototype.hasOwnProperty.call(format, 'default') ? format['default'] : format;
    differenceInCalendarDays = differenceInCalendarDays && Object.prototype.hasOwnProperty.call(differenceInCalendarDays, 'default') ? differenceInCalendarDays['default'] : differenceInCalendarDays;
    differenceInCalendarISOWeeks = differenceInCalendarISOWeeks && Object.prototype.hasOwnProperty.call(differenceInCalendarISOWeeks, 'default') ? differenceInCalendarISOWeeks['default'] : differenceInCalendarISOWeeks;
    differenceInCalendarISOWeekYears = differenceInCalendarISOWeekYears && Object.prototype.hasOwnProperty.call(differenceInCalendarISOWeekYears, 'default') ? differenceInCalendarISOWeekYears['default'] : differenceInCalendarISOWeekYears;
    differenceInCalendarMonths = differenceInCalendarMonths && Object.prototype.hasOwnProperty.call(differenceInCalendarMonths, 'default') ? differenceInCalendarMonths['default'] : differenceInCalendarMonths;
    differenceInCalendarWeeks = differenceInCalendarWeeks && Object.prototype.hasOwnProperty.call(differenceInCalendarWeeks, 'default') ? differenceInCalendarWeeks['default'] : differenceInCalendarWeeks;
    differenceInCalendarYears = differenceInCalendarYears && Object.prototype.hasOwnProperty.call(differenceInCalendarYears, 'default') ? differenceInCalendarYears['default'] : differenceInCalendarYears;
    differenceInDays = differenceInDays && Object.prototype.hasOwnProperty.call(differenceInDays, 'default') ? differenceInDays['default'] : differenceInDays;
    differenceInHours = differenceInHours && Object.prototype.hasOwnProperty.call(differenceInHours, 'default') ? differenceInHours['default'] : differenceInHours;
    differenceInISOWeekYears = differenceInISOWeekYears && Object.prototype.hasOwnProperty.call(differenceInISOWeekYears, 'default') ? differenceInISOWeekYears['default'] : differenceInISOWeekYears;
    differenceInMilliseconds = differenceInMilliseconds && Object.prototype.hasOwnProperty.call(differenceInMilliseconds, 'default') ? differenceInMilliseconds['default'] : differenceInMilliseconds;
    differenceInMinutes = differenceInMinutes && Object.prototype.hasOwnProperty.call(differenceInMinutes, 'default') ? differenceInMinutes['default'] : differenceInMinutes;
    differenceInMonths = differenceInMonths && Object.prototype.hasOwnProperty.call(differenceInMonths, 'default') ? differenceInMonths['default'] : differenceInMonths;
    differenceInQuarters = differenceInQuarters && Object.prototype.hasOwnProperty.call(differenceInQuarters, 'default') ? differenceInQuarters['default'] : differenceInQuarters;
    differenceInSeconds = differenceInSeconds && Object.prototype.hasOwnProperty.call(differenceInSeconds, 'default') ? differenceInSeconds['default'] : differenceInSeconds;
    differenceInWeeks = differenceInWeeks && Object.prototype.hasOwnProperty.call(differenceInWeeks, 'default') ? differenceInWeeks['default'] : differenceInWeeks;
    differenceInYears = differenceInYears && Object.prototype.hasOwnProperty.call(differenceInYears, 'default') ? differenceInYears['default'] : differenceInYears;
    differenceInBusinessDays = differenceInBusinessDays && Object.prototype.hasOwnProperty.call(differenceInBusinessDays, 'default') ? differenceInBusinessDays['default'] : differenceInBusinessDays;
    formatDistance = formatDistance && Object.prototype.hasOwnProperty.call(formatDistance, 'default') ? formatDistance['default'] : formatDistance;
    formatDistanceStrict = formatDistanceStrict && Object.prototype.hasOwnProperty.call(formatDistanceStrict, 'default') ? formatDistanceStrict['default'] : formatDistanceStrict;
    formatDistanceToNow = formatDistanceToNow && Object.prototype.hasOwnProperty.call(formatDistanceToNow, 'default') ? formatDistanceToNow['default'] : formatDistanceToNow;
    endOfDay = endOfDay && Object.prototype.hasOwnProperty.call(endOfDay, 'default') ? endOfDay['default'] : endOfDay;
    endOfHour = endOfHour && Object.prototype.hasOwnProperty.call(endOfHour, 'default') ? endOfHour['default'] : endOfHour;
    endOfISOWeek = endOfISOWeek && Object.prototype.hasOwnProperty.call(endOfISOWeek, 'default') ? endOfISOWeek['default'] : endOfISOWeek;
    endOfISOWeekYear = endOfISOWeekYear && Object.prototype.hasOwnProperty.call(endOfISOWeekYear, 'default') ? endOfISOWeekYear['default'] : endOfISOWeekYear;
    endOfMinute = endOfMinute && Object.prototype.hasOwnProperty.call(endOfMinute, 'default') ? endOfMinute['default'] : endOfMinute;
    endOfMonth = endOfMonth && Object.prototype.hasOwnProperty.call(endOfMonth, 'default') ? endOfMonth['default'] : endOfMonth;
    endOfQuarter = endOfQuarter && Object.prototype.hasOwnProperty.call(endOfQuarter, 'default') ? endOfQuarter['default'] : endOfQuarter;
    endOfSecond = endOfSecond && Object.prototype.hasOwnProperty.call(endOfSecond, 'default') ? endOfSecond['default'] : endOfSecond;
    endOfToday = endOfToday && Object.prototype.hasOwnProperty.call(endOfToday, 'default') ? endOfToday['default'] : endOfToday;
    endOfTomorrow = endOfTomorrow && Object.prototype.hasOwnProperty.call(endOfTomorrow, 'default') ? endOfTomorrow['default'] : endOfTomorrow;
    endOfWeek = endOfWeek && Object.prototype.hasOwnProperty.call(endOfWeek, 'default') ? endOfWeek['default'] : endOfWeek;
    endOfYear = endOfYear && Object.prototype.hasOwnProperty.call(endOfYear, 'default') ? endOfYear['default'] : endOfYear;
    endOfYesterday = endOfYesterday && Object.prototype.hasOwnProperty.call(endOfYesterday, 'default') ? endOfYesterday['default'] : endOfYesterday;
    getDate = getDate && Object.prototype.hasOwnProperty.call(getDate, 'default') ? getDate['default'] : getDate;
    getDayOfYear = getDayOfYear && Object.prototype.hasOwnProperty.call(getDayOfYear, 'default') ? getDayOfYear['default'] : getDayOfYear;
    getDay = getDay && Object.prototype.hasOwnProperty.call(getDay, 'default') ? getDay['default'] : getDay;
    getDaysInMonth = getDaysInMonth && Object.prototype.hasOwnProperty.call(getDaysInMonth, 'default') ? getDaysInMonth['default'] : getDaysInMonth;
    getDaysInYear = getDaysInYear && Object.prototype.hasOwnProperty.call(getDaysInYear, 'default') ? getDaysInYear['default'] : getDaysInYear;
    getHours = getHours && Object.prototype.hasOwnProperty.call(getHours, 'default') ? getHours['default'] : getHours;
    getISODay = getISODay && Object.prototype.hasOwnProperty.call(getISODay, 'default') ? getISODay['default'] : getISODay;
    getISOWeek = getISOWeek && Object.prototype.hasOwnProperty.call(getISOWeek, 'default') ? getISOWeek['default'] : getISOWeek;
    getISOWeeksInYear = getISOWeeksInYear && Object.prototype.hasOwnProperty.call(getISOWeeksInYear, 'default') ? getISOWeeksInYear['default'] : getISOWeeksInYear;
    getMilliseconds = getMilliseconds && Object.prototype.hasOwnProperty.call(getMilliseconds, 'default') ? getMilliseconds['default'] : getMilliseconds;
    getMinutes = getMinutes && Object.prototype.hasOwnProperty.call(getMinutes, 'default') ? getMinutes['default'] : getMinutes;
    getMonth = getMonth && Object.prototype.hasOwnProperty.call(getMonth, 'default') ? getMonth['default'] : getMonth;
    getOverlappingDaysInIntervals = getOverlappingDaysInIntervals && Object.prototype.hasOwnProperty.call(getOverlappingDaysInIntervals, 'default') ? getOverlappingDaysInIntervals['default'] : getOverlappingDaysInIntervals;
    getQuarter = getQuarter && Object.prototype.hasOwnProperty.call(getQuarter, 'default') ? getQuarter['default'] : getQuarter;
    getSeconds = getSeconds && Object.prototype.hasOwnProperty.call(getSeconds, 'default') ? getSeconds['default'] : getSeconds;
    getTime = getTime && Object.prototype.hasOwnProperty.call(getTime, 'default') ? getTime['default'] : getTime;
    getYear = getYear && Object.prototype.hasOwnProperty.call(getYear, 'default') ? getYear['default'] : getYear;
    getUnixTime = getUnixTime && Object.prototype.hasOwnProperty.call(getUnixTime, 'default') ? getUnixTime['default'] : getUnixTime;
    getWeek = getWeek && Object.prototype.hasOwnProperty.call(getWeek, 'default') ? getWeek['default'] : getWeek;
    getWeekOfMonth = getWeekOfMonth && Object.prototype.hasOwnProperty.call(getWeekOfMonth, 'default') ? getWeekOfMonth['default'] : getWeekOfMonth;
    getWeeksInMonth = getWeeksInMonth && Object.prototype.hasOwnProperty.call(getWeeksInMonth, 'default') ? getWeeksInMonth['default'] : getWeeksInMonth;
    getDecade = getDecade && Object.prototype.hasOwnProperty.call(getDecade, 'default') ? getDecade['default'] : getDecade;
    getWeekYear = getWeekYear && Object.prototype.hasOwnProperty.call(getWeekYear, 'default') ? getWeekYear['default'] : getWeekYear;
    lastDayOfISOWeek = lastDayOfISOWeek && Object.prototype.hasOwnProperty.call(lastDayOfISOWeek, 'default') ? lastDayOfISOWeek['default'] : lastDayOfISOWeek;
    lastDayOfISOWeekYear = lastDayOfISOWeekYear && Object.prototype.hasOwnProperty.call(lastDayOfISOWeekYear, 'default') ? lastDayOfISOWeekYear['default'] : lastDayOfISOWeekYear;
    lastDayOfMonth = lastDayOfMonth && Object.prototype.hasOwnProperty.call(lastDayOfMonth, 'default') ? lastDayOfMonth['default'] : lastDayOfMonth;
    lastDayOfQuarter = lastDayOfQuarter && Object.prototype.hasOwnProperty.call(lastDayOfQuarter, 'default') ? lastDayOfQuarter['default'] : lastDayOfQuarter;
    lastDayOfWeek = lastDayOfWeek && Object.prototype.hasOwnProperty.call(lastDayOfWeek, 'default') ? lastDayOfWeek['default'] : lastDayOfWeek;
    lastDayOfYear = lastDayOfYear && Object.prototype.hasOwnProperty.call(lastDayOfYear, 'default') ? lastDayOfYear['default'] : lastDayOfYear;
    lastDayOfDecade = lastDayOfDecade && Object.prototype.hasOwnProperty.call(lastDayOfDecade, 'default') ? lastDayOfDecade['default'] : lastDayOfDecade;
    max = max && Object.prototype.hasOwnProperty.call(max, 'default') ? max['default'] : max;
    min = min && Object.prototype.hasOwnProperty.call(min, 'default') ? min['default'] : min;
    startOfDay = startOfDay && Object.prototype.hasOwnProperty.call(startOfDay, 'default') ? startOfDay['default'] : startOfDay;
    startOfHour = startOfHour && Object.prototype.hasOwnProperty.call(startOfHour, 'default') ? startOfHour['default'] : startOfHour;
    startOfISOWeek = startOfISOWeek && Object.prototype.hasOwnProperty.call(startOfISOWeek, 'default') ? startOfISOWeek['default'] : startOfISOWeek;
    startOfISOWeekYear = startOfISOWeekYear && Object.prototype.hasOwnProperty.call(startOfISOWeekYear, 'default') ? startOfISOWeekYear['default'] : startOfISOWeekYear;
    startOfMinute = startOfMinute && Object.prototype.hasOwnProperty.call(startOfMinute, 'default') ? startOfMinute['default'] : startOfMinute;
    startOfMonth = startOfMonth && Object.prototype.hasOwnProperty.call(startOfMonth, 'default') ? startOfMonth['default'] : startOfMonth;
    startOfQuarter = startOfQuarter && Object.prototype.hasOwnProperty.call(startOfQuarter, 'default') ? startOfQuarter['default'] : startOfQuarter;
    startOfSecond = startOfSecond && Object.prototype.hasOwnProperty.call(startOfSecond, 'default') ? startOfSecond['default'] : startOfSecond;
    startOfToday = startOfToday && Object.prototype.hasOwnProperty.call(startOfToday, 'default') ? startOfToday['default'] : startOfToday;
    startOfTomorrow = startOfTomorrow && Object.prototype.hasOwnProperty.call(startOfTomorrow, 'default') ? startOfTomorrow['default'] : startOfTomorrow;
    startOfWeek = startOfWeek && Object.prototype.hasOwnProperty.call(startOfWeek, 'default') ? startOfWeek['default'] : startOfWeek;
    startOfYear = startOfYear && Object.prototype.hasOwnProperty.call(startOfYear, 'default') ? startOfYear['default'] : startOfYear;
    startOfYesterday = startOfYesterday && Object.prototype.hasOwnProperty.call(startOfYesterday, 'default') ? startOfYesterday['default'] : startOfYesterday;
    startOfDecade = startOfDecade && Object.prototype.hasOwnProperty.call(startOfDecade, 'default') ? startOfDecade['default'] : startOfDecade;
    startOfWeekYear = startOfWeekYear && Object.prototype.hasOwnProperty.call(startOfWeekYear, 'default') ? startOfWeekYear['default'] : startOfWeekYear;
    subDays = subDays && Object.prototype.hasOwnProperty.call(subDays, 'default') ? subDays['default'] : subDays;
    subHours = subHours && Object.prototype.hasOwnProperty.call(subHours, 'default') ? subHours['default'] : subHours;
    subISOWeekYears = subISOWeekYears && Object.prototype.hasOwnProperty.call(subISOWeekYears, 'default') ? subISOWeekYears['default'] : subISOWeekYears;
    subMilliseconds = subMilliseconds && Object.prototype.hasOwnProperty.call(subMilliseconds, 'default') ? subMilliseconds['default'] : subMilliseconds;
    subMinutes = subMinutes && Object.prototype.hasOwnProperty.call(subMinutes, 'default') ? subMinutes['default'] : subMinutes;
    subMonths = subMonths && Object.prototype.hasOwnProperty.call(subMonths, 'default') ? subMonths['default'] : subMonths;
    subQuarters = subQuarters && Object.prototype.hasOwnProperty.call(subQuarters, 'default') ? subQuarters['default'] : subQuarters;
    subSeconds = subSeconds && Object.prototype.hasOwnProperty.call(subSeconds, 'default') ? subSeconds['default'] : subSeconds;
    subWeeks = subWeeks && Object.prototype.hasOwnProperty.call(subWeeks, 'default') ? subWeeks['default'] : subWeeks;
    subYears = subYears && Object.prototype.hasOwnProperty.call(subYears, 'default') ? subYears['default'] : subYears;
    isAfter = isAfter && Object.prototype.hasOwnProperty.call(isAfter, 'default') ? isAfter['default'] : isAfter;
    isBefore = isBefore && Object.prototype.hasOwnProperty.call(isBefore, 'default') ? isBefore['default'] : isBefore;
    isDate = isDate && Object.prototype.hasOwnProperty.call(isDate, 'default') ? isDate['default'] : isDate;
    isEqual = isEqual && Object.prototype.hasOwnProperty.call(isEqual, 'default') ? isEqual['default'] : isEqual;
    isFuture = isFuture && Object.prototype.hasOwnProperty.call(isFuture, 'default') ? isFuture['default'] : isFuture;
    isPast = isPast && Object.prototype.hasOwnProperty.call(isPast, 'default') ? isPast['default'] : isPast;
    isValid = isValid && Object.prototype.hasOwnProperty.call(isValid, 'default') ? isValid['default'] : isValid;
    isToday = isToday && Object.prototype.hasOwnProperty.call(isToday, 'default') ? isToday['default'] : isToday;
    isTomorrow = isTomorrow && Object.prototype.hasOwnProperty.call(isTomorrow, 'default') ? isTomorrow['default'] : isTomorrow;
    isWeekend = isWeekend && Object.prototype.hasOwnProperty.call(isWeekend, 'default') ? isWeekend['default'] : isWeekend;
    isSameMonth = isSameMonth && Object.prototype.hasOwnProperty.call(isSameMonth, 'default') ? isSameMonth['default'] : isSameMonth;
    parse = parse && Object.prototype.hasOwnProperty.call(parse, 'default') ? parse['default'] : parse;
    eachDayOfInterval = eachDayOfInterval && Object.prototype.hasOwnProperty.call(eachDayOfInterval, 'default') ? eachDayOfInterval['default'] : eachDayOfInterval;
    isSameYear = isSameYear && Object.prototype.hasOwnProperty.call(isSameYear, 'default') ? isSameYear['default'] : isSameYear;
    differenceInCalendarQuarters = differenceInCalendarQuarters && Object.prototype.hasOwnProperty.call(differenceInCalendarQuarters, 'default') ? differenceInCalendarQuarters['default'] : differenceInCalendarQuarters;
    getISOWeekYear = getISOWeekYear && Object.prototype.hasOwnProperty.call(getISOWeekYear, 'default') ? getISOWeekYear['default'] : getISOWeekYear;
    formatRelative = formatRelative && Object.prototype.hasOwnProperty.call(formatRelative, 'default') ? formatRelative['default'] : formatRelative;
    de = de && Object.prototype.hasOwnProperty.call(de, 'default') ? de['default'] : de;
    parseISO = parseISO && Object.prototype.hasOwnProperty.call(parseISO, 'default') ? parseISO['default'] : parseISO;

    var AddBusinessDaysPipe = /** @class */ (function () {
        function AddBusinessDaysPipe() {
        }
        AddBusinessDaysPipe.prototype.transform = function (date, amount) {
            return addBusinessDays(date, amount);
        };
        return AddBusinessDaysPipe;
    }());
    AddBusinessDaysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddBusinessDays' },] }
    ];
    var AddBusinessDaysPipeModule = /** @class */ (function () {
        function AddBusinessDaysPipeModule() {
        }
        return AddBusinessDaysPipeModule;
    }());
    AddBusinessDaysPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddBusinessDaysPipe],
                    exports: [AddBusinessDaysPipe]
                },] }
    ];

    var AddDaysPipe = /** @class */ (function () {
        function AddDaysPipe() {
        }
        AddDaysPipe.prototype.transform = function (date, amount) {
            return addDays(date, amount);
        };
        return AddDaysPipe;
    }());
    AddDaysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddDays' },] }
    ];
    var AddDaysPipeModule = /** @class */ (function () {
        function AddDaysPipeModule() {
        }
        return AddDaysPipeModule;
    }());
    AddDaysPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddDaysPipe],
                    exports: [AddDaysPipe]
                },] }
    ];

    var AddHoursPipe = /** @class */ (function () {
        function AddHoursPipe() {
        }
        AddHoursPipe.prototype.transform = function (date, amount) {
            return addHours(date, amount);
        };
        return AddHoursPipe;
    }());
    AddHoursPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddHours' },] }
    ];
    var AddHoursPipeModule = /** @class */ (function () {
        function AddHoursPipeModule() {
        }
        return AddHoursPipeModule;
    }());
    AddHoursPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddHoursPipe],
                    exports: [AddHoursPipe]
                },] }
    ];

    var AddISOWeekYearsPipe = /** @class */ (function () {
        function AddISOWeekYearsPipe() {
        }
        AddISOWeekYearsPipe.prototype.transform = function (date, amount) {
            return addISOWeekYears(date, amount);
        };
        return AddISOWeekYearsPipe;
    }());
    AddISOWeekYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddISOWeekYears' },] }
    ];
    var AddISOWeekYearsPipeModule = /** @class */ (function () {
        function AddISOWeekYearsPipeModule() {
        }
        return AddISOWeekYearsPipeModule;
    }());
    AddISOWeekYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddISOWeekYearsPipe],
                    exports: [AddISOWeekYearsPipe]
                },] }
    ];

    var AddMillisecondsPipe = /** @class */ (function () {
        function AddMillisecondsPipe() {
        }
        AddMillisecondsPipe.prototype.transform = function (date, amount) {
            return addMilliseconds(date, amount);
        };
        return AddMillisecondsPipe;
    }());
    AddMillisecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddMilliseconds' },] }
    ];
    var AddMillisecondsPipeModule = /** @class */ (function () {
        function AddMillisecondsPipeModule() {
        }
        return AddMillisecondsPipeModule;
    }());
    AddMillisecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddMillisecondsPipe],
                    exports: [AddMillisecondsPipe]
                },] }
    ];

    var AddMinutesPipe = /** @class */ (function () {
        function AddMinutesPipe() {
        }
        AddMinutesPipe.prototype.transform = function (date, amount) {
            return addMinutes(date, amount);
        };
        return AddMinutesPipe;
    }());
    AddMinutesPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddMinutes' },] }
    ];
    var AddMinutesPipeModule = /** @class */ (function () {
        function AddMinutesPipeModule() {
        }
        return AddMinutesPipeModule;
    }());
    AddMinutesPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddMinutesPipe],
                    exports: [AddMinutesPipe]
                },] }
    ];

    var AddMonthsPipe = /** @class */ (function () {
        function AddMonthsPipe() {
        }
        AddMonthsPipe.prototype.transform = function (date, amount) {
            return addMonths(date, amount);
        };
        return AddMonthsPipe;
    }());
    AddMonthsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddMonths' },] }
    ];
    var AddMonthsPipeModule = /** @class */ (function () {
        function AddMonthsPipeModule() {
        }
        return AddMonthsPipeModule;
    }());
    AddMonthsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddMonthsPipe],
                    exports: [AddMonthsPipe]
                },] }
    ];

    var AddQuartersPipe = /** @class */ (function () {
        function AddQuartersPipe() {
        }
        AddQuartersPipe.prototype.transform = function (date, amount) {
            return addQuarters(date, amount);
        };
        return AddQuartersPipe;
    }());
    AddQuartersPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddQuarters' },] }
    ];
    var AddQuartersPipeModule = /** @class */ (function () {
        function AddQuartersPipeModule() {
        }
        return AddQuartersPipeModule;
    }());
    AddQuartersPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddQuartersPipe],
                    exports: [AddQuartersPipe]
                },] }
    ];

    var AddSecondsPipe = /** @class */ (function () {
        function AddSecondsPipe() {
        }
        AddSecondsPipe.prototype.transform = function (date, amount) {
            return addSeconds(date, amount);
        };
        return AddSecondsPipe;
    }());
    AddSecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddSeconds' },] }
    ];
    var AddSecondsPipeModule = /** @class */ (function () {
        function AddSecondsPipeModule() {
        }
        return AddSecondsPipeModule;
    }());
    AddSecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddSecondsPipe],
                    exports: [AddSecondsPipe]
                },] }
    ];

    var AddWeeksPipe = /** @class */ (function () {
        function AddWeeksPipe() {
        }
        AddWeeksPipe.prototype.transform = function (date, amount) {
            return addWeeks(date, amount);
        };
        return AddWeeksPipe;
    }());
    AddWeeksPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddWeeks' },] }
    ];
    var AddWeeksPipeModule = /** @class */ (function () {
        function AddWeeksPipeModule() {
        }
        return AddWeeksPipeModule;
    }());
    AddWeeksPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddWeeksPipe],
                    exports: [AddWeeksPipe]
                },] }
    ];

    var AddYearsPipe = /** @class */ (function () {
        function AddYearsPipe() {
        }
        AddYearsPipe.prototype.transform = function (date, amount) {
            return addYears(date, amount);
        };
        return AddYearsPipe;
    }());
    AddYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsAddYears' },] }
    ];
    var AddYearsPipeModule = /** @class */ (function () {
        function AddYearsPipeModule() {
        }
        return AddYearsPipeModule;
    }());
    AddYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [AddYearsPipe],
                    exports: [AddYearsPipe]
                },] }
    ];

    var ClosestToPipe = /** @class */ (function () {
        function ClosestToPipe() {
        }
        ClosestToPipe.prototype.transform = function (dateToCompare, datesArray) {
            return closestTo(dateToCompare, datesArray);
        };
        return ClosestToPipe;
    }());
    ClosestToPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsClosestTo' },] }
    ];
    var ClosestToPipeModule = /** @class */ (function () {
        function ClosestToPipeModule() {
        }
        return ClosestToPipeModule;
    }());
    ClosestToPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ClosestToPipe],
                    exports: [ClosestToPipe]
                },] }
    ];

    var DateFnsConfigurationService = /** @class */ (function () {
        function DateFnsConfigurationService() {
            this.localeChanged = new rxjs.Subject();
        }
        DateFnsConfigurationService.prototype.locale = function () {
            return this.locale$;
        };
        DateFnsConfigurationService.prototype.setLocale = function (locale) {
            this.locale$ = locale;
            this.localeChanged.next();
        };
        return DateFnsConfigurationService;
    }());
    DateFnsConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DateFnsConfigurationService_Factory() { return new DateFnsConfigurationService(); }, token: DateFnsConfigurationService, providedIn: "root" });
    DateFnsConfigurationService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /**
     * Helper function used by all pipes to calculate locale
     */
    var calculateLocale = function (options, config) {
        var configLocale = config.locale();
        if (!options && configLocale) {
            return { locale: configLocale };
        }
        if (options && !options.locale && configLocale) {
            return Object.assign(Object.assign({}, options), { locale: configLocale });
        }
        return options;
    };

    var FormatPipe = /** @class */ (function () {
        function FormatPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        FormatPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        FormatPipe.prototype.transform = function (date, dateFormat, options) {
            return format(date, dateFormat, calculateLocale(options, this.config));
        };
        return FormatPipe;
    }());
    FormatPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormat', pure: false },] }
    ];
    FormatPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var FormatPipeModule = /** @class */ (function () {
        function FormatPipeModule() {
        }
        return FormatPipeModule;
    }());
    FormatPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatPipe],
                    exports: [FormatPipe]
                },] }
    ];

    var DifferenceInCalendarDaysPipe = /** @class */ (function () {
        function DifferenceInCalendarDaysPipe() {
        }
        DifferenceInCalendarDaysPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInCalendarDays(dateLeft, dateRight);
        };
        return DifferenceInCalendarDaysPipe;
    }());
    DifferenceInCalendarDaysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarDays' },] }
    ];
    var DifferenceInCalendarDaysPipeModule = /** @class */ (function () {
        function DifferenceInCalendarDaysPipeModule() {
        }
        return DifferenceInCalendarDaysPipeModule;
    }());
    DifferenceInCalendarDaysPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarDaysPipe],
                    exports: [DifferenceInCalendarDaysPipe]
                },] }
    ];

    var DifferenceInCalendarISOWeeksPipe = /** @class */ (function () {
        function DifferenceInCalendarISOWeeksPipe() {
        }
        DifferenceInCalendarISOWeeksPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInCalendarISOWeeks(dateLeft, dateRight);
        };
        return DifferenceInCalendarISOWeeksPipe;
    }());
    DifferenceInCalendarISOWeeksPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarISOWeeks' },] }
    ];
    var DifferenceInCalendarISOWeeksPipeModule = /** @class */ (function () {
        function DifferenceInCalendarISOWeeksPipeModule() {
        }
        return DifferenceInCalendarISOWeeksPipeModule;
    }());
    DifferenceInCalendarISOWeeksPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarISOWeeksPipe],
                    exports: [DifferenceInCalendarISOWeeksPipe]
                },] }
    ];

    var DifferenceInCalendarISOWeekYearsPipe = /** @class */ (function () {
        function DifferenceInCalendarISOWeekYearsPipe() {
        }
        DifferenceInCalendarISOWeekYearsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInCalendarISOWeekYears(dateLeft, dateRight);
        };
        return DifferenceInCalendarISOWeekYearsPipe;
    }());
    DifferenceInCalendarISOWeekYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarISOWeekYears' },] }
    ];
    var DifferenceInCalendarISOWeekYearsPipeModule = /** @class */ (function () {
        function DifferenceInCalendarISOWeekYearsPipeModule() {
        }
        return DifferenceInCalendarISOWeekYearsPipeModule;
    }());
    DifferenceInCalendarISOWeekYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarISOWeekYearsPipe],
                    exports: [DifferenceInCalendarISOWeekYearsPipe]
                },] }
    ];

    var DifferenceInCalendarMonthsPipe = /** @class */ (function () {
        function DifferenceInCalendarMonthsPipe() {
        }
        DifferenceInCalendarMonthsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInCalendarMonths(dateLeft, dateRight);
        };
        return DifferenceInCalendarMonthsPipe;
    }());
    DifferenceInCalendarMonthsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarMonths' },] }
    ];
    var DifferenceInCalendarMonthsPipeModule = /** @class */ (function () {
        function DifferenceInCalendarMonthsPipeModule() {
        }
        return DifferenceInCalendarMonthsPipeModule;
    }());
    DifferenceInCalendarMonthsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarMonthsPipe],
                    exports: [DifferenceInCalendarMonthsPipe]
                },] }
    ];

    var DifferenceInCalendarWeeksPipe = /** @class */ (function () {
        function DifferenceInCalendarWeeksPipe() {
        }
        DifferenceInCalendarWeeksPipe.prototype.transform = function (dateLeft, dateRight, options) {
            return differenceInCalendarWeeks(dateLeft, dateRight, options);
        };
        return DifferenceInCalendarWeeksPipe;
    }());
    DifferenceInCalendarWeeksPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarWeeks' },] }
    ];
    var DifferenceInCalendarWeeksPipeModule = /** @class */ (function () {
        function DifferenceInCalendarWeeksPipeModule() {
        }
        return DifferenceInCalendarWeeksPipeModule;
    }());
    DifferenceInCalendarWeeksPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarWeeksPipe],
                    exports: [DifferenceInCalendarWeeksPipe]
                },] }
    ];

    var DifferenceInCalendarYearsPipe = /** @class */ (function () {
        function DifferenceInCalendarYearsPipe() {
        }
        DifferenceInCalendarYearsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInCalendarYears(dateLeft, dateRight);
        };
        return DifferenceInCalendarYearsPipe;
    }());
    DifferenceInCalendarYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarYears' },] }
    ];
    var DifferenceInCalendarYearsPipeModule = /** @class */ (function () {
        function DifferenceInCalendarYearsPipeModule() {
        }
        return DifferenceInCalendarYearsPipeModule;
    }());
    DifferenceInCalendarYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarYearsPipe],
                    exports: [DifferenceInCalendarYearsPipe]
                },] }
    ];

    var DifferenceInDaysPipe = /** @class */ (function () {
        function DifferenceInDaysPipe() {
        }
        DifferenceInDaysPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInDays(dateLeft, dateRight);
        };
        return DifferenceInDaysPipe;
    }());
    DifferenceInDaysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInDays' },] }
    ];
    var DifferenceInDaysPipeModule = /** @class */ (function () {
        function DifferenceInDaysPipeModule() {
        }
        return DifferenceInDaysPipeModule;
    }());
    DifferenceInDaysPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInDaysPipe],
                    exports: [DifferenceInDaysPipe]
                },] }
    ];

    var DifferenceInHoursPipe = /** @class */ (function () {
        function DifferenceInHoursPipe() {
        }
        DifferenceInHoursPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInHours(dateLeft, dateRight);
        };
        return DifferenceInHoursPipe;
    }());
    DifferenceInHoursPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInHours' },] }
    ];
    var DifferenceInHoursPipeModule = /** @class */ (function () {
        function DifferenceInHoursPipeModule() {
        }
        return DifferenceInHoursPipeModule;
    }());
    DifferenceInHoursPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInHoursPipe],
                    exports: [DifferenceInHoursPipe]
                },] }
    ];

    var DifferenceInISOWeekYearsPipe = /** @class */ (function () {
        function DifferenceInISOWeekYearsPipe() {
        }
        DifferenceInISOWeekYearsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInISOWeekYears(dateLeft, dateRight);
        };
        return DifferenceInISOWeekYearsPipe;
    }());
    DifferenceInISOWeekYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInISOWeekYears' },] }
    ];
    var DifferenceInISOWeekYearsPipeModule = /** @class */ (function () {
        function DifferenceInISOWeekYearsPipeModule() {
        }
        return DifferenceInISOWeekYearsPipeModule;
    }());
    DifferenceInISOWeekYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInISOWeekYearsPipe],
                    exports: [DifferenceInISOWeekYearsPipe]
                },] }
    ];

    var DifferenceInMillisecondsPipe = /** @class */ (function () {
        function DifferenceInMillisecondsPipe() {
        }
        DifferenceInMillisecondsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInMilliseconds(dateLeft, dateRight);
        };
        return DifferenceInMillisecondsPipe;
    }());
    DifferenceInMillisecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInMilliseconds' },] }
    ];
    var DifferenceInMillisecondsPipeModule = /** @class */ (function () {
        function DifferenceInMillisecondsPipeModule() {
        }
        return DifferenceInMillisecondsPipeModule;
    }());
    DifferenceInMillisecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInMillisecondsPipe],
                    exports: [DifferenceInMillisecondsPipe]
                },] }
    ];

    var DifferenceInMinutesPipe = /** @class */ (function () {
        function DifferenceInMinutesPipe() {
        }
        DifferenceInMinutesPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInMinutes(dateLeft, dateRight);
        };
        return DifferenceInMinutesPipe;
    }());
    DifferenceInMinutesPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInMinutes' },] }
    ];
    var DifferenceInMinutesPipeModule = /** @class */ (function () {
        function DifferenceInMinutesPipeModule() {
        }
        return DifferenceInMinutesPipeModule;
    }());
    DifferenceInMinutesPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInMinutesPipe],
                    exports: [DifferenceInMinutesPipe]
                },] }
    ];

    var DifferenceInMonthsPipe = /** @class */ (function () {
        function DifferenceInMonthsPipe() {
        }
        DifferenceInMonthsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInMonths(dateLeft, dateRight);
        };
        return DifferenceInMonthsPipe;
    }());
    DifferenceInMonthsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInMonths' },] }
    ];
    var DifferenceInMonthsPipeModule = /** @class */ (function () {
        function DifferenceInMonthsPipeModule() {
        }
        return DifferenceInMonthsPipeModule;
    }());
    DifferenceInMonthsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInMonthsPipe],
                    exports: [DifferenceInMonthsPipe]
                },] }
    ];

    var DifferenceInQuartersPipe = /** @class */ (function () {
        function DifferenceInQuartersPipe() {
        }
        DifferenceInQuartersPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInQuarters(dateLeft, dateRight);
        };
        return DifferenceInQuartersPipe;
    }());
    DifferenceInQuartersPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInQuarters' },] }
    ];
    var DifferenceInQuartersPipeModule = /** @class */ (function () {
        function DifferenceInQuartersPipeModule() {
        }
        return DifferenceInQuartersPipeModule;
    }());
    DifferenceInQuartersPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInQuartersPipe],
                    exports: [DifferenceInQuartersPipe]
                },] }
    ];

    var DifferenceInSecondsPipe = /** @class */ (function () {
        function DifferenceInSecondsPipe() {
        }
        DifferenceInSecondsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInSeconds(dateLeft, dateRight);
        };
        return DifferenceInSecondsPipe;
    }());
    DifferenceInSecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInSeconds' },] }
    ];
    var DifferenceInSecondsPipeModule = /** @class */ (function () {
        function DifferenceInSecondsPipeModule() {
        }
        return DifferenceInSecondsPipeModule;
    }());
    DifferenceInSecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInSecondsPipe],
                    exports: [DifferenceInSecondsPipe]
                },] }
    ];

    var DifferenceInWeeksPipe = /** @class */ (function () {
        function DifferenceInWeeksPipe() {
        }
        DifferenceInWeeksPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInWeeks(dateLeft, dateRight);
        };
        return DifferenceInWeeksPipe;
    }());
    DifferenceInWeeksPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInWeeks' },] }
    ];
    var DifferenceInWeeksPipeModule = /** @class */ (function () {
        function DifferenceInWeeksPipeModule() {
        }
        return DifferenceInWeeksPipeModule;
    }());
    DifferenceInWeeksPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInWeeksPipe],
                    exports: [DifferenceInWeeksPipe]
                },] }
    ];

    var DifferenceInYearsPipe = /** @class */ (function () {
        function DifferenceInYearsPipe() {
        }
        DifferenceInYearsPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInYears(dateLeft, dateRight);
        };
        return DifferenceInYearsPipe;
    }());
    DifferenceInYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInYears' },] }
    ];
    var DifferenceInYearsPipeModule = /** @class */ (function () {
        function DifferenceInYearsPipeModule() {
        }
        return DifferenceInYearsPipeModule;
    }());
    DifferenceInYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInYearsPipe],
                    exports: [DifferenceInYearsPipe]
                },] }
    ];

    var DifferenceInBusinessDaysPipe = /** @class */ (function () {
        function DifferenceInBusinessDaysPipe() {
        }
        DifferenceInBusinessDaysPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInBusinessDays(dateLeft, dateRight);
        };
        return DifferenceInBusinessDaysPipe;
    }());
    DifferenceInBusinessDaysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInBusinessDays' },] }
    ];
    var DifferenceInBusinessDaysPipeModule = /** @class */ (function () {
        function DifferenceInBusinessDaysPipeModule() {
        }
        return DifferenceInBusinessDaysPipeModule;
    }());
    DifferenceInBusinessDaysPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInBusinessDaysPipe],
                    exports: [DifferenceInBusinessDaysPipe]
                },] }
    ];

    var FormatDistancePipe = /** @class */ (function () {
        function FormatDistancePipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        FormatDistancePipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        FormatDistancePipe.prototype.transform = function (date, dateToCompare, options) {
            return formatDistance(date, dateToCompare, calculateLocale(options, this.config));
        };
        return FormatDistancePipe;
    }());
    FormatDistancePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatDistance', pure: false },] }
    ];
    FormatDistancePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var FormatDistancePipeModule = /** @class */ (function () {
        function FormatDistancePipeModule() {
        }
        return FormatDistancePipeModule;
    }());
    FormatDistancePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatDistancePipe],
                    exports: [FormatDistancePipe]
                },] }
    ];

    var FormatDistanceStrictPipe = /** @class */ (function () {
        function FormatDistanceStrictPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        FormatDistanceStrictPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        FormatDistanceStrictPipe.prototype.transform = function (date, dateToCompare, options) {
            return formatDistanceStrict(date, dateToCompare, calculateLocale(options, this.config));
        };
        return FormatDistanceStrictPipe;
    }());
    FormatDistanceStrictPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatDistanceStrict', pure: false },] }
    ];
    FormatDistanceStrictPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var FormatDistanceStrictPipeModule = /** @class */ (function () {
        function FormatDistanceStrictPipeModule() {
        }
        return FormatDistanceStrictPipeModule;
    }());
    FormatDistanceStrictPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatDistanceStrictPipe],
                    exports: [FormatDistanceStrictPipe]
                },] }
    ];

    var FormatDistanceToNowPipe = /** @class */ (function () {
        function FormatDistanceToNowPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        FormatDistanceToNowPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        FormatDistanceToNowPipe.prototype.transform = function (date, options) {
            return formatDistanceToNow(date, calculateLocale(options, this.config));
        };
        return FormatDistanceToNowPipe;
    }());
    FormatDistanceToNowPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatDistanceToNow', pure: false },] }
    ];
    FormatDistanceToNowPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var FormatDistanceToNowPipeModule = /** @class */ (function () {
        function FormatDistanceToNowPipeModule() {
        }
        return FormatDistanceToNowPipeModule;
    }());
    FormatDistanceToNowPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatDistanceToNowPipe],
                    exports: [FormatDistanceToNowPipe]
                },] }
    ];

    var EndOfDayPipe = /** @class */ (function () {
        function EndOfDayPipe() {
        }
        EndOfDayPipe.prototype.transform = function (date) {
            return endOfDay(date);
        };
        return EndOfDayPipe;
    }());
    EndOfDayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfDay' },] }
    ];
    var EndOfDayPipeModule = /** @class */ (function () {
        function EndOfDayPipeModule() {
        }
        return EndOfDayPipeModule;
    }());
    EndOfDayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfDayPipe],
                    exports: [EndOfDayPipe]
                },] }
    ];

    var EndOfHourPipe = /** @class */ (function () {
        function EndOfHourPipe() {
        }
        EndOfHourPipe.prototype.transform = function (date) {
            return endOfHour(date);
        };
        return EndOfHourPipe;
    }());
    EndOfHourPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfHour' },] }
    ];
    var EndOfHourPipeModule = /** @class */ (function () {
        function EndOfHourPipeModule() {
        }
        return EndOfHourPipeModule;
    }());
    EndOfHourPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfHourPipe],
                    exports: [EndOfHourPipe]
                },] }
    ];

    var EndOfISOWeekPipe = /** @class */ (function () {
        function EndOfISOWeekPipe() {
        }
        EndOfISOWeekPipe.prototype.transform = function (date) {
            return endOfISOWeek(date);
        };
        return EndOfISOWeekPipe;
    }());
    EndOfISOWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfISOWeek' },] }
    ];
    var EndOfISOWeekPipeModule = /** @class */ (function () {
        function EndOfISOWeekPipeModule() {
        }
        return EndOfISOWeekPipeModule;
    }());
    EndOfISOWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfISOWeekPipe],
                    exports: [EndOfISOWeekPipe]
                },] }
    ];

    var EndOfISOWeekYearPipe = /** @class */ (function () {
        function EndOfISOWeekYearPipe() {
        }
        EndOfISOWeekYearPipe.prototype.transform = function (date) {
            return endOfISOWeekYear(date);
        };
        return EndOfISOWeekYearPipe;
    }());
    EndOfISOWeekYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfISOWeekYear' },] }
    ];
    var EndOfISOWeekYearPipeModule = /** @class */ (function () {
        function EndOfISOWeekYearPipeModule() {
        }
        return EndOfISOWeekYearPipeModule;
    }());
    EndOfISOWeekYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfISOWeekYearPipe],
                    exports: [EndOfISOWeekYearPipe]
                },] }
    ];

    var EndOfMinutePipe = /** @class */ (function () {
        function EndOfMinutePipe() {
        }
        EndOfMinutePipe.prototype.transform = function (date) {
            return endOfMinute(date);
        };
        return EndOfMinutePipe;
    }());
    EndOfMinutePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfMinute' },] }
    ];
    var EndOfMinutePipeModule = /** @class */ (function () {
        function EndOfMinutePipeModule() {
        }
        return EndOfMinutePipeModule;
    }());
    EndOfMinutePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfMinutePipe],
                    exports: [EndOfMinutePipe]
                },] }
    ];

    var EndOfMonthPipe = /** @class */ (function () {
        function EndOfMonthPipe() {
        }
        EndOfMonthPipe.prototype.transform = function (date) {
            return endOfMonth(date);
        };
        return EndOfMonthPipe;
    }());
    EndOfMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfMonth' },] }
    ];
    var EndOfMonthPipeModule = /** @class */ (function () {
        function EndOfMonthPipeModule() {
        }
        return EndOfMonthPipeModule;
    }());
    EndOfMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfMonthPipe],
                    exports: [EndOfMonthPipe]
                },] }
    ];

    var EndOfQuarterPipe = /** @class */ (function () {
        function EndOfQuarterPipe() {
        }
        EndOfQuarterPipe.prototype.transform = function (date) {
            return endOfQuarter(date);
        };
        return EndOfQuarterPipe;
    }());
    EndOfQuarterPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfQuarter' },] }
    ];
    var EndOfQuarterPipeModule = /** @class */ (function () {
        function EndOfQuarterPipeModule() {
        }
        return EndOfQuarterPipeModule;
    }());
    EndOfQuarterPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfQuarterPipe],
                    exports: [EndOfQuarterPipe]
                },] }
    ];

    var EndOfSecondPipe = /** @class */ (function () {
        function EndOfSecondPipe() {
        }
        EndOfSecondPipe.prototype.transform = function (date) {
            return endOfSecond(date);
        };
        return EndOfSecondPipe;
    }());
    EndOfSecondPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfSecond' },] }
    ];
    var EndOfSecondPipeModule = /** @class */ (function () {
        function EndOfSecondPipeModule() {
        }
        return EndOfSecondPipeModule;
    }());
    EndOfSecondPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfSecondPipe],
                    exports: [EndOfSecondPipe]
                },] }
    ];

    var EndOfTodayPipe = /** @class */ (function () {
        function EndOfTodayPipe() {
        }
        EndOfTodayPipe.prototype.transform = function () {
            return endOfToday();
        };
        return EndOfTodayPipe;
    }());
    EndOfTodayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfToday' },] }
    ];
    var EndOfTodayPipeModule = /** @class */ (function () {
        function EndOfTodayPipeModule() {
        }
        return EndOfTodayPipeModule;
    }());
    EndOfTodayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfTodayPipe],
                    exports: [EndOfTodayPipe]
                },] }
    ];

    var EndOfTomorrowPipe = /** @class */ (function () {
        function EndOfTomorrowPipe() {
        }
        EndOfTomorrowPipe.prototype.transform = function () {
            return endOfTomorrow();
        };
        return EndOfTomorrowPipe;
    }());
    EndOfTomorrowPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfTomorrow' },] }
    ];
    var EndOfTomorrowPipeModule = /** @class */ (function () {
        function EndOfTomorrowPipeModule() {
        }
        return EndOfTomorrowPipeModule;
    }());
    EndOfTomorrowPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfTomorrowPipe],
                    exports: [EndOfTomorrowPipe]
                },] }
    ];

    var EndOfWeekPipe = /** @class */ (function () {
        function EndOfWeekPipe() {
        }
        EndOfWeekPipe.prototype.transform = function (date, options) {
            return endOfWeek(date, options);
        };
        return EndOfWeekPipe;
    }());
    EndOfWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfWeek' },] }
    ];
    var EndOfWeekPipeModule = /** @class */ (function () {
        function EndOfWeekPipeModule() {
        }
        return EndOfWeekPipeModule;
    }());
    EndOfWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfWeekPipe],
                    exports: [EndOfWeekPipe]
                },] }
    ];

    var EndOfYearPipe = /** @class */ (function () {
        function EndOfYearPipe() {
        }
        EndOfYearPipe.prototype.transform = function (date) {
            return endOfYear(date);
        };
        return EndOfYearPipe;
    }());
    EndOfYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfYear' },] }
    ];
    var EndOfYearPipeModule = /** @class */ (function () {
        function EndOfYearPipeModule() {
        }
        return EndOfYearPipeModule;
    }());
    EndOfYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfYearPipe],
                    exports: [EndOfYearPipe]
                },] }
    ];

    var EndOfYesterdayPipe = /** @class */ (function () {
        function EndOfYesterdayPipe() {
        }
        EndOfYesterdayPipe.prototype.transform = function () {
            return endOfYesterday();
        };
        return EndOfYesterdayPipe;
    }());
    EndOfYesterdayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsEndOfYesterday' },] }
    ];
    var EndOfYesterdayPipeModule = /** @class */ (function () {
        function EndOfYesterdayPipeModule() {
        }
        return EndOfYesterdayPipeModule;
    }());
    EndOfYesterdayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [EndOfYesterdayPipe],
                    exports: [EndOfYesterdayPipe]
                },] }
    ];

    var GetDatePipe = /** @class */ (function () {
        function GetDatePipe() {
        }
        GetDatePipe.prototype.transform = function (date) {
            return getDate(date);
        };
        return GetDatePipe;
    }());
    GetDatePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetDate' },] }
    ];
    var GetDatePipeModule = /** @class */ (function () {
        function GetDatePipeModule() {
        }
        return GetDatePipeModule;
    }());
    GetDatePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetDatePipe],
                    exports: [GetDatePipe]
                },] }
    ];

    var GetDayOfYearPipe = /** @class */ (function () {
        function GetDayOfYearPipe() {
        }
        GetDayOfYearPipe.prototype.transform = function (date) {
            return getDayOfYear(date);
        };
        return GetDayOfYearPipe;
    }());
    GetDayOfYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetDayOfYear' },] }
    ];
    var GetDayOfYearPipeModule = /** @class */ (function () {
        function GetDayOfYearPipeModule() {
        }
        return GetDayOfYearPipeModule;
    }());
    GetDayOfYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetDayOfYearPipe],
                    exports: [GetDayOfYearPipe]
                },] }
    ];

    var GetDayPipe = /** @class */ (function () {
        function GetDayPipe() {
        }
        GetDayPipe.prototype.transform = function (date) {
            return getDay(date);
        };
        return GetDayPipe;
    }());
    GetDayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetDay' },] }
    ];
    var GetDayPipeModule = /** @class */ (function () {
        function GetDayPipeModule() {
        }
        return GetDayPipeModule;
    }());
    GetDayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetDayPipe],
                    exports: [GetDayPipe]
                },] }
    ];

    var GetDaysInMonthPipe = /** @class */ (function () {
        function GetDaysInMonthPipe() {
        }
        GetDaysInMonthPipe.prototype.transform = function (date) {
            return getDaysInMonth(date);
        };
        return GetDaysInMonthPipe;
    }());
    GetDaysInMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetDaysInMonth' },] }
    ];
    var GetDaysInMonthPipeModule = /** @class */ (function () {
        function GetDaysInMonthPipeModule() {
        }
        return GetDaysInMonthPipeModule;
    }());
    GetDaysInMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetDaysInMonthPipe],
                    exports: [GetDaysInMonthPipe]
                },] }
    ];

    var GetDaysInYearPipe = /** @class */ (function () {
        function GetDaysInYearPipe() {
        }
        GetDaysInYearPipe.prototype.transform = function (date) {
            return getDaysInYear(date);
        };
        return GetDaysInYearPipe;
    }());
    GetDaysInYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetDaysInYear' },] }
    ];
    var GetDaysInYearPipeModule = /** @class */ (function () {
        function GetDaysInYearPipeModule() {
        }
        return GetDaysInYearPipeModule;
    }());
    GetDaysInYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetDaysInYearPipe],
                    exports: [GetDaysInYearPipe]
                },] }
    ];

    var GetHoursPipe = /** @class */ (function () {
        function GetHoursPipe() {
        }
        GetHoursPipe.prototype.transform = function (date) {
            return getHours(date);
        };
        return GetHoursPipe;
    }());
    GetHoursPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetHours' },] }
    ];
    var GetHoursPipeModule = /** @class */ (function () {
        function GetHoursPipeModule() {
        }
        return GetHoursPipeModule;
    }());
    GetHoursPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetHoursPipe],
                    exports: [GetHoursPipe]
                },] }
    ];

    var GetISODayPipe = /** @class */ (function () {
        function GetISODayPipe() {
        }
        GetISODayPipe.prototype.transform = function (date) {
            return getISODay(date);
        };
        return GetISODayPipe;
    }());
    GetISODayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetISODay' },] }
    ];
    var GetISODayPipeModule = /** @class */ (function () {
        function GetISODayPipeModule() {
        }
        return GetISODayPipeModule;
    }());
    GetISODayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetISODayPipe],
                    exports: [GetISODayPipe]
                },] }
    ];

    var GetISOWeekPipe = /** @class */ (function () {
        function GetISOWeekPipe() {
        }
        GetISOWeekPipe.prototype.transform = function (date) {
            return getISOWeek(date);
        };
        return GetISOWeekPipe;
    }());
    GetISOWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetISOWeek' },] }
    ];
    var GetISOWeekPipeModule = /** @class */ (function () {
        function GetISOWeekPipeModule() {
        }
        return GetISOWeekPipeModule;
    }());
    GetISOWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetISOWeekPipe],
                    exports: [GetISOWeekPipe]
                },] }
    ];

    var GetISOWeeksInYearPipe = /** @class */ (function () {
        function GetISOWeeksInYearPipe() {
        }
        GetISOWeeksInYearPipe.prototype.transform = function (date) {
            return getISOWeeksInYear(date);
        };
        return GetISOWeeksInYearPipe;
    }());
    GetISOWeeksInYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetISOWeeksInYear' },] }
    ];
    var GetISOWeeksInYearPipeModule = /** @class */ (function () {
        function GetISOWeeksInYearPipeModule() {
        }
        return GetISOWeeksInYearPipeModule;
    }());
    GetISOWeeksInYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetISOWeeksInYearPipe],
                    exports: [GetISOWeeksInYearPipe]
                },] }
    ];

    var GetMillisecondsPipe = /** @class */ (function () {
        function GetMillisecondsPipe() {
        }
        GetMillisecondsPipe.prototype.transform = function (date) {
            return getMilliseconds(date);
        };
        return GetMillisecondsPipe;
    }());
    GetMillisecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetMilliseconds' },] }
    ];
    var GetMillisecondsPipeModule = /** @class */ (function () {
        function GetMillisecondsPipeModule() {
        }
        return GetMillisecondsPipeModule;
    }());
    GetMillisecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetMillisecondsPipe],
                    exports: [GetMillisecondsPipe]
                },] }
    ];

    var GetMinutesPipe = /** @class */ (function () {
        function GetMinutesPipe() {
        }
        GetMinutesPipe.prototype.transform = function (date) {
            return getMinutes(date);
        };
        return GetMinutesPipe;
    }());
    GetMinutesPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetMinutes' },] }
    ];
    var GetMinutesPipeModule = /** @class */ (function () {
        function GetMinutesPipeModule() {
        }
        return GetMinutesPipeModule;
    }());
    GetMinutesPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetMinutesPipe],
                    exports: [GetMinutesPipe]
                },] }
    ];

    var GetMonthPipe = /** @class */ (function () {
        function GetMonthPipe() {
        }
        GetMonthPipe.prototype.transform = function (date) {
            return getMonth(date);
        };
        return GetMonthPipe;
    }());
    GetMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetMonth' },] }
    ];
    var GetMonthPipeModule = /** @class */ (function () {
        function GetMonthPipeModule() {
        }
        return GetMonthPipeModule;
    }());
    GetMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetMonthPipe],
                    exports: [GetMonthPipe]
                },] }
    ];

    var GetOverlappingDaysInIntervalsPipe = /** @class */ (function () {
        function GetOverlappingDaysInIntervalsPipe() {
        }
        GetOverlappingDaysInIntervalsPipe.prototype.transform = function (intervalLeft, intervalRight) {
            return getOverlappingDaysInIntervals(intervalLeft, intervalRight);
        };
        return GetOverlappingDaysInIntervalsPipe;
    }());
    GetOverlappingDaysInIntervalsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetOverlappingDaysInIntervals' },] }
    ];
    var GetOverlappingDaysInIntervalsPipeModule = /** @class */ (function () {
        function GetOverlappingDaysInIntervalsPipeModule() {
        }
        return GetOverlappingDaysInIntervalsPipeModule;
    }());
    GetOverlappingDaysInIntervalsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetOverlappingDaysInIntervalsPipe],
                    exports: [GetOverlappingDaysInIntervalsPipe]
                },] }
    ];

    var GetQuarterPipe = /** @class */ (function () {
        function GetQuarterPipe() {
        }
        GetQuarterPipe.prototype.transform = function (date) {
            return getQuarter(date);
        };
        return GetQuarterPipe;
    }());
    GetQuarterPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetQuarter' },] }
    ];
    var GetQuarterPipeModule = /** @class */ (function () {
        function GetQuarterPipeModule() {
        }
        return GetQuarterPipeModule;
    }());
    GetQuarterPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetQuarterPipe],
                    exports: [GetQuarterPipe]
                },] }
    ];

    var GetSecondsPipe = /** @class */ (function () {
        function GetSecondsPipe() {
        }
        GetSecondsPipe.prototype.transform = function (date) {
            return getSeconds(date);
        };
        return GetSecondsPipe;
    }());
    GetSecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetSeconds' },] }
    ];
    var GetSecondsPipeModule = /** @class */ (function () {
        function GetSecondsPipeModule() {
        }
        return GetSecondsPipeModule;
    }());
    GetSecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetSecondsPipe],
                    exports: [GetSecondsPipe]
                },] }
    ];

    var GetTimePipe = /** @class */ (function () {
        function GetTimePipe() {
        }
        GetTimePipe.prototype.transform = function (date) {
            return getTime(date);
        };
        return GetTimePipe;
    }());
    GetTimePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetTime' },] }
    ];
    var GetTimePipeModule = /** @class */ (function () {
        function GetTimePipeModule() {
        }
        return GetTimePipeModule;
    }());
    GetTimePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetTimePipe],
                    exports: [GetTimePipe]
                },] }
    ];

    var GetYearPipe = /** @class */ (function () {
        function GetYearPipe() {
        }
        GetYearPipe.prototype.transform = function (date) {
            return getYear(date);
        };
        return GetYearPipe;
    }());
    GetYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetYear' },] }
    ];
    var GetYearPipeModule = /** @class */ (function () {
        function GetYearPipeModule() {
        }
        return GetYearPipeModule;
    }());
    GetYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetYearPipe],
                    exports: [GetYearPipe]
                },] }
    ];

    var GetUnixTimePipe = /** @class */ (function () {
        function GetUnixTimePipe() {
        }
        GetUnixTimePipe.prototype.transform = function (date) {
            return getUnixTime(date);
        };
        return GetUnixTimePipe;
    }());
    GetUnixTimePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetUnixTime' },] }
    ];
    var GetUnixTimePipeModule = /** @class */ (function () {
        function GetUnixTimePipeModule() {
        }
        return GetUnixTimePipeModule;
    }());
    GetUnixTimePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetUnixTimePipe],
                    exports: [GetUnixTimePipe]
                },] }
    ];

    var GetWeekPipe = /** @class */ (function () {
        function GetWeekPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        GetWeekPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        GetWeekPipe.prototype.transform = function (date, options) {
            return getWeek(date, calculateLocale(options, this.config));
        };
        return GetWeekPipe;
    }());
    GetWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeek', pure: false },] }
    ];
    GetWeekPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var GetWeekPipeModule = /** @class */ (function () {
        function GetWeekPipeModule() {
        }
        return GetWeekPipeModule;
    }());
    GetWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeekPipe],
                    exports: [GetWeekPipe]
                },] }
    ];

    var GetWeekOfMonthPipe = /** @class */ (function () {
        function GetWeekOfMonthPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        GetWeekOfMonthPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        GetWeekOfMonthPipe.prototype.transform = function (date, options) {
            return getWeekOfMonth(date, calculateLocale(options, this.config));
        };
        return GetWeekOfMonthPipe;
    }());
    GetWeekOfMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeekOfMonth', pure: false },] }
    ];
    GetWeekOfMonthPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var GetWeekOfMonthPipeModule = /** @class */ (function () {
        function GetWeekOfMonthPipeModule() {
        }
        return GetWeekOfMonthPipeModule;
    }());
    GetWeekOfMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeekOfMonthPipe],
                    exports: [GetWeekOfMonthPipe]
                },] }
    ];

    var GetWeeksInMonthPipe = /** @class */ (function () {
        function GetWeeksInMonthPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        GetWeeksInMonthPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        GetWeeksInMonthPipe.prototype.transform = function (date, options) {
            return getWeeksInMonth(date, calculateLocale(options, this.config));
        };
        return GetWeeksInMonthPipe;
    }());
    GetWeeksInMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeeksInMonth', pure: false },] }
    ];
    GetWeeksInMonthPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var GetWeeksInMonthPipeModule = /** @class */ (function () {
        function GetWeeksInMonthPipeModule() {
        }
        return GetWeeksInMonthPipeModule;
    }());
    GetWeeksInMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeeksInMonthPipe],
                    exports: [GetWeeksInMonthPipe]
                },] }
    ];

    var GetDecadePipe = /** @class */ (function () {
        function GetDecadePipe() {
        }
        GetDecadePipe.prototype.transform = function (date) {
            return getDecade(date);
        };
        return GetDecadePipe;
    }());
    GetDecadePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetDecade' },] }
    ];
    var GetDecadePipeModule = /** @class */ (function () {
        function GetDecadePipeModule() {
        }
        return GetDecadePipeModule;
    }());
    GetDecadePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetDecadePipe],
                    exports: [GetDecadePipe]
                },] }
    ];

    var GetWeekYearPipe = /** @class */ (function () {
        function GetWeekYearPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        GetWeekYearPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        GetWeekYearPipe.prototype.transform = function (date, options) {
            return getWeekYear(date, calculateLocale(options, this.config));
        };
        return GetWeekYearPipe;
    }());
    GetWeekYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeekYear', pure: false },] }
    ];
    GetWeekYearPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var GetWeekYearPipeModule = /** @class */ (function () {
        function GetWeekYearPipeModule() {
        }
        return GetWeekYearPipeModule;
    }());
    GetWeekYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeekYearPipe],
                    exports: [GetWeekYearPipe]
                },] }
    ];

    var LastDayOfISOWeekPipe = /** @class */ (function () {
        function LastDayOfISOWeekPipe() {
        }
        LastDayOfISOWeekPipe.prototype.transform = function (date) {
            return lastDayOfISOWeek(date);
        };
        return LastDayOfISOWeekPipe;
    }());
    LastDayOfISOWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfISOWeek' },] }
    ];
    var LastDayOfISOWeekPipeModule = /** @class */ (function () {
        function LastDayOfISOWeekPipeModule() {
        }
        return LastDayOfISOWeekPipeModule;
    }());
    LastDayOfISOWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfISOWeekPipe],
                    exports: [LastDayOfISOWeekPipe]
                },] }
    ];

    var LastDayOfISOWeekYearPipe = /** @class */ (function () {
        function LastDayOfISOWeekYearPipe() {
        }
        LastDayOfISOWeekYearPipe.prototype.transform = function (date) {
            return lastDayOfISOWeekYear(date);
        };
        return LastDayOfISOWeekYearPipe;
    }());
    LastDayOfISOWeekYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfISOWeekYear' },] }
    ];
    var LastDayOfISOWeekYearPipeModule = /** @class */ (function () {
        function LastDayOfISOWeekYearPipeModule() {
        }
        return LastDayOfISOWeekYearPipeModule;
    }());
    LastDayOfISOWeekYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfISOWeekYearPipe],
                    exports: [LastDayOfISOWeekYearPipe]
                },] }
    ];

    var LastDayOfMonthPipe = /** @class */ (function () {
        function LastDayOfMonthPipe() {
        }
        LastDayOfMonthPipe.prototype.transform = function (date) {
            return lastDayOfMonth(date);
        };
        return LastDayOfMonthPipe;
    }());
    LastDayOfMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfMonth' },] }
    ];
    var LastDayOfMonthPipeModule = /** @class */ (function () {
        function LastDayOfMonthPipeModule() {
        }
        return LastDayOfMonthPipeModule;
    }());
    LastDayOfMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfMonthPipe],
                    exports: [LastDayOfMonthPipe]
                },] }
    ];

    var LastDayOfQuarterPipe = /** @class */ (function () {
        function LastDayOfQuarterPipe() {
        }
        LastDayOfQuarterPipe.prototype.transform = function (date) {
            return lastDayOfQuarter(date);
        };
        return LastDayOfQuarterPipe;
    }());
    LastDayOfQuarterPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfQuarter' },] }
    ];
    var LastDayOfQuarterPipeModule = /** @class */ (function () {
        function LastDayOfQuarterPipeModule() {
        }
        return LastDayOfQuarterPipeModule;
    }());
    LastDayOfQuarterPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfQuarterPipe],
                    exports: [LastDayOfQuarterPipe]
                },] }
    ];

    var LastDayOfWeekPipe = /** @class */ (function () {
        function LastDayOfWeekPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        LastDayOfWeekPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        LastDayOfWeekPipe.prototype.transform = function (date, options) {
            return lastDayOfWeek(date, calculateLocale(options, this.config));
        };
        return LastDayOfWeekPipe;
    }());
    LastDayOfWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfWeek', pure: false },] }
    ];
    LastDayOfWeekPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var LastDayOfWeekPipeModule = /** @class */ (function () {
        function LastDayOfWeekPipeModule() {
        }
        return LastDayOfWeekPipeModule;
    }());
    LastDayOfWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfWeekPipe],
                    exports: [LastDayOfWeekPipe]
                },] }
    ];

    var LastDayOfYearPipe = /** @class */ (function () {
        function LastDayOfYearPipe() {
        }
        LastDayOfYearPipe.prototype.transform = function (date) {
            return lastDayOfYear(date);
        };
        return LastDayOfYearPipe;
    }());
    LastDayOfYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfYear' },] }
    ];
    var LastDayOfYearPipeModule = /** @class */ (function () {
        function LastDayOfYearPipeModule() {
        }
        return LastDayOfYearPipeModule;
    }());
    LastDayOfYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfYearPipe],
                    exports: [LastDayOfYearPipe]
                },] }
    ];

    var LastDayOfDecadePipe = /** @class */ (function () {
        function LastDayOfDecadePipe() {
        }
        LastDayOfDecadePipe.prototype.transform = function (date) {
            return lastDayOfDecade(date);
        };
        return LastDayOfDecadePipe;
    }());
    LastDayOfDecadePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfDecade' },] }
    ];
    var LastDayOfDecadePipeModule = /** @class */ (function () {
        function LastDayOfDecadePipeModule() {
        }
        return LastDayOfDecadePipeModule;
    }());
    LastDayOfDecadePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfDecadePipe],
                    exports: [LastDayOfDecadePipe]
                },] }
    ];

    var MaxPipe = /** @class */ (function () {
        function MaxPipe() {
        }
        MaxPipe.prototype.transform = function (dates) {
            return max(dates);
        };
        return MaxPipe;
    }());
    MaxPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsMax' },] }
    ];
    var MaxPipeModule = /** @class */ (function () {
        function MaxPipeModule() {
        }
        return MaxPipeModule;
    }());
    MaxPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [MaxPipe],
                    exports: [MaxPipe]
                },] }
    ];

    var MinPipe = /** @class */ (function () {
        function MinPipe() {
        }
        MinPipe.prototype.transform = function (dates) {
            return min(dates);
        };
        return MinPipe;
    }());
    MinPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsMin' },] }
    ];
    var MinPipeModule = /** @class */ (function () {
        function MinPipeModule() {
        }
        return MinPipeModule;
    }());
    MinPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [MinPipe],
                    exports: [MinPipe]
                },] }
    ];

    var StartOfDayPipe = /** @class */ (function () {
        function StartOfDayPipe() {
        }
        StartOfDayPipe.prototype.transform = function (date) {
            return startOfDay(date);
        };
        return StartOfDayPipe;
    }());
    StartOfDayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfDay' },] }
    ];
    var StartOfDayPipeModule = /** @class */ (function () {
        function StartOfDayPipeModule() {
        }
        return StartOfDayPipeModule;
    }());
    StartOfDayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfDayPipe],
                    exports: [StartOfDayPipe]
                },] }
    ];

    var StartOfHourPipe = /** @class */ (function () {
        function StartOfHourPipe() {
        }
        StartOfHourPipe.prototype.transform = function (date) {
            return startOfHour(date);
        };
        return StartOfHourPipe;
    }());
    StartOfHourPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfHour' },] }
    ];
    var StartOfHourPipeModule = /** @class */ (function () {
        function StartOfHourPipeModule() {
        }
        return StartOfHourPipeModule;
    }());
    StartOfHourPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfHourPipe],
                    exports: [StartOfHourPipe]
                },] }
    ];

    var StartOfISOWeekPipe = /** @class */ (function () {
        function StartOfISOWeekPipe() {
        }
        StartOfISOWeekPipe.prototype.transform = function (date) {
            return startOfISOWeek(date);
        };
        return StartOfISOWeekPipe;
    }());
    StartOfISOWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfISOWeek' },] }
    ];
    var StartOfISOWeekPipeModule = /** @class */ (function () {
        function StartOfISOWeekPipeModule() {
        }
        return StartOfISOWeekPipeModule;
    }());
    StartOfISOWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfISOWeekPipe],
                    exports: [StartOfISOWeekPipe]
                },] }
    ];

    var StartOfISOWeekYearPipe = /** @class */ (function () {
        function StartOfISOWeekYearPipe() {
        }
        StartOfISOWeekYearPipe.prototype.transform = function (date) {
            return startOfISOWeekYear(date);
        };
        return StartOfISOWeekYearPipe;
    }());
    StartOfISOWeekYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfISOWeekYear' },] }
    ];
    var StartOfISOWeekYearPipeModule = /** @class */ (function () {
        function StartOfISOWeekYearPipeModule() {
        }
        return StartOfISOWeekYearPipeModule;
    }());
    StartOfISOWeekYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfISOWeekYearPipe],
                    exports: [StartOfISOWeekYearPipe]
                },] }
    ];

    var StartOfMinutePipe = /** @class */ (function () {
        function StartOfMinutePipe() {
        }
        StartOfMinutePipe.prototype.transform = function (date) {
            return startOfMinute(date);
        };
        return StartOfMinutePipe;
    }());
    StartOfMinutePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfMinute' },] }
    ];
    var StartOfMinutePipeModule = /** @class */ (function () {
        function StartOfMinutePipeModule() {
        }
        return StartOfMinutePipeModule;
    }());
    StartOfMinutePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfMinutePipe],
                    exports: [StartOfMinutePipe]
                },] }
    ];

    var StartOfMonthPipe = /** @class */ (function () {
        function StartOfMonthPipe() {
        }
        StartOfMonthPipe.prototype.transform = function (date) {
            return startOfMonth(date);
        };
        return StartOfMonthPipe;
    }());
    StartOfMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfMonth' },] }
    ];
    var StartOfMonthPipeModule = /** @class */ (function () {
        function StartOfMonthPipeModule() {
        }
        return StartOfMonthPipeModule;
    }());
    StartOfMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfMonthPipe],
                    exports: [StartOfMonthPipe]
                },] }
    ];

    var StartOfQuarterPipe = /** @class */ (function () {
        function StartOfQuarterPipe() {
        }
        StartOfQuarterPipe.prototype.transform = function (date) {
            return startOfQuarter(date);
        };
        return StartOfQuarterPipe;
    }());
    StartOfQuarterPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfQuarter' },] }
    ];
    var StartOfQuarterPipeModule = /** @class */ (function () {
        function StartOfQuarterPipeModule() {
        }
        return StartOfQuarterPipeModule;
    }());
    StartOfQuarterPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfQuarterPipe],
                    exports: [StartOfQuarterPipe]
                },] }
    ];

    var StartOfSecondPipe = /** @class */ (function () {
        function StartOfSecondPipe() {
        }
        StartOfSecondPipe.prototype.transform = function (date) {
            return startOfSecond(date);
        };
        return StartOfSecondPipe;
    }());
    StartOfSecondPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfSecond' },] }
    ];
    var StartOfSecondPipeModule = /** @class */ (function () {
        function StartOfSecondPipeModule() {
        }
        return StartOfSecondPipeModule;
    }());
    StartOfSecondPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfSecondPipe],
                    exports: [StartOfSecondPipe]
                },] }
    ];

    var StartOfTodayPipe = /** @class */ (function () {
        function StartOfTodayPipe() {
        }
        StartOfTodayPipe.prototype.transform = function () {
            return startOfToday();
        };
        return StartOfTodayPipe;
    }());
    StartOfTodayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfToday' },] }
    ];
    var StartOfTodayPipeModule = /** @class */ (function () {
        function StartOfTodayPipeModule() {
        }
        return StartOfTodayPipeModule;
    }());
    StartOfTodayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfTodayPipe],
                    exports: [StartOfTodayPipe]
                },] }
    ];

    var StartOfTomorrowPipe = /** @class */ (function () {
        function StartOfTomorrowPipe() {
        }
        StartOfTomorrowPipe.prototype.transform = function () {
            return startOfTomorrow();
        };
        return StartOfTomorrowPipe;
    }());
    StartOfTomorrowPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfTomorrow' },] }
    ];
    var StartOfTomorrowPipeModule = /** @class */ (function () {
        function StartOfTomorrowPipeModule() {
        }
        return StartOfTomorrowPipeModule;
    }());
    StartOfTomorrowPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfTomorrowPipe],
                    exports: [StartOfTomorrowPipe]
                },] }
    ];

    var StartOfWeekPipe = /** @class */ (function () {
        function StartOfWeekPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        StartOfWeekPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        StartOfWeekPipe.prototype.transform = function (date, options) {
            return startOfWeek(date, calculateLocale(options, this.config));
        };
        return StartOfWeekPipe;
    }());
    StartOfWeekPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfWeek', pure: false },] }
    ];
    StartOfWeekPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var StartOfWeekPipeModule = /** @class */ (function () {
        function StartOfWeekPipeModule() {
        }
        return StartOfWeekPipeModule;
    }());
    StartOfWeekPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfWeekPipe],
                    exports: [StartOfWeekPipe]
                },] }
    ];

    var StartOfYearPipe = /** @class */ (function () {
        function StartOfYearPipe() {
        }
        StartOfYearPipe.prototype.transform = function (date) {
            return startOfYear(date);
        };
        return StartOfYearPipe;
    }());
    StartOfYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfYear' },] }
    ];
    var StartOfYearPipeModule = /** @class */ (function () {
        function StartOfYearPipeModule() {
        }
        return StartOfYearPipeModule;
    }());
    StartOfYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfYearPipe],
                    exports: [StartOfYearPipe]
                },] }
    ];

    var StartOfYesterdayPipe = /** @class */ (function () {
        function StartOfYesterdayPipe() {
        }
        StartOfYesterdayPipe.prototype.transform = function () {
            return startOfYesterday();
        };
        return StartOfYesterdayPipe;
    }());
    StartOfYesterdayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfYesterday' },] }
    ];
    var StartOfYesterdayPipeModule = /** @class */ (function () {
        function StartOfYesterdayPipeModule() {
        }
        return StartOfYesterdayPipeModule;
    }());
    StartOfYesterdayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfYesterdayPipe],
                    exports: [StartOfYesterdayPipe]
                },] }
    ];

    var StartOfDecadePipe = /** @class */ (function () {
        function StartOfDecadePipe() {
        }
        StartOfDecadePipe.prototype.transform = function (date) {
            return startOfDecade(date);
        };
        return StartOfDecadePipe;
    }());
    StartOfDecadePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfDecade' },] }
    ];
    var StartOfDecadePipeModule = /** @class */ (function () {
        function StartOfDecadePipeModule() {
        }
        return StartOfDecadePipeModule;
    }());
    StartOfDecadePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfDecadePipe],
                    exports: [StartOfDecadePipe]
                },] }
    ];

    var StartOfWeekYearPipe = /** @class */ (function () {
        function StartOfWeekYearPipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        StartOfWeekYearPipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        StartOfWeekYearPipe.prototype.transform = function (date, options) {
            return startOfWeekYear(date, calculateLocale(options, this.config));
        };
        return StartOfWeekYearPipe;
    }());
    StartOfWeekYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfWeekYear', pure: false },] }
    ];
    StartOfWeekYearPipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var StartOfWeekYearPipeModule = /** @class */ (function () {
        function StartOfWeekYearPipeModule() {
        }
        return StartOfWeekYearPipeModule;
    }());
    StartOfWeekYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfWeekYearPipe],
                    exports: [StartOfWeekYearPipe]
                },] }
    ];

    var SubDaysPipe = /** @class */ (function () {
        function SubDaysPipe() {
        }
        SubDaysPipe.prototype.transform = function (date, amount) {
            return subDays(date, amount);
        };
        return SubDaysPipe;
    }());
    SubDaysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubDays' },] }
    ];
    var SubDaysPipeModule = /** @class */ (function () {
        function SubDaysPipeModule() {
        }
        return SubDaysPipeModule;
    }());
    SubDaysPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubDaysPipe],
                    exports: [SubDaysPipe]
                },] }
    ];

    var SubHoursPipe = /** @class */ (function () {
        function SubHoursPipe() {
        }
        SubHoursPipe.prototype.transform = function (date, amount) {
            return subHours(date, amount);
        };
        return SubHoursPipe;
    }());
    SubHoursPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubHours' },] }
    ];
    var SubHoursPipeModule = /** @class */ (function () {
        function SubHoursPipeModule() {
        }
        return SubHoursPipeModule;
    }());
    SubHoursPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubHoursPipe],
                    exports: [SubHoursPipe]
                },] }
    ];

    var SubISOWeekYearsPipe = /** @class */ (function () {
        function SubISOWeekYearsPipe() {
        }
        SubISOWeekYearsPipe.prototype.transform = function (date, amount) {
            return subISOWeekYears(date, amount);
        };
        return SubISOWeekYearsPipe;
    }());
    SubISOWeekYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubISOWeekYears' },] }
    ];
    var SubISOWeekYearsPipeModule = /** @class */ (function () {
        function SubISOWeekYearsPipeModule() {
        }
        return SubISOWeekYearsPipeModule;
    }());
    SubISOWeekYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubISOWeekYearsPipe],
                    exports: [SubISOWeekYearsPipe]
                },] }
    ];

    var SubMillisecondsPipe = /** @class */ (function () {
        function SubMillisecondsPipe() {
        }
        SubMillisecondsPipe.prototype.transform = function (date, amount) {
            return subMilliseconds(date, amount);
        };
        return SubMillisecondsPipe;
    }());
    SubMillisecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubMilliseconds' },] }
    ];
    var SubMillisecondsPipeModule = /** @class */ (function () {
        function SubMillisecondsPipeModule() {
        }
        return SubMillisecondsPipeModule;
    }());
    SubMillisecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubMillisecondsPipe],
                    exports: [SubMillisecondsPipe]
                },] }
    ];

    var SubMinutesPipe = /** @class */ (function () {
        function SubMinutesPipe() {
        }
        SubMinutesPipe.prototype.transform = function (date, amount) {
            return subMinutes(date, amount);
        };
        return SubMinutesPipe;
    }());
    SubMinutesPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubMinutes' },] }
    ];
    var SubMinutesPipeModule = /** @class */ (function () {
        function SubMinutesPipeModule() {
        }
        return SubMinutesPipeModule;
    }());
    SubMinutesPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubMinutesPipe],
                    exports: [SubMinutesPipe]
                },] }
    ];

    var SubMonthsPipe = /** @class */ (function () {
        function SubMonthsPipe() {
        }
        SubMonthsPipe.prototype.transform = function (date, amount) {
            return subMonths(date, amount);
        };
        return SubMonthsPipe;
    }());
    SubMonthsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubMonths' },] }
    ];
    var SubMonthsPipeModule = /** @class */ (function () {
        function SubMonthsPipeModule() {
        }
        return SubMonthsPipeModule;
    }());
    SubMonthsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubMonthsPipe],
                    exports: [SubMonthsPipe]
                },] }
    ];

    var SubQuartersPipe = /** @class */ (function () {
        function SubQuartersPipe() {
        }
        SubQuartersPipe.prototype.transform = function (date, amount) {
            return subQuarters(date, amount);
        };
        return SubQuartersPipe;
    }());
    SubQuartersPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubQuarters' },] }
    ];
    var SubQuartersPipeModule = /** @class */ (function () {
        function SubQuartersPipeModule() {
        }
        return SubQuartersPipeModule;
    }());
    SubQuartersPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubQuartersPipe],
                    exports: [SubQuartersPipe]
                },] }
    ];

    var SubSecondsPipe = /** @class */ (function () {
        function SubSecondsPipe() {
        }
        SubSecondsPipe.prototype.transform = function (date, amount) {
            return subSeconds(date, amount);
        };
        return SubSecondsPipe;
    }());
    SubSecondsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubSeconds' },] }
    ];
    var SubSecondsPipeModule = /** @class */ (function () {
        function SubSecondsPipeModule() {
        }
        return SubSecondsPipeModule;
    }());
    SubSecondsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubSecondsPipe],
                    exports: [SubSecondsPipe]
                },] }
    ];

    var SubWeeksPipe = /** @class */ (function () {
        function SubWeeksPipe() {
        }
        SubWeeksPipe.prototype.transform = function (date, amount) {
            return subWeeks(date, amount);
        };
        return SubWeeksPipe;
    }());
    SubWeeksPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubWeeks' },] }
    ];
    var SubWeeksPipeModule = /** @class */ (function () {
        function SubWeeksPipeModule() {
        }
        return SubWeeksPipeModule;
    }());
    SubWeeksPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubWeeksPipe],
                    exports: [SubWeeksPipe]
                },] }
    ];

    var SubYearsPipe = /** @class */ (function () {
        function SubYearsPipe() {
        }
        SubYearsPipe.prototype.transform = function (date, amount) {
            return subYears(date, amount);
        };
        return SubYearsPipe;
    }());
    SubYearsPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsSubYears' },] }
    ];
    var SubYearsPipeModule = /** @class */ (function () {
        function SubYearsPipeModule() {
        }
        return SubYearsPipeModule;
    }());
    SubYearsPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SubYearsPipe],
                    exports: [SubYearsPipe]
                },] }
    ];

    var IsAfterPipe = /** @class */ (function () {
        function IsAfterPipe() {
        }
        IsAfterPipe.prototype.transform = function (date, dateToCompare) {
            return isAfter(date, dateToCompare);
        };
        return IsAfterPipe;
    }());
    IsAfterPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsAfter' },] }
    ];
    var IsAfterPipeModule = /** @class */ (function () {
        function IsAfterPipeModule() {
        }
        return IsAfterPipeModule;
    }());
    IsAfterPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsAfterPipe],
                    exports: [IsAfterPipe]
                },] }
    ];

    var IsBeforePipe = /** @class */ (function () {
        function IsBeforePipe() {
        }
        IsBeforePipe.prototype.transform = function (date, dateToCompare) {
            return isBefore(date, dateToCompare);
        };
        return IsBeforePipe;
    }());
    IsBeforePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsBefore' },] }
    ];
    var IsBeforePipeModule = /** @class */ (function () {
        function IsBeforePipeModule() {
        }
        return IsBeforePipeModule;
    }());
    IsBeforePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsBeforePipe],
                    exports: [IsBeforePipe]
                },] }
    ];

    var IsDatePipe = /** @class */ (function () {
        function IsDatePipe() {
        }
        IsDatePipe.prototype.transform = function (date) {
            return isDate(date);
        };
        return IsDatePipe;
    }());
    IsDatePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsDate' },] }
    ];
    var IsDatePipeModule = /** @class */ (function () {
        function IsDatePipeModule() {
        }
        return IsDatePipeModule;
    }());
    IsDatePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsDatePipe],
                    exports: [IsDatePipe]
                },] }
    ];

    var IsEqualPipe = /** @class */ (function () {
        function IsEqualPipe() {
        }
        IsEqualPipe.prototype.transform = function (dateLeft, dateRight) {
            return isEqual(dateLeft, dateRight);
        };
        return IsEqualPipe;
    }());
    IsEqualPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsEqual' },] }
    ];
    var IsEqualPipeModule = /** @class */ (function () {
        function IsEqualPipeModule() {
        }
        return IsEqualPipeModule;
    }());
    IsEqualPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsEqualPipe],
                    exports: [IsEqualPipe]
                },] }
    ];

    var IsFuturePipe = /** @class */ (function () {
        function IsFuturePipe() {
        }
        IsFuturePipe.prototype.transform = function (date) {
            return isFuture(date);
        };
        return IsFuturePipe;
    }());
    IsFuturePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsFuture' },] }
    ];
    var IsFuturePipeModule = /** @class */ (function () {
        function IsFuturePipeModule() {
        }
        return IsFuturePipeModule;
    }());
    IsFuturePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsFuturePipe],
                    exports: [IsFuturePipe]
                },] }
    ];

    var IsPastPipe = /** @class */ (function () {
        function IsPastPipe() {
        }
        IsPastPipe.prototype.transform = function (date) {
            return isPast(date);
        };
        return IsPastPipe;
    }());
    IsPastPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsPast' },] }
    ];
    var IsPastPipeModule = /** @class */ (function () {
        function IsPastPipeModule() {
        }
        return IsPastPipeModule;
    }());
    IsPastPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsPastPipe],
                    exports: [IsPastPipe]
                },] }
    ];

    var IsValidPipe = /** @class */ (function () {
        function IsValidPipe() {
        }
        IsValidPipe.prototype.transform = function (date) {
            return isValid(date);
        };
        return IsValidPipe;
    }());
    IsValidPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsValid' },] }
    ];
    var IsValidPipeModule = /** @class */ (function () {
        function IsValidPipeModule() {
        }
        return IsValidPipeModule;
    }());
    IsValidPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsValidPipe],
                    exports: [IsValidPipe]
                },] }
    ];

    var IsTodayPipe = /** @class */ (function () {
        function IsTodayPipe() {
        }
        IsTodayPipe.prototype.transform = function (date) {
            return isToday(date);
        };
        return IsTodayPipe;
    }());
    IsTodayPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsToday' },] }
    ];
    var IsTodayPipeModule = /** @class */ (function () {
        function IsTodayPipeModule() {
        }
        return IsTodayPipeModule;
    }());
    IsTodayPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsTodayPipe],
                    exports: [IsTodayPipe]
                },] }
    ];

    var IsTomorrowPipe = /** @class */ (function () {
        function IsTomorrowPipe() {
        }
        IsTomorrowPipe.prototype.transform = function (date) {
            return isTomorrow(date);
        };
        return IsTomorrowPipe;
    }());
    IsTomorrowPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsTomorrow' },] }
    ];
    var IsTomorrowPipeModule = /** @class */ (function () {
        function IsTomorrowPipeModule() {
        }
        return IsTomorrowPipeModule;
    }());
    IsTomorrowPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsTomorrowPipe],
                    exports: [IsTomorrowPipe]
                },] }
    ];

    var IsWeekendPipe = /** @class */ (function () {
        function IsWeekendPipe() {
        }
        IsWeekendPipe.prototype.transform = function (date) {
            return isWeekend(date);
        };
        return IsWeekendPipe;
    }());
    IsWeekendPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsWeekend' },] }
    ];
    var IsWeekendPipeModule = /** @class */ (function () {
        function IsWeekendPipeModule() {
        }
        return IsWeekendPipeModule;
    }());
    IsWeekendPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsWeekendPipe],
                    exports: [IsWeekendPipe]
                },] }
    ];

    var IsSameMonthPipe = /** @class */ (function () {
        function IsSameMonthPipe() {
        }
        IsSameMonthPipe.prototype.transform = function (dateLeft, dateRight) {
            return isSameMonth(dateLeft, dateRight);
        };
        return IsSameMonthPipe;
    }());
    IsSameMonthPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsSameMonth' },] }
    ];
    var IsSameMonthPipeModule = /** @class */ (function () {
        function IsSameMonthPipeModule() {
        }
        return IsSameMonthPipeModule;
    }());
    IsSameMonthPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsSameMonthPipe],
                    exports: [IsSameMonthPipe]
                },] }
    ];

    var ParsePipe = /** @class */ (function () {
        function ParsePipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        ParsePipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        ParsePipe.prototype.transform = function (dateString, formatString, backupDate, options) {
            return parse(dateString, formatString, backupDate, calculateLocale(options, this.config));
        };
        return ParsePipe;
    }());
    ParsePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsParse', pure: false },] }
    ];
    ParsePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var ParsePipeModule = /** @class */ (function () {
        function ParsePipeModule() {
        }
        return ParsePipeModule;
    }());
    ParsePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ParsePipe],
                    exports: [ParsePipe]
                },] }
    ];

    var formats = {
        x1: 'eeeee',
        x2: 'eeeeee',
        x3: 'eee',
        full: 'eeee'
    };
    var WeekdayNamePipe = /** @class */ (function () {
        function WeekdayNamePipe(config, cd) {
            var _this = this;
            this.config = config;
            this.cd = cd;
            this.localeChanged$ = this.config.localeChanged.subscribe(function (_) { return _this.cd.markForCheck(); });
        }
        WeekdayNamePipe.prototype.ngOnDestroy = function () {
            this.localeChanged$.unsubscribe();
        };
        WeekdayNamePipe.prototype.transform = function (day, view, options) {
            if (view === void 0) { view = 'full'; }
            var locale = calculateLocale(options, this.config);
            var now = new Date();
            var week = eachDayOfInterval({
                start: startOfWeek(now, locale),
                end: endOfWeek(now, locale)
            });
            return format(week[day], formats[view], locale);
        };
        return WeekdayNamePipe;
    }());
    WeekdayNamePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsWeekdayName', pure: false },] }
    ];
    WeekdayNamePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService },
        { type: i0.ChangeDetectorRef }
    ]; };
    var WeekdayNamePipeModule = /** @class */ (function () {
        function WeekdayNamePipeModule() {
        }
        return WeekdayNamePipeModule;
    }());
    WeekdayNamePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [WeekdayNamePipe],
                    exports: [WeekdayNamePipe]
                },] }
    ];

    var IsSameYearPipe = /** @class */ (function () {
        function IsSameYearPipe() {
        }
        IsSameYearPipe.prototype.transform = function (dateLeft, dateRight) {
            return isSameYear(dateLeft, dateRight);
        };
        return IsSameYearPipe;
    }());
    IsSameYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsIsSameYear' },] }
    ];
    var IsSameYearPipeModule = /** @class */ (function () {
        function IsSameYearPipeModule() {
        }
        return IsSameYearPipeModule;
    }());
    IsSameYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [IsSameYearPipe],
                    exports: [IsSameYearPipe]
                },] }
    ];

    var DifferenceInCalendarQuartersPipe = /** @class */ (function () {
        function DifferenceInCalendarQuartersPipe() {
        }
        DifferenceInCalendarQuartersPipe.prototype.transform = function (dateLeft, dateRight) {
            return differenceInCalendarQuarters(dateLeft, dateRight);
        };
        return DifferenceInCalendarQuartersPipe;
    }());
    DifferenceInCalendarQuartersPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsDifferenceInCalendarQuarters' },] }
    ];
    var DifferenceInCalendarQuartersPipeModule = /** @class */ (function () {
        function DifferenceInCalendarQuartersPipeModule() {
        }
        return DifferenceInCalendarQuartersPipeModule;
    }());
    DifferenceInCalendarQuartersPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DifferenceInCalendarQuartersPipe],
                    exports: [DifferenceInCalendarQuartersPipe]
                },] }
    ];

    var GetISOWeekYearPipe = /** @class */ (function () {
        function GetISOWeekYearPipe() {
        }
        GetISOWeekYearPipe.prototype.transform = function (date) {
            return getISOWeekYear(date);
        };
        return GetISOWeekYearPipe;
    }());
    GetISOWeekYearPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetISOWeekYear' },] }
    ];
    var GetISOWeekYearPipeModule = /** @class */ (function () {
        function GetISOWeekYearPipeModule() {
        }
        return GetISOWeekYearPipeModule;
    }());
    GetISOWeekYearPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetISOWeekYearPipe],
                    exports: [GetISOWeekYearPipe]
                },] }
    ];

    var FormatPurePipe = /** @class */ (function () {
        function FormatPurePipe(config) {
            this.config = config;
        }
        FormatPurePipe.prototype.transform = function (date, dateFormat, options) {
            return format(date, dateFormat, calculateLocale(options, this.config));
        };
        return FormatPurePipe;
    }());
    FormatPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatPure' },] }
    ];
    FormatPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var FormatPurePipeModule = /** @class */ (function () {
        function FormatPurePipeModule() {
        }
        return FormatPurePipeModule;
    }());
    FormatPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatPurePipe],
                    exports: [FormatPurePipe]
                },] }
    ];

    var FormatRelativePurePipe = /** @class */ (function () {
        function FormatRelativePurePipe(config) {
            this.config = config;
        }
        FormatRelativePurePipe.prototype.transform = function (date, baseDate, options) {
            if (baseDate === void 0) { baseDate = new Date(); }
            var formatRelativeLocale = {
                lastWeek: 'eeee',
                yesterday: '\'Gestern\'',
                today: '\'Heute\'',
                tomorrow: '\'Morgen\'',
                nextWeek: 'eeee',
                other: 'eeee'
            };
            var locale = Object.assign(Object.assign({}, de), { formatRelative: function (token) { return formatRelativeLocale[token]; } });
            return formatRelative(date, baseDate, { locale: locale });
        };
        return FormatRelativePurePipe;
    }());
    FormatRelativePurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatRelativePure' },] }
    ];
    FormatRelativePurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var FormatRelativePurePipeModule = /** @class */ (function () {
        function FormatRelativePurePipeModule() {
        }
        return FormatRelativePurePipeModule;
    }());
    FormatRelativePurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatRelativePurePipe],
                    exports: [FormatRelativePurePipe]
                },] }
    ];

    var FormatDistancePurePipe = /** @class */ (function () {
        function FormatDistancePurePipe(config) {
            this.config = config;
        }
        FormatDistancePurePipe.prototype.transform = function (date, dateToCompare, options) {
            return formatDistance(date, dateToCompare, calculateLocale(options, this.config));
        };
        return FormatDistancePurePipe;
    }());
    FormatDistancePurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatDistancePure' },] }
    ];
    FormatDistancePurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var FormatDistancePurePipeModule = /** @class */ (function () {
        function FormatDistancePurePipeModule() {
        }
        return FormatDistancePurePipeModule;
    }());
    FormatDistancePurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatDistancePurePipe],
                    exports: [FormatDistancePurePipe]
                },] }
    ];

    var FormatDistanceStrictPurePipe = /** @class */ (function () {
        function FormatDistanceStrictPurePipe(config) {
            this.config = config;
        }
        FormatDistanceStrictPurePipe.prototype.transform = function (date, dateToCompare, options) {
            return formatDistanceStrict(date, dateToCompare, calculateLocale(options, this.config));
        };
        return FormatDistanceStrictPurePipe;
    }());
    FormatDistanceStrictPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatDistanceStrictPure' },] }
    ];
    FormatDistanceStrictPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var FormatDistanceStrictPurePipeModule = /** @class */ (function () {
        function FormatDistanceStrictPurePipeModule() {
        }
        return FormatDistanceStrictPurePipeModule;
    }());
    FormatDistanceStrictPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatDistanceStrictPurePipe],
                    exports: [FormatDistanceStrictPurePipe]
                },] }
    ];

    var FormatDistanceToNowPurePipe = /** @class */ (function () {
        function FormatDistanceToNowPurePipe(config) {
            this.config = config;
        }
        FormatDistanceToNowPurePipe.prototype.transform = function (date, options) {
            return formatDistanceToNow(date, calculateLocale(options, this.config));
        };
        return FormatDistanceToNowPurePipe;
    }());
    FormatDistanceToNowPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsFormatDistanceToNowPure' },] }
    ];
    FormatDistanceToNowPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var FormatDistanceToNowPurePipeModule = /** @class */ (function () {
        function FormatDistanceToNowPurePipeModule() {
        }
        return FormatDistanceToNowPurePipeModule;
    }());
    FormatDistanceToNowPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [FormatDistanceToNowPurePipe],
                    exports: [FormatDistanceToNowPurePipe]
                },] }
    ];

    var GetWeekPurePipe = /** @class */ (function () {
        function GetWeekPurePipe(config) {
            this.config = config;
        }
        GetWeekPurePipe.prototype.transform = function (date, options) {
            return getWeek(date, calculateLocale(options, this.config));
        };
        return GetWeekPurePipe;
    }());
    GetWeekPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeekPure' },] }
    ];
    GetWeekPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var GetWeekPurePipeModule = /** @class */ (function () {
        function GetWeekPurePipeModule() {
        }
        return GetWeekPurePipeModule;
    }());
    GetWeekPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeekPurePipe],
                    exports: [GetWeekPurePipe]
                },] }
    ];

    var GetWeekOfMonthPurePipe = /** @class */ (function () {
        function GetWeekOfMonthPurePipe(config) {
            this.config = config;
        }
        GetWeekOfMonthPurePipe.prototype.transform = function (date, options) {
            return getWeekOfMonth(date, calculateLocale(options, this.config));
        };
        return GetWeekOfMonthPurePipe;
    }());
    GetWeekOfMonthPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeekOfMonthPure' },] }
    ];
    GetWeekOfMonthPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var GetWeekOfMonthPurePipeModule = /** @class */ (function () {
        function GetWeekOfMonthPurePipeModule() {
        }
        return GetWeekOfMonthPurePipeModule;
    }());
    GetWeekOfMonthPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeekOfMonthPurePipe],
                    exports: [GetWeekOfMonthPurePipe]
                },] }
    ];

    var GetWeeksInMonthPurePipe = /** @class */ (function () {
        function GetWeeksInMonthPurePipe(config) {
            this.config = config;
        }
        GetWeeksInMonthPurePipe.prototype.transform = function (date, options) {
            return getWeeksInMonth(date, calculateLocale(options, this.config));
        };
        return GetWeeksInMonthPurePipe;
    }());
    GetWeeksInMonthPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeeksInMonthPure' },] }
    ];
    GetWeeksInMonthPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var GetWeeksInMonthPurePipeModule = /** @class */ (function () {
        function GetWeeksInMonthPurePipeModule() {
        }
        return GetWeeksInMonthPurePipeModule;
    }());
    GetWeeksInMonthPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeeksInMonthPurePipe],
                    exports: [GetWeeksInMonthPurePipe]
                },] }
    ];

    var GetWeekYearPurePipe = /** @class */ (function () {
        function GetWeekYearPurePipe(config) {
            this.config = config;
        }
        GetWeekYearPurePipe.prototype.transform = function (date, options) {
            return getWeekYear(date, calculateLocale(options, this.config));
        };
        return GetWeekYearPurePipe;
    }());
    GetWeekYearPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsGetWeekYearPure' },] }
    ];
    GetWeekYearPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var GetWeekYearPurePipeModule = /** @class */ (function () {
        function GetWeekYearPurePipeModule() {
        }
        return GetWeekYearPurePipeModule;
    }());
    GetWeekYearPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GetWeekYearPurePipe],
                    exports: [GetWeekYearPurePipe]
                },] }
    ];

    var StartOfWeekPurePipe = /** @class */ (function () {
        function StartOfWeekPurePipe(config) {
            this.config = config;
        }
        StartOfWeekPurePipe.prototype.transform = function (date, options) {
            return startOfWeek(date, calculateLocale(options, this.config));
        };
        return StartOfWeekPurePipe;
    }());
    StartOfWeekPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfWeekPure' },] }
    ];
    StartOfWeekPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var StartOfWeekPurePipeModule = /** @class */ (function () {
        function StartOfWeekPurePipeModule() {
        }
        return StartOfWeekPurePipeModule;
    }());
    StartOfWeekPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfWeekPurePipe],
                    exports: [StartOfWeekPurePipe]
                },] }
    ];

    var StartOfWeekYearPurePipe = /** @class */ (function () {
        function StartOfWeekYearPurePipe(config) {
            this.config = config;
        }
        StartOfWeekYearPurePipe.prototype.transform = function (date, options) {
            return startOfWeekYear(date, calculateLocale(options, this.config));
        };
        return StartOfWeekYearPurePipe;
    }());
    StartOfWeekYearPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsStartOfWeekYearPure' },] }
    ];
    StartOfWeekYearPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var StartOfWeekYearPurePipeModule = /** @class */ (function () {
        function StartOfWeekYearPurePipeModule() {
        }
        return StartOfWeekYearPurePipeModule;
    }());
    StartOfWeekYearPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [StartOfWeekYearPurePipe],
                    exports: [StartOfWeekYearPurePipe]
                },] }
    ];

    var LastDayOfWeekPurePipe = /** @class */ (function () {
        function LastDayOfWeekPurePipe(config) {
            this.config = config;
        }
        LastDayOfWeekPurePipe.prototype.transform = function (date, options) {
            return lastDayOfWeek(date, calculateLocale(options, this.config));
        };
        return LastDayOfWeekPurePipe;
    }());
    LastDayOfWeekPurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsLastDayOfWeekPure' },] }
    ];
    LastDayOfWeekPurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var LastDayOfWeekPurePipeModule = /** @class */ (function () {
        function LastDayOfWeekPurePipeModule() {
        }
        return LastDayOfWeekPurePipeModule;
    }());
    LastDayOfWeekPurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LastDayOfWeekPurePipe],
                    exports: [LastDayOfWeekPurePipe]
                },] }
    ];

    var ParsePurePipe = /** @class */ (function () {
        function ParsePurePipe(config) {
            this.config = config;
        }
        ParsePurePipe.prototype.transform = function (dateString, formatString, backupDate, options) {
            return parse(dateString, formatString, backupDate, calculateLocale(options, this.config));
        };
        return ParsePurePipe;
    }());
    ParsePurePipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsParsePure' },] }
    ];
    ParsePurePipe.ctorParameters = function () { return [
        { type: DateFnsConfigurationService }
    ]; };
    var ParsePurePipeModule = /** @class */ (function () {
        function ParsePurePipeModule() {
        }
        return ParsePurePipeModule;
    }());
    ParsePurePipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ParsePurePipe],
                    exports: [ParsePurePipe]
                },] }
    ];

    var ParseIsoPipe = /** @class */ (function () {
        function ParseIsoPipe() {
        }
        ParseIsoPipe.prototype.transform = function (dateString, options) {
            if (dateString instanceof Date) {
                return dateString;
            }
            return parseISO(dateString, options);
        };
        return ParseIsoPipe;
    }());
    ParseIsoPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'dfnsParseIso' },] }
    ];
    var ParseIsoPipeModule = /** @class */ (function () {
        function ParseIsoPipeModule() {
        }
        return ParseIsoPipeModule;
    }());
    ParseIsoPipeModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ParseIsoPipe],
                    exports: [ParseIsoPipe]
                },] }
    ];

    var PIPES = [
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
    var DateFnsModule = /** @class */ (function () {
        function DateFnsModule() {
        }
        DateFnsModule.forRoot = function () {
            return {
                ngModule: DateFnsModule,
                providers: [DateFnsConfigurationService]
            };
        };
        return DateFnsModule;
    }());
    DateFnsModule.decorators = [
        { type: i0.NgModule, args: [{
                    exports: PIPES
                },] }
    ];

    // TODO: add exports from module imports

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AddBusinessDaysPipe = AddBusinessDaysPipe;
    exports.AddBusinessDaysPipeModule = AddBusinessDaysPipeModule;
    exports.AddDaysPipe = AddDaysPipe;
    exports.AddDaysPipeModule = AddDaysPipeModule;
    exports.AddHoursPipe = AddHoursPipe;
    exports.AddHoursPipeModule = AddHoursPipeModule;
    exports.AddISOWeekYearsPipe = AddISOWeekYearsPipe;
    exports.AddISOWeekYearsPipeModule = AddISOWeekYearsPipeModule;
    exports.AddMillisecondsPipe = AddMillisecondsPipe;
    exports.AddMillisecondsPipeModule = AddMillisecondsPipeModule;
    exports.AddMinutesPipe = AddMinutesPipe;
    exports.AddMinutesPipeModule = AddMinutesPipeModule;
    exports.AddMonthsPipe = AddMonthsPipe;
    exports.AddMonthsPipeModule = AddMonthsPipeModule;
    exports.AddQuartersPipe = AddQuartersPipe;
    exports.AddQuartersPipeModule = AddQuartersPipeModule;
    exports.AddSecondsPipe = AddSecondsPipe;
    exports.AddSecondsPipeModule = AddSecondsPipeModule;
    exports.AddWeeksPipe = AddWeeksPipe;
    exports.AddWeeksPipeModule = AddWeeksPipeModule;
    exports.AddYearsPipe = AddYearsPipe;
    exports.AddYearsPipeModule = AddYearsPipeModule;
    exports.ClosestToPipe = ClosestToPipe;
    exports.ClosestToPipeModule = ClosestToPipeModule;
    exports.DateFnsConfigurationService = DateFnsConfigurationService;
    exports.DateFnsModule = DateFnsModule;
    exports.DifferenceInBusinessDaysPipe = DifferenceInBusinessDaysPipe;
    exports.DifferenceInBusinessDaysPipeModule = DifferenceInBusinessDaysPipeModule;
    exports.DifferenceInCalendarDaysPipe = DifferenceInCalendarDaysPipe;
    exports.DifferenceInCalendarDaysPipeModule = DifferenceInCalendarDaysPipeModule;
    exports.DifferenceInCalendarISOWeekYearsPipe = DifferenceInCalendarISOWeekYearsPipe;
    exports.DifferenceInCalendarISOWeekYearsPipeModule = DifferenceInCalendarISOWeekYearsPipeModule;
    exports.DifferenceInCalendarISOWeeksPipe = DifferenceInCalendarISOWeeksPipe;
    exports.DifferenceInCalendarISOWeeksPipeModule = DifferenceInCalendarISOWeeksPipeModule;
    exports.DifferenceInCalendarMonthsPipe = DifferenceInCalendarMonthsPipe;
    exports.DifferenceInCalendarMonthsPipeModule = DifferenceInCalendarMonthsPipeModule;
    exports.DifferenceInCalendarQuartersPipe = DifferenceInCalendarQuartersPipe;
    exports.DifferenceInCalendarQuartersPipeModule = DifferenceInCalendarQuartersPipeModule;
    exports.DifferenceInCalendarWeeksPipe = DifferenceInCalendarWeeksPipe;
    exports.DifferenceInCalendarWeeksPipeModule = DifferenceInCalendarWeeksPipeModule;
    exports.DifferenceInCalendarYearsPipe = DifferenceInCalendarYearsPipe;
    exports.DifferenceInCalendarYearsPipeModule = DifferenceInCalendarYearsPipeModule;
    exports.DifferenceInDaysPipe = DifferenceInDaysPipe;
    exports.DifferenceInDaysPipeModule = DifferenceInDaysPipeModule;
    exports.DifferenceInHoursPipe = DifferenceInHoursPipe;
    exports.DifferenceInHoursPipeModule = DifferenceInHoursPipeModule;
    exports.DifferenceInISOWeekYearsPipe = DifferenceInISOWeekYearsPipe;
    exports.DifferenceInISOWeekYearsPipeModule = DifferenceInISOWeekYearsPipeModule;
    exports.DifferenceInMillisecondsPipe = DifferenceInMillisecondsPipe;
    exports.DifferenceInMillisecondsPipeModule = DifferenceInMillisecondsPipeModule;
    exports.DifferenceInMinutesPipe = DifferenceInMinutesPipe;
    exports.DifferenceInMinutesPipeModule = DifferenceInMinutesPipeModule;
    exports.DifferenceInMonthsPipe = DifferenceInMonthsPipe;
    exports.DifferenceInMonthsPipeModule = DifferenceInMonthsPipeModule;
    exports.DifferenceInQuartersPipe = DifferenceInQuartersPipe;
    exports.DifferenceInQuartersPipeModule = DifferenceInQuartersPipeModule;
    exports.DifferenceInSecondsPipe = DifferenceInSecondsPipe;
    exports.DifferenceInSecondsPipeModule = DifferenceInSecondsPipeModule;
    exports.DifferenceInWeeksPipe = DifferenceInWeeksPipe;
    exports.DifferenceInWeeksPipeModule = DifferenceInWeeksPipeModule;
    exports.DifferenceInYearsPipe = DifferenceInYearsPipe;
    exports.DifferenceInYearsPipeModule = DifferenceInYearsPipeModule;
    exports.EndOfDayPipe = EndOfDayPipe;
    exports.EndOfDayPipeModule = EndOfDayPipeModule;
    exports.EndOfHourPipe = EndOfHourPipe;
    exports.EndOfHourPipeModule = EndOfHourPipeModule;
    exports.EndOfISOWeekPipe = EndOfISOWeekPipe;
    exports.EndOfISOWeekPipeModule = EndOfISOWeekPipeModule;
    exports.EndOfISOWeekYearPipe = EndOfISOWeekYearPipe;
    exports.EndOfISOWeekYearPipeModule = EndOfISOWeekYearPipeModule;
    exports.EndOfMinutePipe = EndOfMinutePipe;
    exports.EndOfMinutePipeModule = EndOfMinutePipeModule;
    exports.EndOfMonthPipe = EndOfMonthPipe;
    exports.EndOfMonthPipeModule = EndOfMonthPipeModule;
    exports.EndOfQuarterPipe = EndOfQuarterPipe;
    exports.EndOfQuarterPipeModule = EndOfQuarterPipeModule;
    exports.EndOfSecondPipe = EndOfSecondPipe;
    exports.EndOfSecondPipeModule = EndOfSecondPipeModule;
    exports.EndOfTodayPipe = EndOfTodayPipe;
    exports.EndOfTodayPipeModule = EndOfTodayPipeModule;
    exports.EndOfTomorrowPipe = EndOfTomorrowPipe;
    exports.EndOfTomorrowPipeModule = EndOfTomorrowPipeModule;
    exports.EndOfWeekPipe = EndOfWeekPipe;
    exports.EndOfWeekPipeModule = EndOfWeekPipeModule;
    exports.EndOfYearPipe = EndOfYearPipe;
    exports.EndOfYearPipeModule = EndOfYearPipeModule;
    exports.EndOfYesterdayPipe = EndOfYesterdayPipe;
    exports.EndOfYesterdayPipeModule = EndOfYesterdayPipeModule;
    exports.FormatDistancePipe = FormatDistancePipe;
    exports.FormatDistancePipeModule = FormatDistancePipeModule;
    exports.FormatDistancePurePipe = FormatDistancePurePipe;
    exports.FormatDistancePurePipeModule = FormatDistancePurePipeModule;
    exports.FormatDistanceStrictPipe = FormatDistanceStrictPipe;
    exports.FormatDistanceStrictPipeModule = FormatDistanceStrictPipeModule;
    exports.FormatDistanceStrictPurePipe = FormatDistanceStrictPurePipe;
    exports.FormatDistanceStrictPurePipeModule = FormatDistanceStrictPurePipeModule;
    exports.FormatDistanceToNowPipe = FormatDistanceToNowPipe;
    exports.FormatDistanceToNowPipeModule = FormatDistanceToNowPipeModule;
    exports.FormatDistanceToNowPurePipe = FormatDistanceToNowPurePipe;
    exports.FormatDistanceToNowPurePipeModule = FormatDistanceToNowPurePipeModule;
    exports.FormatPipe = FormatPipe;
    exports.FormatPipeModule = FormatPipeModule;
    exports.FormatPurePipe = FormatPurePipe;
    exports.FormatPurePipeModule = FormatPurePipeModule;
    exports.FormatRelativePurePipe = FormatRelativePurePipe;
    exports.FormatRelativePurePipeModule = FormatRelativePurePipeModule;
    exports.GetDatePipe = GetDatePipe;
    exports.GetDatePipeModule = GetDatePipeModule;
    exports.GetDayOfYearPipe = GetDayOfYearPipe;
    exports.GetDayOfYearPipeModule = GetDayOfYearPipeModule;
    exports.GetDayPipe = GetDayPipe;
    exports.GetDayPipeModule = GetDayPipeModule;
    exports.GetDaysInMonthPipe = GetDaysInMonthPipe;
    exports.GetDaysInMonthPipeModule = GetDaysInMonthPipeModule;
    exports.GetDaysInYearPipe = GetDaysInYearPipe;
    exports.GetDaysInYearPipeModule = GetDaysInYearPipeModule;
    exports.GetDecadePipe = GetDecadePipe;
    exports.GetDecadePipeModule = GetDecadePipeModule;
    exports.GetHoursPipe = GetHoursPipe;
    exports.GetHoursPipeModule = GetHoursPipeModule;
    exports.GetISODayPipe = GetISODayPipe;
    exports.GetISODayPipeModule = GetISODayPipeModule;
    exports.GetISOWeekPipe = GetISOWeekPipe;
    exports.GetISOWeekPipeModule = GetISOWeekPipeModule;
    exports.GetISOWeekYearPipe = GetISOWeekYearPipe;
    exports.GetISOWeekYearPipeModule = GetISOWeekYearPipeModule;
    exports.GetISOWeeksInYearPipe = GetISOWeeksInYearPipe;
    exports.GetISOWeeksInYearPipeModule = GetISOWeeksInYearPipeModule;
    exports.GetMillisecondsPipe = GetMillisecondsPipe;
    exports.GetMillisecondsPipeModule = GetMillisecondsPipeModule;
    exports.GetMinutesPipe = GetMinutesPipe;
    exports.GetMinutesPipeModule = GetMinutesPipeModule;
    exports.GetMonthPipe = GetMonthPipe;
    exports.GetMonthPipeModule = GetMonthPipeModule;
    exports.GetOverlappingDaysInIntervalsPipe = GetOverlappingDaysInIntervalsPipe;
    exports.GetOverlappingDaysInIntervalsPipeModule = GetOverlappingDaysInIntervalsPipeModule;
    exports.GetQuarterPipe = GetQuarterPipe;
    exports.GetQuarterPipeModule = GetQuarterPipeModule;
    exports.GetSecondsPipe = GetSecondsPipe;
    exports.GetSecondsPipeModule = GetSecondsPipeModule;
    exports.GetTimePipe = GetTimePipe;
    exports.GetTimePipeModule = GetTimePipeModule;
    exports.GetUnixTimePipe = GetUnixTimePipe;
    exports.GetUnixTimePipeModule = GetUnixTimePipeModule;
    exports.GetWeekOfMonthPipe = GetWeekOfMonthPipe;
    exports.GetWeekOfMonthPipeModule = GetWeekOfMonthPipeModule;
    exports.GetWeekOfMonthPurePipe = GetWeekOfMonthPurePipe;
    exports.GetWeekOfMonthPurePipeModule = GetWeekOfMonthPurePipeModule;
    exports.GetWeekPipe = GetWeekPipe;
    exports.GetWeekPipeModule = GetWeekPipeModule;
    exports.GetWeekPurePipe = GetWeekPurePipe;
    exports.GetWeekPurePipeModule = GetWeekPurePipeModule;
    exports.GetWeekYearPipe = GetWeekYearPipe;
    exports.GetWeekYearPipeModule = GetWeekYearPipeModule;
    exports.GetWeekYearPurePipe = GetWeekYearPurePipe;
    exports.GetWeekYearPurePipeModule = GetWeekYearPurePipeModule;
    exports.GetWeeksInMonthPipe = GetWeeksInMonthPipe;
    exports.GetWeeksInMonthPipeModule = GetWeeksInMonthPipeModule;
    exports.GetWeeksInMonthPurePipe = GetWeeksInMonthPurePipe;
    exports.GetWeeksInMonthPurePipeModule = GetWeeksInMonthPurePipeModule;
    exports.GetYearPipe = GetYearPipe;
    exports.GetYearPipeModule = GetYearPipeModule;
    exports.IsAfterPipe = IsAfterPipe;
    exports.IsAfterPipeModule = IsAfterPipeModule;
    exports.IsBeforePipe = IsBeforePipe;
    exports.IsBeforePipeModule = IsBeforePipeModule;
    exports.IsDatePipe = IsDatePipe;
    exports.IsDatePipeModule = IsDatePipeModule;
    exports.IsEqualPipe = IsEqualPipe;
    exports.IsEqualPipeModule = IsEqualPipeModule;
    exports.IsFuturePipe = IsFuturePipe;
    exports.IsFuturePipeModule = IsFuturePipeModule;
    exports.IsPastPipe = IsPastPipe;
    exports.IsPastPipeModule = IsPastPipeModule;
    exports.IsSameMonthPipe = IsSameMonthPipe;
    exports.IsSameMonthPipeModule = IsSameMonthPipeModule;
    exports.IsSameYearPipe = IsSameYearPipe;
    exports.IsSameYearPipeModule = IsSameYearPipeModule;
    exports.IsTodayPipe = IsTodayPipe;
    exports.IsTodayPipeModule = IsTodayPipeModule;
    exports.IsTomorrowPipe = IsTomorrowPipe;
    exports.IsTomorrowPipeModule = IsTomorrowPipeModule;
    exports.IsValidPipe = IsValidPipe;
    exports.IsValidPipeModule = IsValidPipeModule;
    exports.IsWeekendPipe = IsWeekendPipe;
    exports.IsWeekendPipeModule = IsWeekendPipeModule;
    exports.LastDayOfDecadePipe = LastDayOfDecadePipe;
    exports.LastDayOfDecadePipeModule = LastDayOfDecadePipeModule;
    exports.LastDayOfISOWeekPipe = LastDayOfISOWeekPipe;
    exports.LastDayOfISOWeekPipeModule = LastDayOfISOWeekPipeModule;
    exports.LastDayOfISOWeekYearPipe = LastDayOfISOWeekYearPipe;
    exports.LastDayOfISOWeekYearPipeModule = LastDayOfISOWeekYearPipeModule;
    exports.LastDayOfMonthPipe = LastDayOfMonthPipe;
    exports.LastDayOfMonthPipeModule = LastDayOfMonthPipeModule;
    exports.LastDayOfQuarterPipe = LastDayOfQuarterPipe;
    exports.LastDayOfQuarterPipeModule = LastDayOfQuarterPipeModule;
    exports.LastDayOfWeekPipe = LastDayOfWeekPipe;
    exports.LastDayOfWeekPipeModule = LastDayOfWeekPipeModule;
    exports.LastDayOfWeekPurePipe = LastDayOfWeekPurePipe;
    exports.LastDayOfWeekPurePipeModule = LastDayOfWeekPurePipeModule;
    exports.LastDayOfYearPipe = LastDayOfYearPipe;
    exports.LastDayOfYearPipeModule = LastDayOfYearPipeModule;
    exports.MaxPipe = MaxPipe;
    exports.MaxPipeModule = MaxPipeModule;
    exports.MinPipe = MinPipe;
    exports.MinPipeModule = MinPipeModule;
    exports.ParseIsoPipe = ParseIsoPipe;
    exports.ParseIsoPipeModule = ParseIsoPipeModule;
    exports.ParsePipe = ParsePipe;
    exports.ParsePipeModule = ParsePipeModule;
    exports.ParsePurePipe = ParsePurePipe;
    exports.ParsePurePipeModule = ParsePurePipeModule;
    exports.StartOfDayPipe = StartOfDayPipe;
    exports.StartOfDayPipeModule = StartOfDayPipeModule;
    exports.StartOfDecadePipe = StartOfDecadePipe;
    exports.StartOfDecadePipeModule = StartOfDecadePipeModule;
    exports.StartOfHourPipe = StartOfHourPipe;
    exports.StartOfHourPipeModule = StartOfHourPipeModule;
    exports.StartOfISOWeekPipe = StartOfISOWeekPipe;
    exports.StartOfISOWeekPipeModule = StartOfISOWeekPipeModule;
    exports.StartOfISOWeekYearPipe = StartOfISOWeekYearPipe;
    exports.StartOfISOWeekYearPipeModule = StartOfISOWeekYearPipeModule;
    exports.StartOfMinutePipe = StartOfMinutePipe;
    exports.StartOfMinutePipeModule = StartOfMinutePipeModule;
    exports.StartOfMonthPipe = StartOfMonthPipe;
    exports.StartOfMonthPipeModule = StartOfMonthPipeModule;
    exports.StartOfQuarterPipe = StartOfQuarterPipe;
    exports.StartOfQuarterPipeModule = StartOfQuarterPipeModule;
    exports.StartOfSecondPipe = StartOfSecondPipe;
    exports.StartOfSecondPipeModule = StartOfSecondPipeModule;
    exports.StartOfTodayPipe = StartOfTodayPipe;
    exports.StartOfTodayPipeModule = StartOfTodayPipeModule;
    exports.StartOfTomorrowPipe = StartOfTomorrowPipe;
    exports.StartOfTomorrowPipeModule = StartOfTomorrowPipeModule;
    exports.StartOfWeekPipe = StartOfWeekPipe;
    exports.StartOfWeekPipeModule = StartOfWeekPipeModule;
    exports.StartOfWeekPurePipe = StartOfWeekPurePipe;
    exports.StartOfWeekPurePipeModule = StartOfWeekPurePipeModule;
    exports.StartOfWeekYearPipe = StartOfWeekYearPipe;
    exports.StartOfWeekYearPipeModule = StartOfWeekYearPipeModule;
    exports.StartOfWeekYearPurePipe = StartOfWeekYearPurePipe;
    exports.StartOfWeekYearPurePipeModule = StartOfWeekYearPurePipeModule;
    exports.StartOfYearPipe = StartOfYearPipe;
    exports.StartOfYearPipeModule = StartOfYearPipeModule;
    exports.StartOfYesterdayPipe = StartOfYesterdayPipe;
    exports.StartOfYesterdayPipeModule = StartOfYesterdayPipeModule;
    exports.SubDaysPipe = SubDaysPipe;
    exports.SubDaysPipeModule = SubDaysPipeModule;
    exports.SubHoursPipe = SubHoursPipe;
    exports.SubHoursPipeModule = SubHoursPipeModule;
    exports.SubISOWeekYearsPipe = SubISOWeekYearsPipe;
    exports.SubISOWeekYearsPipeModule = SubISOWeekYearsPipeModule;
    exports.SubMillisecondsPipe = SubMillisecondsPipe;
    exports.SubMillisecondsPipeModule = SubMillisecondsPipeModule;
    exports.SubMinutesPipe = SubMinutesPipe;
    exports.SubMinutesPipeModule = SubMinutesPipeModule;
    exports.SubMonthsPipe = SubMonthsPipe;
    exports.SubMonthsPipeModule = SubMonthsPipeModule;
    exports.SubQuartersPipe = SubQuartersPipe;
    exports.SubQuartersPipeModule = SubQuartersPipeModule;
    exports.SubSecondsPipe = SubSecondsPipe;
    exports.SubSecondsPipeModule = SubSecondsPipeModule;
    exports.SubWeeksPipe = SubWeeksPipe;
    exports.SubWeeksPipeModule = SubWeeksPipeModule;
    exports.SubYearsPipe = SubYearsPipe;
    exports.SubYearsPipeModule = SubYearsPipeModule;
    exports.WeekdayNamePipe = WeekdayNamePipe;
    exports.WeekdayNamePipeModule = WeekdayNamePipeModule;
    exports.calculateLocale = calculateLocale;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-date-fns.umd.js.map
