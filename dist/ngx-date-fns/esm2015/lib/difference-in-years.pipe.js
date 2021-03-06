import { NgModule, Pipe } from '@angular/core';
import differenceInYears from 'date-fns/differenceInYears';
export class DifferenceInYearsPipe {
    transform(dateLeft, dateRight) {
        return differenceInYears(dateLeft, dateRight);
    }
}
DifferenceInYearsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInYears' },] }
];
export class DifferenceInYearsPipeModule {
}
DifferenceInYearsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInYearsPipe],
                exports: [DifferenceInYearsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi15ZWFycy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRhdGUtZm5zL3NyYy9saWIvZGlmZmVyZW5jZS1pbi15ZWFycy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBRzNELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsU0FBUyxDQUFDLFFBQTBCLEVBQUUsU0FBMkI7UUFDL0QsT0FBTyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFOztBQVd2QyxNQUFNLE9BQU8sMkJBQTJCOzs7WUFKdkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluWWVhcnMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluWWVhcnMnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRGlmZmVyZW5jZUluWWVhcnMnIH0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluWWVhcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGlmZmVyZW5jZUluWWVhcnMoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGlmZmVyZW5jZUluWWVhcnNQaXBlXSxcbiAgZXhwb3J0czogW0RpZmZlcmVuY2VJblllYXJzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluWWVhcnNQaXBlTW9kdWxlIHt9XG4iXX0=