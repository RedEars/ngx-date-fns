import { NgModule, Pipe } from '@angular/core';
import startOfMinute from 'date-fns/startOfMinute';
export class StartOfMinutePipe {
    transform(date) {
        return startOfMinute(date);
    }
}
StartOfMinutePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfMinute' },] }
];
export class StartOfMinutePipeModule {
}
StartOfMinutePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfMinutePipe],
                exports: [StartOfMinutePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtbWludXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi1taW51dGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFOztBQVduQyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3RhcnRPZk1pbnV0ZSBmcm9tICdkYXRlLWZucy9zdGFydE9mTWludXRlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZNaW51dGUnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZk1pbnV0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZk1pbnV0ZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdGFydE9mTWludXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtTdGFydE9mTWludXRlUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZk1pbnV0ZVBpcGVNb2R1bGUge31cbiJdfQ==