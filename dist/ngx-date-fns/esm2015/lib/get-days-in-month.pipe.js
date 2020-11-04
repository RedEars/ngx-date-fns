import { NgModule, Pipe } from '@angular/core';
import getDaysInMonth from 'date-fns/getDaysInMonth';
export class GetDaysInMonthPipe {
    transform(date) {
        return getDaysInMonth(date);
    }
}
GetDaysInMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDaysInMonth' },] }
];
export class GetDaysInMonthPipeModule {
}
GetDaysInMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDaysInMonthPipe],
                exports: [GetDaysInMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheXMtaW4tbW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1kYXlzLWluLW1vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sY0FBYyxNQUFNLHlCQUF5QixDQUFDO0FBR3JELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFXcEMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBSnBDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldERheXNJbk1vbnRoIGZyb20gJ2RhdGUtZm5zL2dldERheXNJbk1vbnRoJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0dldERheXNJbk1vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIEdldERheXNJbk1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldERheXNJbk1vbnRoKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dldERheXNJbk1vbnRoUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXREYXlzSW5Nb250aFBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERheXNJbk1vbnRoUGlwZU1vZHVsZSB7fVxuIl19