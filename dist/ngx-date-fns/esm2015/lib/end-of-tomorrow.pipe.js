import { NgModule, Pipe } from '@angular/core';
import endOfTomorrow from 'date-fns/endOfTomorrow';
export class EndOfTomorrowPipe {
    transform() {
        return endOfTomorrow();
    }
}
EndOfTomorrowPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfTomorrow' },] }
];
export class EndOfTomorrowPipeModule {
}
EndOfTomorrowPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfTomorrowPipe],
                exports: [EndOfTomorrowPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXRvbW9ycm93LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9lbmQtb2YtdG9tb3Jyb3cucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxhQUFhLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixTQUFTO1FBQ1AsT0FBTyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7O0FBV25DLE1BQU0sT0FBTyx1QkFBdUI7OztZQUpuQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBlbmRPZlRvbW9ycm93IGZyb20gJ2RhdGUtZm5zL2VuZE9mVG9tb3Jyb3cnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRW5kT2ZUb21vcnJvdycgfSlcbmV4cG9ydCBjbGFzcyBFbmRPZlRvbW9ycm93UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oKTogRGF0ZSB7XG4gICAgcmV0dXJuIGVuZE9mVG9tb3Jyb3coKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFbmRPZlRvbW9ycm93UGlwZV0sXG4gIGV4cG9ydHM6IFtFbmRPZlRvbW9ycm93UGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZUb21vcnJvd1BpcGVNb2R1bGUge31cbiJdfQ==