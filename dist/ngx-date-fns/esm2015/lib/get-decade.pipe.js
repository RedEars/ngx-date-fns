import { NgModule, Pipe } from '@angular/core';
import getDecade from 'date-fns/getDecade';
export class GetDecadePipe {
    transform(date) {
        return getDecade(date);
    }
}
GetDecadePipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDecade' },] }
];
export class GetDecadePipeModule {
}
GetDecadePipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDecadePipe],
                exports: [GetDecadePipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRlY2FkZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LWRlY2FkZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLFNBQVMsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUN4QixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7QUFXL0IsTUFBTSxPQUFPLG1CQUFtQjs7O1lBSi9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZ2V0RGVjYWRlIGZyb20gJ2RhdGUtZm5zL2dldERlY2FkZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXREZWNhZGUnIH0pXG5leHBvcnQgY2xhc3MgR2V0RGVjYWRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldERlY2FkZShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXREZWNhZGVQaXBlXSxcbiAgZXhwb3J0czogW0dldERlY2FkZVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERlY2FkZVBpcGVNb2R1bGUge31cbiJdfQ==