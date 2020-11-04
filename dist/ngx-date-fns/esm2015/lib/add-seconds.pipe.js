import { NgModule, Pipe } from '@angular/core';
import addSeconds from 'date-fns/addSeconds';
export class AddSecondsPipe {
    transform(date, amount) {
        return addSeconds(date, amount);
    }
}
AddSecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsAddSeconds' },] }
];
export class AddSecondsPipeModule {
}
AddSecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AddSecondsPipe],
                exports: [AddSecondsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXNlY29uZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2FkZC1zZWNvbmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLE1BQWM7UUFDOUMsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7QUFXaEMsTUFBTSxPQUFPLG9CQUFvQjs7O1lBSmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlRm5zSW5wdXREYXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRTZWNvbmRzJztcblxuQFBpcGUoeyBuYW1lOiAnZGZuc0FkZFNlY29uZHMnIH0pXG5leHBvcnQgY2xhc3MgQWRkU2Vjb25kc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUsIGFtb3VudDogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIGFkZFNlY29uZHMoZGF0ZSwgYW1vdW50KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBZGRTZWNvbmRzUGlwZV0sXG4gIGV4cG9ydHM6IFtBZGRTZWNvbmRzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgQWRkU2Vjb25kc1BpcGVNb2R1bGUge31cbiJdfQ==