import { NgModule, Pipe } from '@angular/core';
import addQuarters from 'date-fns/addQuarters';
export class AddQuartersPipe {
    transform(date, amount) {
        return addQuarters(date, amount);
    }
}
AddQuartersPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddQuarters' },] }
];
export class AddQuartersPipeModule {
}
AddQuartersPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddQuartersPipe],
                exports: [AddQuartersPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXF1YXJ0ZXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZGF0ZS1mbnMvc3JjL2xpYi9hZGQtcXVhcnRlcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGVBQWU7SUFDMUIsU0FBUyxDQUFDLElBQXNCLEVBQUUsTUFBYztRQUM5QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFOztBQVdqQyxNQUFNLE9BQU8scUJBQXFCOzs7WUFKakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVGbnNJbnB1dERhdGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBhZGRRdWFydGVycyBmcm9tICdkYXRlLWZucy9hZGRRdWFydGVycyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNBZGRRdWFydGVycycgfSlcbmV4cG9ydCBjbGFzcyBBZGRRdWFydGVyc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIGFkZFF1YXJ0ZXJzKGRhdGUsIGFtb3VudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWRkUXVhcnRlcnNQaXBlXSxcbiAgZXhwb3J0czogW0FkZFF1YXJ0ZXJzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgQWRkUXVhcnRlcnNQaXBlTW9kdWxlIHt9XG4iXX0=