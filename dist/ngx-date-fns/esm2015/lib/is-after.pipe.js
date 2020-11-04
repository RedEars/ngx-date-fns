import { NgModule, Pipe } from '@angular/core';
import isAfter from 'date-fns/isAfter';
export class IsAfterPipe {
    transform(date, dateToCompare) {
        return isAfter(date, dateToCompare);
    }
}
IsAfterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsAfter' },] }
];
export class IsAfterPipeModule {
}
IsAfterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsAfterPipe],
                exports: [IsAfterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYWZ0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2lzLWFmdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLGFBQStCO1FBQy9ELE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQVc3QixNQUFNLE9BQU8saUJBQWlCOzs7WUFKN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBpc0FmdGVyIGZyb20gJ2RhdGUtZm5zL2lzQWZ0ZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zSXNBZnRlcicgfSlcbmV4cG9ydCBjbGFzcyBJc0FmdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVRvQ29tcGFyZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0FmdGVyKGRhdGUsIGRhdGVUb0NvbXBhcmUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0lzQWZ0ZXJQaXBlXSxcbiAgZXhwb3J0czogW0lzQWZ0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc0FmdGVyUGlwZU1vZHVsZSB7fVxuIl19