import { NgModule, Pipe } from '@angular/core';
import endOfMinute from 'date-fns/endOfMinute';
export class EndOfMinutePipe {
    transform(date) {
        return endOfMinute(date);
    }
}
EndOfMinutePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfMinute' },] }
];
export class EndOfMinutePipeModule {
}
EndOfMinutePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfMinutePipe],
                exports: [EndOfMinutePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLW1pbnV0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZW5kLW9mLW1pbnV0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBlbmRPZk1pbnV0ZSBmcm9tICdkYXRlLWZucy9lbmRPZk1pbnV0ZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNFbmRPZk1pbnV0ZScgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZk1pbnV0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gZW5kT2ZNaW51dGUoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRW5kT2ZNaW51dGVQaXBlXSxcbiAgZXhwb3J0czogW0VuZE9mTWludXRlUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZNaW51dGVQaXBlTW9kdWxlIHt9XG4iXX0=