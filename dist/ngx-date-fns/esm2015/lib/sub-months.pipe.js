import { NgModule, Pipe } from '@angular/core';
import subMonths from 'date-fns/subMonths';
export class SubMonthsPipe {
    transform(date, amount) {
        return subMonths(date, amount);
    }
}
SubMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubMonths' },] }
];
export class SubMonthsPipeModule {
}
SubMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubMonthsPipe],
                exports: [SubMonthsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1vbnRocy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvc3ViLW1vbnRocy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsSUFBc0IsRUFBRSxNQUFjO1FBQzlDLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztBQVcvQixNQUFNLE9BQU8sbUJBQW1COzs7WUFKL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdWJNb250aHMgZnJvbSAnZGF0ZS1mbnMvc3ViTW9udGhzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N1Yk1vbnRocycgfSlcbmV4cG9ydCBjbGFzcyBTdWJNb250aHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiBzdWJNb250aHMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdWJNb250aHNQaXBlXSxcbiAgZXhwb3J0czogW1N1Yk1vbnRoc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk1vbnRoc1BpcGVNb2R1bGUge31cbiJdfQ==