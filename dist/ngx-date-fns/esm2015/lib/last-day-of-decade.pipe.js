import { NgModule, Pipe } from '@angular/core';
import lastDayOfDecade from 'date-fns/lastDayOfDecade';
export class LastDayOfDecadePipe {
    transform(date) {
        return lastDayOfDecade(date);
    }
}
LastDayOfDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfDecade' },] }
];
export class LastDayOfDecadePipeModule {
}
LastDayOfDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfDecadePipe],
                exports: [LastDayOfDecadePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YtZGVjYWRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9sYXN0LWRheS1vZi1kZWNhZGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxlQUFlLE1BQU0sMEJBQTBCLENBQUM7QUFHdkQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFOztBQVdyQyxNQUFNLE9BQU8seUJBQXlCOzs7WUFKckMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbGFzdERheU9mRGVjYWRlIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZkRlY2FkZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNMYXN0RGF5T2ZEZWNhZGUnIH0pXG5leHBvcnQgY2xhc3MgTGFzdERheU9mRGVjYWRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IERhdGUge1xuICAgIHJldHVybiBsYXN0RGF5T2ZEZWNhZGUoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTGFzdERheU9mRGVjYWRlUGlwZV0sXG4gIGV4cG9ydHM6IFtMYXN0RGF5T2ZEZWNhZGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZEZWNhZGVQaXBlTW9kdWxlIHt9XG4iXX0=