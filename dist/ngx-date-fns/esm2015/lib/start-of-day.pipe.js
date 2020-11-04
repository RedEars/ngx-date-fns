import { NgModule, Pipe } from '@angular/core';
import startOfDay from 'date-fns/startOfDay';
export class StartOfDayPipe {
    transform(date) {
        return startOfDay(date);
    }
}
StartOfDayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfDay' },] }
];
export class StartOfDayPipeModule {
}
StartOfDayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfDayPipe],
                exports: [StartOfDayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtZGF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdGFydC1vZi1kYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFHN0MsTUFBTSxPQUFPLGNBQWM7SUFDekIsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydE9mRGF5JztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N0YXJ0T2ZEYXknIH0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZkRheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZkRheShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdGFydE9mRGF5UGlwZV0sXG4gIGV4cG9ydHM6IFtTdGFydE9mRGF5UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZkRheVBpcGVNb2R1bGUge31cbiJdfQ==