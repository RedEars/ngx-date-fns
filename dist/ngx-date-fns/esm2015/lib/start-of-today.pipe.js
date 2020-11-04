import { NgModule, Pipe } from '@angular/core';
import startOfToday from 'date-fns/startOfToday';
export class StartOfTodayPipe {
    transform() {
        return startOfToday();
    }
}
StartOfTodayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfToday' },] }
];
export class StartOfTodayPipeModule {
}
StartOfTodayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfTodayPipe],
                exports: [StartOfTodayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtdG9kYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N0YXJ0LW9mLXRvZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsU0FBUztRQUNQLE9BQU8sWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFOztBQVdsQyxNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgc3RhcnRPZlRvZGF5IGZyb20gJ2RhdGUtZm5zL3N0YXJ0T2ZUb2RheSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mVG9kYXknIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlRvZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oKTogRGF0ZSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZUb2RheSgpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0YXJ0T2ZUb2RheVBpcGVdLFxuICBleHBvcnRzOiBbU3RhcnRPZlRvZGF5UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlRvZGF5UGlwZU1vZHVsZSB7fVxuIl19