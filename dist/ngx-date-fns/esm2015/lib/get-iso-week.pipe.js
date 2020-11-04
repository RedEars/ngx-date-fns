import { NgModule, Pipe } from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
export class GetISOWeekPipe {
    transform(date) {
        return getISOWeek(date);
    }
}
GetISOWeekPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetISOWeek' },] }
];
export class GetISOWeekPipeModule {
}
GetISOWeekPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetISOWeekPipe],
                exports: [GetISOWeekPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWlzby13ZWVrLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9nZXQtaXNvLXdlZWsucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFHN0MsTUFBTSxPQUFPLGNBQWM7SUFDekIsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZ2V0SVNPV2VlayBmcm9tICdkYXRlLWZucy9nZXRJU09XZWVrJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldElTT1dlZWsnIH0pXG5leHBvcnQgY2xhc3MgR2V0SVNPV2Vla1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRJU09XZWVrKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dldElTT1dlZWtQaXBlXSxcbiAgZXhwb3J0czogW0dldElTT1dlZWtQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXRJU09XZWVrUGlwZU1vZHVsZSB7fVxuIl19