import { NgModule, Pipe } from '@angular/core';
import parseISO from 'date-fns/parseISO';
export class ParseIsoPipe {
    transform(dateString, options) {
        return parseISO(dateString, options);
    }
}
ParseIsoPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsParseIso' },] }
];
export class ParseIsoPipeModule {
}
ParseIsoPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ParseIsoPipe],
                exports: [ParseIsoPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtaXNvLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9wYXJzZS1pc28ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUNQLFVBQWtCLEVBQ2xCLE9BRUM7UUFFRCxPQUFPLFFBQVEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBVEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7QUFnQjlCLE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHBhcnNlSVNPIGZyb20gJ2RhdGUtZm5zL3BhcnNlSVNPJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1BhcnNlSXNvJyB9KVxuZXhwb3J0IGNsYXNzIFBhcnNlSXNvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgZGF0ZVN0cmluZzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBhZGRpdGlvbmFsRGlnaXRzPzogMCB8IDEgfCAyO1xuICAgIH1cbiAgKTogRGF0ZSB7XG4gICAgcmV0dXJuIHBhcnNlSVNPKGRhdGVTdHJpbmcsIG9wdGlvbnMpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BhcnNlSXNvUGlwZV0sXG4gIGV4cG9ydHM6IFtQYXJzZUlzb1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFBhcnNlSXNvUGlwZU1vZHVsZSB7fVxuIl19