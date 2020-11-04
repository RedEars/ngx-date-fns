import { NgModule, Pipe } from '@angular/core';
import isSameMonth from 'date-fns/isSameMonth';
export class IsSameMonthPipe {
    transform(dateLeft, dateRight) {
        return isSameMonth(dateLeft, dateRight);
    }
}
IsSameMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsSameMonth' },] }
];
export class IsSameMonthPipeModule {
}
IsSameMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsSameMonthPipe],
                exports: [IsSameMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtc2FtZS1tb250aC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvaXMtc2FtZS1tb250aC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUcvQyxNQUFNLE9BQU8sZUFBZTtJQUMxQixTQUFTLENBQUMsUUFBMEIsRUFBRSxTQUEyQjtRQUMvRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc1NhbWVNb250aCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNJc1NhbWVNb250aCcgfSlcbmV4cG9ydCBjbGFzcyBJc1NhbWVNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGVMZWZ0OiBEYXRlRm5zSW5wdXREYXRlLCBkYXRlUmlnaHQ6IERhdGVGbnNJbnB1dERhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNTYW1lTW9udGgoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSXNTYW1lTW9udGhQaXBlXSxcbiAgZXhwb3J0czogW0lzU2FtZU1vbnRoUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgSXNTYW1lTW9udGhQaXBlTW9kdWxlIHt9XG4iXX0=