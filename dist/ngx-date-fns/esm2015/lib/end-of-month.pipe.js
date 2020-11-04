import { NgModule, Pipe } from '@angular/core';
import endOfMonth from 'date-fns/endOfMonth';
export class EndOfMonthPipe {
    transform(date) {
        return endOfMonth(date);
    }
}
EndOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfMonth' },] }
];
export class EndOfMonthPipeModule {
}
EndOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfMonthPipe],
                exports: [EndOfMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLW1vbnRoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9lbmQtb2YtbW9udGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFHN0MsTUFBTSxPQUFPLGNBQWM7SUFDekIsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRPZk1vbnRoJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0VuZE9mTW9udGgnIH0pXG5leHBvcnQgY2xhc3MgRW5kT2ZNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gZW5kT2ZNb250aChkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbmRPZk1vbnRoUGlwZV0sXG4gIGV4cG9ydHM6IFtFbmRPZk1vbnRoUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZNb250aFBpcGVNb2R1bGUge31cbiJdfQ==