import { NgModule, Pipe } from '@angular/core';
import getDayOfYear from 'date-fns/getDayOfYear';
export class GetDayOfYearPipe {
    transform(date) {
        return getDayOfYear(date);
    }
}
GetDayOfYearPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetDayOfYear' },] }
];
export class GetDayOfYearPipeModule {
}
GetDayOfYearPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetDayOfYearPipe],
                exports: [GetDayOfYearPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRheS1vZi15ZWFyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9nZXQtZGF5LW9mLXllYXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFHakQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixTQUFTLENBQUMsSUFBc0I7UUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFOztBQVdsQyxNQUFNLE9BQU8sc0JBQXNCOzs7WUFKbEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZ2V0RGF5T2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2dldERheU9mWWVhcic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXREYXlPZlllYXInIH0pXG5leHBvcnQgY2xhc3MgR2V0RGF5T2ZZZWFyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZUZuc0lucHV0RGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXREYXlPZlllYXJQaXBlXSxcbiAgZXhwb3J0czogW0dldERheU9mWWVhclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdldERheU9mWWVhclBpcGVNb2R1bGUge31cbiJdfQ==