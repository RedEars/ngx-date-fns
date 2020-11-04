import { NgModule, Pipe } from '@angular/core';
import endOfYesterday from 'date-fns/endOfYesterday';
export class EndOfYesterdayPipe {
    transform() {
        return endOfYesterday();
    }
}
EndOfYesterdayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfYesterday' },] }
];
export class EndOfYesterdayPipeModule {
}
EndOfYesterdayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfYesterdayPipe],
                exports: [EndOfYesterdayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXllc3RlcmRheS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZW5kLW9mLXllc3RlcmRheS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLGNBQWMsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVM7UUFDUCxPQUFPLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFXcEMsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBSnBDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGVuZE9mWWVzdGVyZGF5IGZyb20gJ2RhdGUtZm5zL2VuZE9mWWVzdGVyZGF5JztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0VuZE9mWWVzdGVyZGF5JyB9KVxuZXhwb3J0IGNsYXNzIEVuZE9mWWVzdGVyZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oKTogRGF0ZSB7XG4gICAgcmV0dXJuIGVuZE9mWWVzdGVyZGF5KCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRW5kT2ZZZXN0ZXJkYXlQaXBlXSxcbiAgZXhwb3J0czogW0VuZE9mWWVzdGVyZGF5UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZZZXN0ZXJkYXlQaXBlTW9kdWxlIHt9XG4iXX0=