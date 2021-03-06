import { NgModule, Pipe } from '@angular/core';
import differenceInDays from 'date-fns/differenceInDays';
export class DifferenceInDaysPipe {
    transform(dateLeft, dateRight) {
        return differenceInDays(dateLeft, dateRight);
    }
}
DifferenceInDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInDays' },] }
];
export class DifferenceInDaysPipeModule {
}
DifferenceInDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInDaysPipe],
                exports: [DifferenceInDaysPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1kYXlzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9kaWZmZXJlbmNlLWluLWRheXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxnQkFBZ0IsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFNBQVMsQ0FBQyxRQUEwQixFQUFFLFNBQTJCO1FBQy9ELE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRTs7QUFXdEMsTUFBTSxPQUFPLDBCQUEwQjs7O1lBSnRDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluRGF5cyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNEaWZmZXJlbmNlSW5EYXlzJyB9KVxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VJbkRheXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGlmZmVyZW5jZUluRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEaWZmZXJlbmNlSW5EYXlzUGlwZV0sXG4gIGV4cG9ydHM6IFtEaWZmZXJlbmNlSW5EYXlzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluRGF5c1BpcGVNb2R1bGUge31cbiJdfQ==