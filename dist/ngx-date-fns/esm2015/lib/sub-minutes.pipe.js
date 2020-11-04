import { NgModule, Pipe } from '@angular/core';
import subMinutes from 'date-fns/subMinutes';
export class SubMinutesPipe {
    transform(date, amount) {
        return subMinutes(date, amount);
    }
}
SubMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubMinutes' },] }
];
export class SubMinutesPipeModule {
}
SubMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubMinutesPipe],
                exports: [SubMinutesPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLW1pbnV0ZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N1Yi1taW51dGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLE1BQWM7UUFDOUMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3ViTWludXRlcyBmcm9tICdkYXRlLWZucy9zdWJNaW51dGVzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc1N1Yk1pbnV0ZXMnIH0pXG5leHBvcnQgY2xhc3MgU3ViTWludXRlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIHN1Yk1pbnV0ZXMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTdWJNaW51dGVzUGlwZV0sXG4gIGV4cG9ydHM6IFtTdWJNaW51dGVzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3ViTWludXRlc1BpcGVNb2R1bGUge31cbiJdfQ==