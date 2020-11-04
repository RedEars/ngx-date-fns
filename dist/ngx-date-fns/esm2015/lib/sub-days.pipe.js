import { NgModule, Pipe } from '@angular/core';
import subDays from 'date-fns/subDays';
export class SubDaysPipe {
    transform(date, amount) {
        return subDays(date, amount);
    }
}
SubDaysPipe.decorators = [
    { type: Pipe, args: [{ name: 'dfnsSubDays' },] }
];
export class SubDaysPipeModule {
}
SubDaysPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SubDaysPipe],
                exports: [SubDaysPipe]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWRheXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1kYXRlLWZucy9zcmMvbGliL3N1Yi1kYXlzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxJQUFzQixFQUFFLE1BQWM7UUFDOUMsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQUpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7O0FBVzdCLE1BQU0sT0FBTyxpQkFBaUI7OztZQUo3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUZuc0lucHV0RGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHN1YkRheXMgZnJvbSAnZGF0ZS1mbnMvc3ViRGF5cyc7XG5cbkBQaXBlKHsgbmFtZTogJ2RmbnNTdWJEYXlzJyB9KVxuZXhwb3J0IGNsYXNzIFN1YkRheXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlRm5zSW5wdXREYXRlLCBhbW91bnQ6IG51bWJlcik6IERhdGUge1xuICAgIHJldHVybiBzdWJEYXlzKGRhdGUsIGFtb3VudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU3ViRGF5c1BpcGVdLFxuICBleHBvcnRzOiBbU3ViRGF5c1BpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFN1YkRheXNQaXBlTW9kdWxlIHt9XG4iXX0=