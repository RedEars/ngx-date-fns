import { Pipe, ChangeDetectorRef, NgModule } from '@angular/core';
import { DateFnsConfigurationService, calculateLocale } from './date-fns-configuration.service';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
export class FormatDistanceStrictPipe {
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
export class FormatDistanceStrictPipeModule {
}
FormatDistanceStrictPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FormatDistanceStrictPipe],
                exports: [FormatDistanceStrictPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRpc3RhbmNlLXN0cmljdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZm9ybWF0LWRpc3RhbmNlLXN0cmljdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxJQUFJLEVBR0osaUJBQWlCLEVBQ2pCLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLGVBQWUsRUFDaEIsTUFBTSxrQ0FBa0MsQ0FBQztBQUkxQyxPQUFPLG9CQUFvQixNQUFNLCtCQUErQixDQUFDO0FBR2pFLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFDUyxNQUFtQyxFQUNuQyxFQUFxQjtRQURyQixXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUU1QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUM1RCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxTQUFTLENBQ1AsSUFBc0IsRUFDdEIsYUFBK0IsRUFDL0IsT0FLQztRQUVELE9BQU8sb0JBQW9CLENBQ3pCLElBQUksRUFDSixhQUFhLEVBQ2IsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3RDLENBQUM7SUFDSixDQUFDOzs7WUFoQ0YsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7OztZQVJyRCwyQkFBMkI7WUFKM0IsaUJBQWlCOztBQW1EbkIsTUFBTSxPQUFPLDhCQUE4Qjs7O1lBSjFDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQaXBlLFxuICBQaXBlVHJhbnNmb3JtLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBOZ01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZSxcbiAgY2FsY3VsYXRlTG9jYWxlXG59IGZyb20gJy4vZGF0ZS1mbnMtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSwgRGF0ZUZuc1VuaXQsIERhdGVGbnNSb3VuZGluZ01ldGhvZCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlU3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlU3RyaWN0JztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0Zvcm1hdERpc3RhbmNlU3RyaWN0JywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBGb3JtYXREaXN0YW5jZVN0cmljdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxvY2FsZUNoYW5nZWQkOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZzogRGF0ZUZuc0NvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5sb2NhbGVDaGFuZ2VkJCA9IHRoaXMuY29uZmlnLmxvY2FsZUNoYW5nZWQuc3Vic2NyaWJlKF8gPT5cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5sb2NhbGVDaGFuZ2VkJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGU6IERhdGVGbnNJbnB1dERhdGUsXG4gICAgZGF0ZVRvQ29tcGFyZTogRGF0ZUZuc0lucHV0RGF0ZSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYWRkU3VmZml4PzogYm9vbGVhbjtcbiAgICAgIHVuaXQ/OiBEYXRlRm5zVW5pdDtcbiAgICAgIHJvdW5kaW5nTWV0aG9kPzogRGF0ZUZuc1JvdW5kaW5nTWV0aG9kO1xuICAgICAgbG9jYWxlPzogTG9jYWxlO1xuICAgIH1cbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gICAgICBkYXRlLFxuICAgICAgZGF0ZVRvQ29tcGFyZSxcbiAgICAgIGNhbGN1bGF0ZUxvY2FsZShvcHRpb25zLCB0aGlzLmNvbmZpZylcbiAgICApO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1hdERpc3RhbmNlU3RyaWN0UGlwZV0sXG4gIGV4cG9ydHM6IFtGb3JtYXREaXN0YW5jZVN0cmljdFBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdERpc3RhbmNlU3RyaWN0UGlwZU1vZHVsZSB7fVxuIl19