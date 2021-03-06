import { NgModule, Pipe } from '@angular/core';
import differenceInMonths from 'date-fns/differenceInMonths';
export class DifferenceInMonthsPipe {
    transform(dateLeft, dateRight) {
        return differenceInMonths(dateLeft, dateRight);
    }
}
DifferenceInMonthsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsDifferenceInMonths' },] }
];
export class DifferenceInMonthsPipeModule {
}
DifferenceInMonthsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DifferenceInMonthsPipe],
                exports: [DifferenceInMonthsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW5jZS1pbi1tb250aHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2RpZmZlcmVuY2UtaW4tbW9udGhzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sa0JBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFHN0QsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxTQUFTLENBQUMsUUFBMEIsRUFBRSxTQUEyQjtRQUMvRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7O0FBV3hDLE1BQU0sT0FBTyw0QkFBNEI7OztZQUp4QyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZUluTW9udGhzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0RpZmZlcmVuY2VJbk1vbnRocycgfSlcbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlSW5Nb250aHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlTGVmdDogRGF0ZUZuc0lucHV0RGF0ZSwgZGF0ZVJpZ2h0OiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RpZmZlcmVuY2VJbk1vbnRoc1BpcGVdLFxuICBleHBvcnRzOiBbRGlmZmVyZW5jZUluTW9udGhzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUluTW9udGhzUGlwZU1vZHVsZSB7fVxuIl19