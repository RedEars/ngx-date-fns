import { NgModule, Pipe } from '@angular/core';
import endOfWeek from 'date-fns/endOfWeek';
export class EndOfWeekPipe {
    transform(date, options) {
        return endOfWeek(date, options);
    }
}
EndOfWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfWeek' },] }
];
export class EndOfWeekPipeModule {
}
EndOfWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfWeekPipe],
                exports: [EndOfWeekPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXdlZWsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2VuZC1vZi13ZWVrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFNBQVMsQ0FDUCxJQUFzQixFQUN0QixPQUVDO1FBRUQsT0FBTyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7O0FBZ0IvQixNQUFNLE9BQU8sbUJBQW1COzs7WUFKL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUsIERhdGVGbnNXZWVrSW5kZXggfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvZW5kT2ZXZWVrJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0VuZE9mV2VlaycgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZldlZWtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICBkYXRlOiBEYXRlRm5zSW5wdXREYXRlLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB3ZWVrU3RhcnRzT24/OiBEYXRlRm5zV2Vla0luZGV4O1xuICAgIH1cbiAgKTogRGF0ZSB7XG4gICAgcmV0dXJuIGVuZE9mV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbmRPZldlZWtQaXBlXSxcbiAgZXhwb3J0czogW0VuZE9mV2Vla1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEVuZE9mV2Vla1BpcGVNb2R1bGUge31cbiJdfQ==