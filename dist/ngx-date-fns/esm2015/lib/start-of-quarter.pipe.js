import { NgModule, Pipe } from '@angular/core';
import startOfQuarter from 'date-fns/startOfQuarter';
export class StartOfQuarterPipe {
    transform(date) {
        return startOfQuarter(date);
    }
}
StartOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfQuarter' },] }
];
export class StartOfQuarterPipeModule {
}
StartOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfQuarterPipe],
                exports: [StartOfQuarterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtcXVhcnRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvc3RhcnQtb2YtcXVhcnRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGNBQWMsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0FBV3BDLE1BQU0sT0FBTyx3QkFBd0I7OztZQUpwQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdGFydE9mUXVhcnRlciBmcm9tICdkYXRlLWZucy9zdGFydE9mUXVhcnRlcic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mUXVhcnRlcicgfSlcbmV4cG9ydCBjbGFzcyBTdGFydE9mUXVhcnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZlF1YXJ0ZXIoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RhcnRPZlF1YXJ0ZXJQaXBlXSxcbiAgZXhwb3J0czogW1N0YXJ0T2ZRdWFydGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlF1YXJ0ZXJQaXBlTW9kdWxlIHt9XG4iXX0=