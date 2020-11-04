import { NgModule, Pipe } from '@angular/core';
import subYears from 'date-fns/subYears';
export class SubYearsPipe {
    transform(date, amount) {
        return subYears(date, amount);
    }
}
SubYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubYears' },] }
];
export class SubYearsPipeModule {
}
SubYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubYearsPipe],
                exports: [SubYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXllYXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdWIteWVhcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLElBQXNCLEVBQUUsTUFBYztRQUM5QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7QUFXOUIsTUFBTSxPQUFPLGtCQUFrQjs7O1lBSjlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3ViWWVhcnMgZnJvbSAnZGF0ZS1mbnMvc3ViWWVhcnMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zU3ViWWVhcnMnIH0pXG5leHBvcnQgY2xhc3MgU3ViWWVhcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiBzdWJZZWFycyhkYXRlLCBhbW91bnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N1YlllYXJzUGlwZV0sXG4gIGV4cG9ydHM6IFtTdWJZZWFyc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFN1YlllYXJzUGlwZU1vZHVsZSB7fVxuIl19