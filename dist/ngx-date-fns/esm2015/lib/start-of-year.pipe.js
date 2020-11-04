import { NgModule, Pipe } from '@angular/core';
import startOfYear from 'date-fns/startOfYear';
export class StartOfYearPipe {
    transform(date) {
        return startOfYear(date);
    }
}
StartOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfYear' },] }
];
export class StartOfYearPipeModule {
}
StartOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfYearPipe],
                exports: [StartOfYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YteWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvc3RhcnQtb2YteWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydE9mWWVhcic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mWWVhcicgfSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mWWVhclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZlllYXIoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RhcnRPZlllYXJQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZZZWFyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlllYXJQaXBlTW9kdWxlIHt9XG4iXX0=