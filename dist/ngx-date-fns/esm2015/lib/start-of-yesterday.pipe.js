import { NgModule, Pipe } from '@angular/core';
import startOfYesterday from 'date-fns/startOfYesterday';
export class StartOfYesterdayPipe {
    transform() {
        return startOfYesterday();
    }
}
StartOfYesterdayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfYesterday' },] }
];
export class StartOfYesterdayPipeModule {
}
StartOfYesterdayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfYesterdayPipe],
                exports: [StartOfYesterdayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YteWVzdGVyZGF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi15ZXN0ZXJkYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxnQkFBZ0IsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFNBQVM7UUFDUCxPQUFPLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFOztBQVd0QyxNQUFNLE9BQU8sMEJBQTBCOzs7WUFKdEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgc3RhcnRPZlllc3RlcmRheSBmcm9tICdkYXRlLWZucy9zdGFydE9mWWVzdGVyZGF5JztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZZZXN0ZXJkYXknIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZlllc3RlcmRheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKCk6IERhdGUge1xuICAgIHJldHVybiBzdGFydE9mWWVzdGVyZGF5KCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3RhcnRPZlllc3RlcmRheVBpcGVdLFxuICBleHBvcnRzOiBbU3RhcnRPZlllc3RlcmRheVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJ0T2ZZZXN0ZXJkYXlQaXBlTW9kdWxlIHt9XG4iXX0=