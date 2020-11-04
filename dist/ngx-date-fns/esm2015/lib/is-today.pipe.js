import { NgModule, Pipe } from '@angular/core';
import isToday from 'date-fns/isToday';
export class IsTodayPipe {
    transform(date) {
        return isToday(date);
    }
}
IsTodayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsToday' },] }
];
export class IsTodayPipeModule {
}
IsTodayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsTodayPipe],
                exports: [IsTodayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdG9kYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2lzLXRvZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQVc3QixNQUFNLE9BQU8saUJBQWlCOzs7WUFKN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zSXNUb2RheScgfSlcbmV4cG9ydCBjbGFzcyBJc1RvZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1RvZGF5KGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0lzVG9kYXlQaXBlXSxcbiAgZXhwb3J0czogW0lzVG9kYXlQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc1RvZGF5UGlwZU1vZHVsZSB7fVxuIl19