import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Locale } from 'date-fns';
import formatRelative from 'date-fns/formatRelative';
import {
  calculateLocale,
  DateFnsConfigurationService
} from './date-fns-configuration.service';
import { DateFnsInputDate } from './types';
import de from 'date-fns/locale/de';

@Pipe({ name: 'dfnsFormatRelativePure' })
export class FormatRelativePurePipe implements PipeTransform {
  constructor(public config: DateFnsConfigurationService) {}

  transform(
    date: DateFnsInputDate,
    baseDate: DateFnsInputDate = new Date(),
    options?: {
      weekStartsOn?: number;
      locale?: Locale;
    }
  ): string {
    const formatRelativeLocale: any = {
      lastWeek: 'eeee',
      yesterday: '\'Gestern\'',
      today: '\'Heute\'',
      tomorrow: '\'Morgen\'',
      nextWeek: 'eeee',
      other: 'eeee'
    };
    const locale = {
      ...de,
      formatRelative: (token: any) => formatRelativeLocale[token]
    };
    return formatRelative(date, baseDate, { locale });
  }
}

@NgModule({
  declarations: [FormatRelativePurePipe],
  exports: [FormatRelativePurePipe]
})
export class FormatRelativePurePipeModule {}
