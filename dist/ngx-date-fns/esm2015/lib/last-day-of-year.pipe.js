import { NgModule, Pipe } from '@angular/core';
import lastDayOfYear from 'date-fns/lastDayOfYear';
export class LastDayOfYearPipe {
    transform(date) {
        return lastDayOfYear(date);
    }
}
LastDayOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsLastDayOfYear' },] }
];
export class LastDayOfYearPipeModule {
}
LastDayOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LastDayOfYearPipe],
                exports: [LastDayOfYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1kYXktb2YteWVhci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvbGFzdC1kYXktb2YteWVhci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUduRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7O0FBV25DLE1BQU0sT0FBTyx1QkFBdUI7OztZQUpuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBsYXN0RGF5T2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2xhc3REYXlPZlllYXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zTGFzdERheU9mWWVhcicgfSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IERhdGUge1xuICAgIHJldHVybiBsYXN0RGF5T2ZZZWFyKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xhc3REYXlPZlllYXJQaXBlXSxcbiAgZXhwb3J0czogW0xhc3REYXlPZlllYXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBMYXN0RGF5T2ZZZWFyUGlwZU1vZHVsZSB7fVxuIl19