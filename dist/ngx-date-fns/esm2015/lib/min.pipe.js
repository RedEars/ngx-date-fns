import { NgModule, Pipe } from '@angular/core';
import min from 'date-fns/min';
export class MinPipe {
    transform(dates) {
        return min(dates);
    }
}
MinPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsMin' },] }
];
export class MinPipeModule {
}
MinPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MinPipe],
                exports: [MinPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9taW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBRy9CLE1BQU0sT0FBTyxPQUFPO0lBQ2xCLFNBQVMsQ0FBQyxLQUF5QjtRQUNqQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOztBQVd6QixNQUFNLE9BQU8sYUFBYTs7O1lBSnpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbWluIGZyb20gJ2RhdGUtZm5zL21pbic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNNaW4nIH0pXG5leHBvcnQgY2xhc3MgTWluUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZXM6IERhdGVGbnNJbnB1dERhdGVbXSk6IERhdGUge1xuICAgIHJldHVybiBtaW4oZGF0ZXMpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01pblBpcGVdLFxuICBleHBvcnRzOiBbTWluUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgTWluUGlwZU1vZHVsZSB7fVxuIl19