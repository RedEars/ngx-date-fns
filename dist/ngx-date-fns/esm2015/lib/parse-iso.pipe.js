import { NgModule, Pipe } from '@angular/core';
import parseISO from 'date-fns/parseISO';
export class ParseIsoPipe {
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
export class ParseIsoPipeModule {
}
ParseIsoPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParseIsoPipe],
                exports: [ParseIsoPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtaXNvLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9wYXJzZS1pc28ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUNQLFVBQWUsRUFDZixPQUVDO1FBRUQsSUFBSSxVQUFVLFlBQVksSUFBSSxFQUFFO1lBQzlCLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQVpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0FBbUI5QixNQUFNLE9BQU8sa0JBQWtCOzs7WUFKOUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNQYXJzZUlzbycgfSlcbmV4cG9ydCBjbGFzcyBQYXJzZUlzb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIGRhdGVTdHJpbmc6IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYWRkaXRpb25hbERpZ2l0cz86IDAgfCAxIHwgMjtcbiAgICB9XG4gICk6IERhdGUge1xuICAgIGlmIChkYXRlU3RyaW5nIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIGRhdGVTdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUlTTyhkYXRlU3RyaW5nLCBvcHRpb25zKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQYXJzZUlzb1BpcGVdLFxuICBleHBvcnRzOiBbUGFyc2VJc29QaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJzZUlzb1BpcGVNb2R1bGUge31cbiJdfQ==