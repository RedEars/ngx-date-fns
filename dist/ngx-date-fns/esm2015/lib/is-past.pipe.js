import { NgModule, Pipe } from '@angular/core';
import isPast from 'date-fns/isPast';
export class IsPastPipe {
    transform(date) {
        return isPast(date);
    }
}
IsPastPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsIsPast' },] }
];
export class IsPastPipeModule {
}
IsPastPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IsPastPipe],
                exports: [IsPastPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtcGFzdC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvaXMtcGFzdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7QUFXNUIsTUFBTSxPQUFPLGdCQUFnQjs7O1lBSjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNQYXN0IGZyb20gJ2RhdGUtZm5zL2lzUGFzdCc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNJc1Bhc3QnIH0pXG5leHBvcnQgY2xhc3MgSXNQYXN0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1Bhc3QoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSXNQYXN0UGlwZV0sXG4gIGV4cG9ydHM6IFtJc1Bhc3RQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBJc1Bhc3RQaXBlTW9kdWxlIHt9XG4iXX0=