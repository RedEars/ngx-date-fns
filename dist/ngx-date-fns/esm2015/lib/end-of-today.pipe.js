import { NgModule, Pipe } from '@angular/core';
import endOfToday from 'date-fns/endOfToday';
export class EndOfTodayPipe {
    transform() {
        return endOfToday();
    }
}
EndOfTodayPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfToday' },] }
];
export class EndOfTodayPipeModule {
}
EndOfTodayPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfTodayPipe],
                exports: [EndOfTodayPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXRvZGF5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9lbmQtb2YtdG9kYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFHN0MsTUFBTSxPQUFPLGNBQWM7SUFDekIsU0FBUztRQUNQLE9BQU8sVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztBQVdoQyxNQUFNLE9BQU8sb0JBQW9COzs7WUFKaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBlbmRPZlRvZGF5IGZyb20gJ2RhdGUtZm5zL2VuZE9mVG9kYXknO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRW5kT2ZUb2RheScgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZlRvZGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oKTogRGF0ZSB7XG4gICAgcmV0dXJuIGVuZE9mVG9kYXkoKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbmRPZlRvZGF5UGlwZV0sXG4gIGV4cG9ydHM6IFtFbmRPZlRvZGF5UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZUb2RheVBpcGVNb2R1bGUge31cbiJdfQ==