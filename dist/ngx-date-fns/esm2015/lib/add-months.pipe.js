import { NgModule, Pipe } from '@angular/core';
import addMonths from 'date-fns/addMonths';
export class AddMonthsPipe {
    transform(date, amount) {
        return addMonths(date, amount);
    }
}
AddMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddMonths' },] }
];
export class AddMonthsPipeModule {
}
AddMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddMonthsPipe],
                exports: [AddMonthsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1vbnRocy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvYWRkLW1vbnRocy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsSUFBc0IsRUFBRSxNQUFjO1FBQzlDLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztBQVcvQixNQUFNLE9BQU8sbUJBQW1COzs7WUFKL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkTW9udGhzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0FkZE1vbnRocycgfSlcbmV4cG9ydCBjbGFzcyBBZGRNb250aHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiBhZGRNb250aHMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBZGRNb250aHNQaXBlXSxcbiAgZXhwb3J0czogW0FkZE1vbnRoc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEFkZE1vbnRoc1BpcGVNb2R1bGUge31cbiJdfQ==