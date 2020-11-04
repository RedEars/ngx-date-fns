import { NgModule, Pipe } from '@angular/core';
import isFuture from 'date-fns/isFuture';
export class IsFuturePipe {
    transform(date) {
        return isFuture(date);
    }
}
IsFuturePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsFuture' },] }
];
export class IsFuturePipeModule {
}
IsFuturePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsFuturePipe],
                exports: [IsFuturePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZnV0dXJlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9pcy1mdXR1cmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7O0FBVzlCLE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGlzRnV0dXJlIGZyb20gJ2RhdGUtZm5zL2lzRnV0dXJlJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0lzRnV0dXJlJyB9KVxuZXhwb3J0IGNsYXNzIElzRnV0dXJlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0Z1dHVyZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJc0Z1dHVyZVBpcGVdLFxuICBleHBvcnRzOiBbSXNGdXR1cmVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc0Z1dHVyZVBpcGVNb2R1bGUge31cbiJdfQ==