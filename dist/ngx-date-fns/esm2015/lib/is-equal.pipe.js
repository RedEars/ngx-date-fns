import { NgModule, Pipe } from '@angular/core';
import isEqual from 'date-fns/isEqual';
export class IsEqualPipe {
    transform(dateLeft, dateRight) {
        return isEqual(dateLeft, dateRight);
    }
}
IsEqualPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsEqual' },] }
];
export class IsEqualPipeModule {
}
IsEqualPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsEqualPipe],
                exports: [IsEqualPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZXF1YWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2lzLWVxdWFsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxRQUEwQixFQUFFLFNBQTJCO1FBQy9ELE9BQU8sT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQVc3QixNQUFNLE9BQU8saUJBQWlCOzs7WUFKN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2RhdGUtZm5zL2lzRXF1YWwnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zSXNFcXVhbCcgfSlcbmV4cG9ydCBjbGFzcyBJc0VxdWFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZUxlZnQ6IERhdGVGbnNJbnB1dERhdGUsIGRhdGVSaWdodDogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0VxdWFsKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0lzRXF1YWxQaXBlXSxcbiAgZXhwb3J0czogW0lzRXF1YWxQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc0VxdWFsUGlwZU1vZHVsZSB7fVxuIl19