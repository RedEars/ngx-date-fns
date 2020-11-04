import { NgModule, Pipe } from '@angular/core';
import startOfTomorrow from 'date-fns/startOfTomorrow';
export class StartOfTomorrowPipe {
    transform() {
        return startOfTomorrow();
    }
}
StartOfTomorrowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfTomorrow' },] }
];
export class StartOfTomorrowPipeModule {
}
StartOfTomorrowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfTomorrowPipe],
                exports: [StartOfTomorrowPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtdG9tb3Jyb3cucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N0YXJ0LW9mLXRvbW9ycm93LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sZUFBZSxNQUFNLDBCQUEwQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsU0FBUztRQUNQLE9BQU8sZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFOztBQVdyQyxNQUFNLE9BQU8seUJBQXlCOzs7WUFKckMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgc3RhcnRPZlRvbW9ycm93IGZyb20gJ2RhdGUtZm5zL3N0YXJ0T2ZUb21vcnJvdyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdGFydE9mVG9tb3Jyb3cnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlRvbW9ycm93UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oKTogRGF0ZSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZUb21vcnJvdygpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0YXJ0T2ZUb21vcnJvd1BpcGVdLFxuICBleHBvcnRzOiBbU3RhcnRPZlRvbW9ycm93UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlRvbW9ycm93UGlwZU1vZHVsZSB7fVxuIl19