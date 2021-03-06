import { NgModule, Pipe } from '@angular/core';
import parse from 'date-fns/parse';
import { calculateLocale, DateFnsConfigurationService } from './date-fns-configuration.service';
export class ParsePurePipe {
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
export class ParsePurePipeModule {
}
ParsePurePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParsePurePipe],
                exports: [ParsePurePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UucHVyZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvcGFyc2UucHVyZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLDJCQUEyQixFQUM1QixNQUFNLGtDQUFrQyxDQUFDO0FBSTFDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW1CLE1BQW1DO1FBQW5DLFdBQU0sR0FBTixNQUFNLENBQTZCO0lBQUcsQ0FBQztJQUUxRCxTQUFTLENBQ1AsVUFBa0IsRUFDbEIsWUFBb0IsRUFDcEIsVUFBNEIsRUFDNUIsT0FNQztRQUVELE9BQU8sS0FBSyxDQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUN0QyxDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7OztZQUo3QiwyQkFBMkI7O0FBaUM3QixNQUFNLE9BQU8sbUJBQW1COzs7WUFKL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5pbXBvcnQge1xuICBjYWxjdWxhdGVMb2NhbGUsXG4gIERhdGVGbnNDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICcuL2RhdGUtZm5zLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNQYXJzZVB1cmUnIH0pXG5leHBvcnQgY2xhc3MgUGFyc2VQdXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEYXRlRm5zQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICBmb3JtYXRTdHJpbmc6IHN0cmluZyxcbiAgICBiYWNrdXBEYXRlOiBEYXRlRm5zSW5wdXREYXRlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBsb2NhbGU/OiBMb2NhbGU7XG4gICAgICB3ZWVrU3RhcnRzT24/OiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xuICAgICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlPzogbnVtYmVyO1xuICAgICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPzogYm9vbGVhbjtcbiAgICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM/OiBib29sZWFuO1xuICAgIH1cbiAgKTogRGF0ZSB7XG4gICAgcmV0dXJuIHBhcnNlKFxuICAgICAgZGF0ZVN0cmluZyxcbiAgICAgIGZvcm1hdFN0cmluZyxcbiAgICAgIGJhY2t1cERhdGUsXG4gICAgICBjYWxjdWxhdGVMb2NhbGUob3B0aW9ucywgdGhpcy5jb25maWcpXG4gICAgKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQYXJzZVB1cmVQaXBlXSxcbiAgZXhwb3J0czogW1BhcnNlUHVyZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFBhcnNlUHVyZVBpcGVNb2R1bGUge31cbiJdfQ==