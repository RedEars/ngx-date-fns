import { NgModule, Pipe } from '@angular/core';
import getYear from 'date-fns/getYear';
export class GetYearPipe {
    transform(date) {
        return getYear(date);
    }
}
GetYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetYear' },] }
];
export class GetYearPipeModule {
}
GetYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetYearPipe],
                exports: [GetYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXllYXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC15ZWFyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQVc3QixNQUFNLE9BQU8saUJBQWlCOzs7WUFKN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXRZZWFyIGZyb20gJ2RhdGUtZm5zL2dldFllYXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zR2V0WWVhcicgfSlcbmV4cG9ydCBjbGFzcyBHZXRZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFllYXIoZGF0ZSk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbR2V0WWVhclBpcGVdLFxuICBleHBvcnRzOiBbR2V0WWVhclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldFllYXJQaXBlTW9kdWxlIHt9XG4iXX0=