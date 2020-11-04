import { NgModule, Pipe } from '@angular/core';
import endOfSecond from 'date-fns/endOfSecond';
export class EndOfSecondPipe {
    transform(date) {
        return endOfSecond(date);
    }
}
EndOfSecondPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfSecond' },] }
];
export class EndOfSecondPipeModule {
}
EndOfSecondPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfSecondPipe],
                exports: [EndOfSecondPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXNlY29uZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZW5kLW9mLXNlY29uZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBlbmRPZlNlY29uZCBmcm9tICdkYXRlLWZucy9lbmRPZlNlY29uZCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNFbmRPZlNlY29uZCcgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZlNlY29uZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gZW5kT2ZTZWNvbmQoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRW5kT2ZTZWNvbmRQaXBlXSxcbiAgZXhwb3J0czogW0VuZE9mU2Vjb25kUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZTZWNvbmRQaXBlTW9kdWxlIHt9XG4iXX0=