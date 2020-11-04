import { NgModule, Pipe } from '@angular/core';
import addMinutes from 'date-fns/addMinutes';
export class AddMinutesPipe {
    transform(date, amount) {
        return addMinutes(date, amount);
    }
}
AddMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddMinutes' },] }
];
export class AddMinutesPipeModule {
}
AddMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddMinutesPipe],
                exports: [AddMinutesPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1pbnV0ZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2FkZC1taW51dGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLE1BQWM7UUFDOUMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgYWRkTWludXRlcyBmcm9tICdkYXRlLWZucy9hZGRNaW51dGVzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0FkZE1pbnV0ZXMnIH0pXG5leHBvcnQgY2xhc3MgQWRkTWludXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIGFkZE1pbnV0ZXMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBZGRNaW51dGVzUGlwZV0sXG4gIGV4cG9ydHM6IFtBZGRNaW51dGVzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgQWRkTWludXRlc1BpcGVNb2R1bGUge31cbiJdfQ==