import { ChangeDetectorRef, NgModule, Pipe } from '@angular/core';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import endOfWeek from 'date-fns/endOfWeek';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import { calculateLocale, DateFnsConfigurationService } from '../date-fns-configuration.service';
const formats = {
    x1: 'eeeee',
    x2: 'eeeeee',
    x3: 'eee',
    full: 'eeee'
};
export class WeekdayNamePipe {
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
export class WeekdayNamePipeModule {
}
WeekdayNamePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WeekdayNamePipe],
                exports: [WeekdayNamePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vla2RheS1uYW1lLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi91dGlscy93ZWVrZGF5LW5hbWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFFUixJQUFJLEVBRUwsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLDJCQUEyQixFQUM1QixNQUFNLG1DQUFtQyxDQUFDO0FBRTNDLE1BQU0sT0FBTyxHQUFHO0lBQ2QsRUFBRSxFQUFFLE9BQU87SUFDWCxFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxLQUFLO0lBQ1QsSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBV0YsTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFDUyxNQUFtQyxFQUNuQyxFQUFxQjtRQURyQixXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUU1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM1RCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxTQUFTLENBQ1AsR0FBVyxFQUNYLE9BQTBCLE1BQU0sRUFDaEMsT0FFQztRQUVELE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsTUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7WUFDN0IsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1lBQy9CLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztTQUM1QixDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQS9CRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7O1lBbEI1QywyQkFBMkI7WUFkM0IsaUJBQWlCOztBQXNFbkIsTUFBTSxPQUFPLHFCQUFxQjs7O1lBSmpDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ01vZHVsZSxcbiAgT25EZXN0cm95LFxuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGVhY2hEYXlPZkludGVydmFsIGZyb20gJ2RhdGUtZm5zL2VhY2hEYXlPZkludGVydmFsJztcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvZW5kT2ZXZWVrJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydE9mV2Vlayc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUxvY2FsZSxcbiAgRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJy4uL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5cbmNvbnN0IGZvcm1hdHMgPSB7XG4gIHgxOiAnZWVlZWUnLFxuICB4MjogJ2VlZWVlZScsXG4gIHgzOiAnZWVlJyxcbiAgZnVsbDogJ2VlZWUnXG59O1xuXG4vKipcbiAqIC0gYHgxYDogT25lIGNoYXIuICdNJyBmb3IgTW9uZGF5LlxuICogLSBgeDJgOiBUd28gY2hhcnMuICdNbycgZm9yIE1vbmRheS5cbiAqIC0gYHgzYDogVGhyZWUgY2hhcnMuICdNb24nIGZvciBNb25kYXkuXG4gKiAtIGBmdWxsYDogRnVsbCB3ZWVrZGF5IG5hbWUuICdNb25kYXknIGZvciBNb25kYXkuXG4gKi9cbmV4cG9ydCB0eXBlIFdlZWtkYXlOYW1lRm9ybWF0ID0ga2V5b2YgdHlwZW9mIGZvcm1hdHM7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNXZWVrZGF5TmFtZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgV2Vla2RheU5hbWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBsb2NhbGVDaGFuZ2VkJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWc6IERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMubG9jYWxlQ2hhbmdlZCQgPSB0aGlzLmNvbmZpZy5sb2NhbGVDaGFuZ2VkLnN1YnNjcmliZShfID0+XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9jYWxlQ2hhbmdlZCQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShcbiAgICBkYXk6IG51bWJlcixcbiAgICB2aWV3OiBXZWVrZGF5TmFtZUZvcm1hdCA9ICdmdWxsJyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgbG9jYWxlPzogTG9jYWxlO1xuICAgIH1cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBsb2NhbGUgPSBjYWxjdWxhdGVMb2NhbGUob3B0aW9ucywgdGhpcy5jb25maWcpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgd2VlayA9IGVhY2hEYXlPZkludGVydmFsKHtcbiAgICAgIHN0YXJ0OiBzdGFydE9mV2Vlayhub3csIGxvY2FsZSksXG4gICAgICBlbmQ6IGVuZE9mV2Vlayhub3csIGxvY2FsZSlcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0KHdlZWtbZGF5XSwgZm9ybWF0c1t2aWV3XSwgbG9jYWxlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtXZWVrZGF5TmFtZVBpcGVdLFxuICBleHBvcnRzOiBbV2Vla2RheU5hbWVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBXZWVrZGF5TmFtZVBpcGVNb2R1bGUge31cbiJdfQ==