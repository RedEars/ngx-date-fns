import { NgModule, Pipe } from '@angular/core';
import startOfHour from 'date-fns/startOfHour';
export class StartOfHourPipe {
    transform(date) {
        return startOfHour(date);
    }
}
StartOfHourPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfHour' },] }
];
export class StartOfHourPipeModule {
}
StartOfHourPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfHourPipe],
                exports: [StartOfHourPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtaG91ci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvc3RhcnQtb2YtaG91ci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdGFydE9mSG91ciBmcm9tICdkYXRlLWZucy9zdGFydE9mSG91cic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mSG91cicgfSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mSG91clBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZkhvdXIoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RhcnRPZkhvdXJQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZIb3VyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZkhvdXJQaXBlTW9kdWxlIHt9XG4iXX0=