import { NgModule, Pipe } from '@angular/core';
import max from 'date-fns/max';
export class MaxPipe {
    transform(dates) {
        return max(dates);
    }
}
MaxPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsMax' },] }
];
export class MaxPipeModule {
}
MaxPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MaxPipe],
                exports: [MaxPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9tYXgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBRy9CLE1BQU0sT0FBTyxPQUFPO0lBQ2xCLFNBQVMsQ0FBQyxLQUF5QjtRQUNqQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOztBQVd6QixNQUFNLE9BQU8sYUFBYTs7O1lBSnpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgbWF4IGZyb20gJ2RhdGUtZm5zL21heCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNNYXgnIH0pXG5leHBvcnQgY2xhc3MgTWF4UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZXM6IERhdGVGbnNJbnB1dERhdGVbXSk6IERhdGUge1xuICAgIHJldHVybiBtYXgoZGF0ZXMpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01heFBpcGVdLFxuICBleHBvcnRzOiBbTWF4UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgTWF4UGlwZU1vZHVsZSB7fVxuIl19