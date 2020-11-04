import { NgModule, Pipe } from '@angular/core';
import subQuarters from 'date-fns/subQuarters';
export class SubQuartersPipe {
    transform(date, amount) {
        return subQuarters(date, amount);
    }
}
SubQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubQuarters' },] }
];
export class SubQuartersPipeModule {
}
SubQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubQuartersPipe],
                exports: [SubQuartersPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLXF1YXJ0ZXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9zdWItcXVhcnRlcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLElBQXNCLEVBQUUsTUFBYztRQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdWJRdWFydGVycyBmcm9tICdkYXRlLWZucy9zdWJRdWFydGVycyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdWJRdWFydGVycycgfSlcbmV4cG9ydCBjbGFzcyBTdWJRdWFydGVyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIHN1YlF1YXJ0ZXJzKGRhdGUsIGFtb3VudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3ViUXVhcnRlcnNQaXBlXSxcbiAgZXhwb3J0czogW1N1YlF1YXJ0ZXJzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3ViUXVhcnRlcnNQaXBlTW9kdWxlIHt9XG4iXX0=