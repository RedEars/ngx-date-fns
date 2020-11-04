import { NgModule, Pipe } from '@angular/core';
import isSameYear from 'date-fns/isSameYear';
export class IsSameYearPipe {
    transform(dateLeft, dateRight) {
        return isSameYear(dateLeft, dateRight);
    }
}
IsSameYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsSameYear' },] }
];
export class IsSameYearPipeModule {
}
IsSameYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsSameYearPipe],
                exports: [IsSameYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtc2FtZS15ZWFyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9pcy1zYW1lLXllYXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFHN0MsTUFBTSxPQUFPLGNBQWM7SUFDekIsU0FBUyxDQUFDLFFBQTBCLEVBQUUsU0FBMkI7UUFDL0QsT0FBTyxVQUFVLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNTYW1lWWVhciBmcm9tICdkYXRlLWZucy9pc1NhbWVZZWFyJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0lzU2FtZVllYXInIH0pXG5leHBvcnQgY2xhc3MgSXNTYW1lWWVhclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGVMZWZ0OiBEYXRlRm5zSW5wdXREYXRlLCBkYXRlUmlnaHQ6IERhdGVGbnNJbnB1dERhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNTYW1lWWVhcihkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJc1NhbWVZZWFyUGlwZV0sXG4gIGV4cG9ydHM6IFtJc1NhbWVZZWFyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgSXNTYW1lWWVhclBpcGVNb2R1bGUge31cbiJdfQ==