import { NgModule, Pipe } from '@angular/core';
import getHours from 'date-fns/getHours';
export class GetHoursPipe {
    transform(date) {
        return getHours(date);
    }
}
GetHoursPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetHours' },] }
];
export class GetHoursPipeModule {
}
GetHoursPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetHoursPipe],
                exports: [GetHoursPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWhvdXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9nZXQtaG91cnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0FBVzlCLE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldEhvdXJzIGZyb20gJ2RhdGUtZm5zL2dldEhvdXJzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldEhvdXJzJyB9KVxuZXhwb3J0IGNsYXNzIEdldEhvdXJzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dldEhvdXJzUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXRIb3Vyc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldEhvdXJzUGlwZU1vZHVsZSB7fVxuIl19