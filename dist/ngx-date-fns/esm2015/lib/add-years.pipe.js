import { NgModule, Pipe } from '@angular/core';
import addYears from 'date-fns/addYears';
export class AddYearsPipe {
    transform(date, amount) {
        return addYears(date, amount);
    }
}
AddYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddYears' },] }
];
export class AddYearsPipeModule {
}
AddYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddYearsPipe],
                exports: [AddYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXllYXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9hZGQteWVhcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFHekMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLElBQXNCLEVBQUUsTUFBYztRQUM5QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7QUFXOUIsTUFBTSxPQUFPLGtCQUFrQjs7O1lBSjlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgYWRkWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkWWVhcnMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zQWRkWWVhcnMnIH0pXG5leHBvcnQgY2xhc3MgQWRkWWVhcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiBhZGRZZWFycyhkYXRlLCBhbW91bnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FkZFllYXJzUGlwZV0sXG4gIGV4cG9ydHM6IFtBZGRZZWFyc1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEFkZFllYXJzUGlwZU1vZHVsZSB7fVxuIl19