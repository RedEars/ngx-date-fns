import { NgModule, Pipe } from '@angular/core';
import closestTo from 'date-fns/closestTo';
export class ClosestToPipe {
    transform(dateToCompare, datesArray) {
        return closestTo(dateToCompare, datesArray);
    }
}
ClosestToPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsClosestTo' },] }
];
export class ClosestToPipeModule {
}
ClosestToPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ClosestToPipe],
                exports: [ClosestToPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2VzdC10by5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvY2xvc2VzdC10by5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQ1AsYUFBK0IsRUFDL0IsVUFBOEI7UUFFOUIsT0FBTyxTQUFTLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7O0FBYy9CLE1BQU0sT0FBTyxtQkFBbUI7OztZQUovQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNsb3Nlc3RUbyBmcm9tICdkYXRlLWZucy9jbG9zZXN0VG8nO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zQ2xvc2VzdFRvJyB9KVxuZXhwb3J0IGNsYXNzIENsb3Nlc3RUb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIGRhdGVUb0NvbXBhcmU6IERhdGVGbnNJbnB1dERhdGUsXG4gICAgZGF0ZXNBcnJheTogRGF0ZUZuc0lucHV0RGF0ZVtdXG4gICk6IERhdGUge1xuICAgIHJldHVybiBjbG9zZXN0VG8oZGF0ZVRvQ29tcGFyZSwgZGF0ZXNBcnJheSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2xvc2VzdFRvUGlwZV0sXG4gIGV4cG9ydHM6IFtDbG9zZXN0VG9QaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZXN0VG9QaXBlTW9kdWxlIHt9XG4iXX0=