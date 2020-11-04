import { NgModule, Pipe } from '@angular/core';
import endOfQuarter from 'date-fns/endOfQuarter';
export class EndOfQuarterPipe {
    transform(date) {
        return endOfQuarter(date);
    }
}
EndOfQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsEndOfQuarter' },] }
];
export class EndOfQuarterPipeModule {
}
EndOfQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EndOfQuarterPipe],
                exports: [EndOfQuarterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kLW9mLXF1YXJ0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2VuZC1vZi1xdWFydGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRTs7QUFXbEMsTUFBTSxPQUFPLHNCQUFzQjs7O1lBSmxDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGVuZE9mUXVhcnRlciBmcm9tICdkYXRlLWZucy9lbmRPZlF1YXJ0ZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdkZm5zRW5kT2ZRdWFydGVyJyB9KVxuZXhwb3J0IGNsYXNzIEVuZE9mUXVhcnRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGRhdGU6IERhdGVGbnNJbnB1dERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gZW5kT2ZRdWFydGVyKGRhdGUpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0VuZE9mUXVhcnRlclBpcGVdLFxuICBleHBvcnRzOiBbRW5kT2ZRdWFydGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgRW5kT2ZRdWFydGVyUGlwZU1vZHVsZSB7fVxuIl19