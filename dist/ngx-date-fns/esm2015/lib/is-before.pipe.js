import { NgModule, Pipe } from '@angular/core';
import isBefore from 'date-fns/isBefore';
export class IsBeforePipe {
    transform(date, dateToCompare) {
        return isBefore(date, dateToCompare);
    }
}
IsBeforePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsBefore' },] }
];
export class IsBeforePipeModule {
}
IsBeforePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsBeforePipe],
                exports: [IsBeforePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYmVmb3JlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9pcy1iZWZvcmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLElBQXNCLEVBQUUsYUFBK0I7UUFDL0QsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0FBVzlCLE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGlzQmVmb3JlIGZyb20gJ2RhdGUtZm5zL2lzQmVmb3JlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0lzQmVmb3JlJyB9KVxuZXhwb3J0IGNsYXNzIElzQmVmb3JlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVRvQ29tcGFyZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JlZm9yZShkYXRlLCBkYXRlVG9Db21wYXJlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJc0JlZm9yZVBpcGVdLFxuICBleHBvcnRzOiBbSXNCZWZvcmVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc0JlZm9yZVBpcGVNb2R1bGUge31cbiJdfQ==