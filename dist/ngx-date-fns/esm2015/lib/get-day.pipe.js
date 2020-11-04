import { NgModule, Pipe } from '@angular/core';
import getDay from 'date-fns/getDay';
export class GetDayPipe {
    transform(date) {
        return getDay(date);
    }
}
GetDayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDay' },] }
];
export class GetDayPipeModule {
}
GetDayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDayPipe],
                exports: [GetDayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZ2V0LWRheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUdyQyxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTs7QUFXNUIsTUFBTSxPQUFPLGdCQUFnQjs7O1lBSjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQzthQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZ2V0RGF5IGZyb20gJ2RhdGUtZm5zL2dldERheSc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXREYXknIH0pXG5leHBvcnQgY2xhc3MgR2V0RGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldERheShkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXREYXlQaXBlXSxcbiAgZXhwb3J0czogW0dldERheVBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERheVBpcGVNb2R1bGUge31cbiJdfQ==