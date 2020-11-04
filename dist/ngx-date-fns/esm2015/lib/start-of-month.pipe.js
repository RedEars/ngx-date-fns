import { NgModule, Pipe } from '@angular/core';
import startOfMonth from 'date-fns/startOfMonth';
export class StartOfMonthPipe {
    transform(date) {
        return startOfMonth(date);
    }
}
StartOfMonthPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsStartOfMonth' },] }
];
export class StartOfMonthPipeModule {
}
StartOfMonthPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StartOfMonthPipe],
                exports: [StartOfMonthPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb2YtbW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N0YXJ0LW9mLW1vbnRoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTs7QUFXbEMsTUFBTSxPQUFPLHNCQUFzQjs7O1lBSmxDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydE9mTW9udGgnO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zU3RhcnRPZk1vbnRoJyB9KVxuZXhwb3J0IGNsYXNzIFN0YXJ0T2ZNb250aFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZk1vbnRoKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1N0YXJ0T2ZNb250aFBpcGVdLFxuICBleHBvcnRzOiBbU3RhcnRPZk1vbnRoUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRPZk1vbnRoUGlwZU1vZHVsZSB7fVxuIl19