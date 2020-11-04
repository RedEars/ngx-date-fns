import { NgModule, Pipe } from '@angular/core';
import lastDayOfISOWeekYear from 'date-fns/lastDayOfISOWeekYear';
export class LastDayOfISOWeekYearPipe {
    transform(date) {
        return lastDayOfISOWeekYear(date);
    }
}
LastDayOfISOWeekYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfISOWeekYear' },] }
];
export class LastDayOfISOWeekYearPipeModule {
}
LastDayOfISOWeekYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfISOWeekYearPipe],
                exports: [LastDayOfISOWeekYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YtaXNvLXdlZWsteWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvbGFzdC1kYXktb2YtaXNvLXdlZWsteWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLG9CQUFvQixNQUFNLCtCQUErQixDQUFDO0FBR2pFLE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFOztBQVcxQyxNQUFNLE9BQU8sOEJBQThCOzs7WUFKMUMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbGFzdERheU9mSVNPV2Vla1llYXIgZnJvbSAnZGF0ZS1mbnMvbGFzdERheU9mSVNPV2Vla1llYXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zTGFzdERheU9mSVNPV2Vla1llYXInIH0pXG5leHBvcnQgY2xhc3MgTGFzdERheU9mSVNPV2Vla1llYXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIGxhc3REYXlPZklTT1dlZWtZZWFyKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xhc3REYXlPZklTT1dlZWtZZWFyUGlwZV0sXG4gIGV4cG9ydHM6IFtMYXN0RGF5T2ZJU09XZWVrWWVhclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIExhc3REYXlPZklTT1dlZWtZZWFyUGlwZU1vZHVsZSB7fVxuIl19