import { NgModule, Pipe } from '@angular/core';
import getUnixTime from 'date-fns/getUnixTime';
export class GetUnixTimePipe {
    transform(date) {
        return getUnixTime(date);
    }
}
GetUnixTimePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetUnixTime' },] }
];
export class GetUnixTimePipeModule {
}
GetUnixTimePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetUnixTimePipe],
                exports: [GetUnixTimePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXVuaXgtdGltZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LXVuaXgtdGltZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXRVbml4VGltZSBmcm9tICdkYXRlLWZucy9nZXRVbml4VGltZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXRVbml4VGltZScgfSlcbmV4cG9ydCBjbGFzcyBHZXRVbml4VGltZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRVbml4VGltZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXRVbml4VGltZVBpcGVdLFxuICBleHBvcnRzOiBbR2V0VW5peFRpbWVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXRVbml4VGltZVBpcGVNb2R1bGUge31cbiJdfQ==