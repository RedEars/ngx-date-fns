import { NgModule, Pipe } from '@angular/core';
import startOfSecond from 'date-fns/startOfSecond';
export class StartOfSecondPipe {
    transform(date) {
        return startOfSecond(date);
    }
}
StartOfSecondPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfSecond' },] }
];
export class StartOfSecondPipeModule {
}
StartOfSecondPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfSecondPipe],
                exports: [StartOfSecondPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2Ytc2Vjb25kLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi1zZWNvbmQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFOztBQVduQyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFKbkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3RhcnRPZlNlY29uZCBmcm9tICdkYXRlLWZucy9zdGFydE9mU2Vjb25kJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZTZWNvbmQnIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlNlY29uZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZlNlY29uZChkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdGFydE9mU2Vjb25kUGlwZV0sXG4gIGV4cG9ydHM6IFtTdGFydE9mU2Vjb25kUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlNlY29uZFBpcGVNb2R1bGUge31cbiJdfQ==