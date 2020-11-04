import { NgModule, Pipe } from '@angular/core';
import getSeconds from 'date-fns/getSeconds';
export class GetSecondsPipe {
    transform(date) {
        return getSeconds(date);
    }
}
GetSecondsPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetSeconds' },] }
];
export class GetSecondsPipeModule {
}
GetSecondsPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetSecondsPipe],
                exports: [GetSecondsPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNlY29uZHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1zZWNvbmRzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0FBV2hDLE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvZ2V0U2Vjb25kcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXRTZWNvbmRzJyB9KVxuZXhwb3J0IGNsYXNzIEdldFNlY29uZHNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0U2Vjb25kcyhkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXRTZWNvbmRzUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXRTZWNvbmRzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0U2Vjb25kc1BpcGVNb2R1bGUge31cbiJdfQ==