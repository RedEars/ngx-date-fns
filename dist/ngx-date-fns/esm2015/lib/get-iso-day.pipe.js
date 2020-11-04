import { NgModule, Pipe } from '@angular/core';
import getISODay from 'date-fns/getISODay';
export class GetISODayPipe {
    transform(date) {
        return getISODay(date);
    }
}
GetISODayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetISODay' },] }
];
export class GetISODayPipeModule {
}
GetISODayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetISODayPipe],
                exports: [GetISODayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWlzby1kYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1pc28tZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFOztBQVcvQixNQUFNLE9BQU8sbUJBQW1COzs7WUFKL0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXRJU09EYXkgZnJvbSAnZGF0ZS1mbnMvZ2V0SVNPRGF5JztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldElTT0RheScgfSlcbmV4cG9ydCBjbGFzcyBHZXRJU09EYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0SVNPRGF5KGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dldElTT0RheVBpcGVdLFxuICBleHBvcnRzOiBbR2V0SVNPRGF5UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0SVNPRGF5UGlwZU1vZHVsZSB7fVxuIl19