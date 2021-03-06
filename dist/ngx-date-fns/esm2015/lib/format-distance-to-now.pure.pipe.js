import { NgModule, Pipe } from '@angular/core';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class FormatDistanceToNowPurePipe {
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
export class FormatDistanceToNowPurePipeModule {
}
FormatDistanceToNowPurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistanceToNowPurePipe],
                exports: [FormatDistanceToNowPurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRpc3RhbmNlLXRvLW5vdy5wdXJlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9mb3JtYXQtZGlzdGFuY2UtdG8tbm93LnB1cmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxtQkFBbUIsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLDJCQUEyQixFQUM1QixNQUFNLGtDQUFrQyxDQUFDO0FBSTFDLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFBbUIsTUFBbUM7UUFBbkMsV0FBTSxHQUFOLE1BQU0sQ0FBNkI7SUFBRyxDQUFDO0lBRTFELFNBQVMsQ0FDUCxJQUFzQixFQUN0QixPQUlDO1FBRUQsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7WUFiRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUU7OztZQUozQywyQkFBMkI7O0FBd0I3QixNQUFNLE9BQU8saUNBQWlDOzs7WUFKN0MsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgZm9ybWF0RGlzdGFuY2VUb05vdyBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZVRvTm93JztcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUxvY2FsZSxcbiAgRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJy4vZGF0ZS1mbnMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0Zvcm1hdERpc3RhbmNlVG9Ob3dQdXJlJyB9KVxuZXhwb3J0IGNsYXNzIEZvcm1hdERpc3RhbmNlVG9Ob3dQdXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGU6IERhdGVGbnNJbnB1dERhdGUsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGluY2x1ZGVTZWNvbmRzPzogYm9vbGVhbjtcbiAgICAgIGFkZFN1ZmZpeD86IGJvb2xlYW47XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgfVxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREaXN0YW5jZVRvTm93KGRhdGUsIGNhbGN1bGF0ZUxvY2FsZShvcHRpb25zLCB0aGlzLmNvbmZpZykpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1hdERpc3RhbmNlVG9Ob3dQdXJlUGlwZV0sXG4gIGV4cG9ydHM6IFtGb3JtYXREaXN0YW5jZVRvTm93UHVyZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdERpc3RhbmNlVG9Ob3dQdXJlUGlwZU1vZHVsZSB7fVxuIl19