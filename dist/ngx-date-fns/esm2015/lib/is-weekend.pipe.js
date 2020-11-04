import { NgModule, Pipe } from '@angular/core';
import isWeekend from 'date-fns/isWeekend';
export class IsWeekendPipe {
    transform(date) {
        return isWeekend(date);
    }
}
IsWeekendPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsWeekend' },] }
];
export class IsWeekendPipeModule {
}
IsWeekendPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsWeekendPipe],
                exports: [IsWeekendPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtd2Vla2VuZC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvaXMtd2Vla2VuZC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7QUFXL0IsTUFBTSxPQUFPLG1CQUFtQjs7O1lBSi9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNXZWVrZW5kIGZyb20gJ2RhdGUtZm5zL2lzV2Vla2VuZCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNJc1dlZWtlbmQnIH0pXG5leHBvcnQgY2xhc3MgSXNXZWVrZW5kUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1dlZWtlbmQoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSXNXZWVrZW5kUGlwZV0sXG4gIGV4cG9ydHM6IFtJc1dlZWtlbmRQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc1dlZWtlbmRQaXBlTW9kdWxlIHt9XG4iXX0=