import { NgModule, Pipe } from '@angular/core';
import getQuarter from 'date-fns/getQuarter';
export class GetQuarterPipe {
    transform(date) {
        return getQuarter(date);
    }
}
GetQuarterPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetQuarter' },] }
];
export class GetQuarterPipeModule {
}
GetQuarterPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetQuarterPipe],
                exports: [GetQuarterPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXF1YXJ0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1xdWFydGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0FBV2hDLE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldFF1YXJ0ZXIgZnJvbSAnZGF0ZS1mbnMvZ2V0UXVhcnRlcic7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXRRdWFydGVyJyB9KVxuZXhwb3J0IGNsYXNzIEdldFF1YXJ0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0UXVhcnRlcihkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXRRdWFydGVyUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXRRdWFydGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0UXVhcnRlclBpcGVNb2R1bGUge31cbiJdfQ==