import { NgModule, Pipe } from '@angular/core';
import isValid from 'date-fns/isValid';
export class IsValidPipe {
    transform(date) {
        return isValid(date);
    }
}
IsValidPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsValid' },] }
];
export class IsValidPipeModule {
}
IsValidPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsValidPipe],
                exports: [IsValidPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdmFsaWQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2lzLXZhbGlkLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQVc3QixNQUFNLE9BQU8saUJBQWlCOzs7WUFKN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBpc1ZhbGlkIGZyb20gJ2RhdGUtZm5zL2lzVmFsaWQnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zSXNWYWxpZCcgfSlcbmV4cG9ydCBjbGFzcyBJc1ZhbGlkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1ZhbGlkKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0lzVmFsaWRQaXBlXSxcbiAgZXhwb3J0czogW0lzVmFsaWRQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc1ZhbGlkUGlwZU1vZHVsZSB7fVxuIl19