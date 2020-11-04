import { NgModule, Pipe } from '@angular/core';
import getMinutes from 'date-fns/getMinutes';
export class GetMinutesPipe {
    transform(date) {
        return getMinutes(date);
    }
}
GetMinutesPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsGetMinutes' },] }
];
export class GetMinutesPipeModule {
}
GetMinutesPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GetMinutesPipe],
                exports: [GetMinutesPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW1pbnV0ZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL2dldC1taW51dGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7O0FBV2hDLE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGdldE1pbnV0ZXMgZnJvbSAnZGF0ZS1mbnMvZ2V0TWludXRlcyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNHZXRNaW51dGVzJyB9KVxuZXhwb3J0IGNsYXNzIEdldE1pbnV0ZXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0TWludXRlcyhkYXRlKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXRNaW51dGVzUGlwZV0sXG4gIGV4cG9ydHM6IFtHZXRNaW51dGVzUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2V0TWludXRlc1BpcGVNb2R1bGUge31cbiJdfQ==