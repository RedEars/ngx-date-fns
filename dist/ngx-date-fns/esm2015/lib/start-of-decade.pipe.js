import { NgModule, Pipe } from '@angular/core';
import startOfDecade from 'date-fns/startOfDecade';
export class StartOfDecadePipe {
    transform(date) {
        return startOfDecade(date);
    }
}
StartOfDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfDecade' },] }
];
export class StartOfDecadePipeModule {
}
StartOfDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfDecadePipe],
                exports: [StartOfDecadePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtZGVjYWRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi1kZWNhZGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFOztBQVduQyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3RhcnRPZkRlY2FkZSBmcm9tICdkYXRlLWZucy9zdGFydE9mRGVjYWRlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZEZWNhZGUnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZkRlY2FkZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZkRlY2FkZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdGFydE9mRGVjYWRlUGlwZV0sXG4gIGV4cG9ydHM6IFtTdGFydE9mRGVjYWRlUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZkRlY2FkZVBpcGVNb2R1bGUge31cbiJdfQ==