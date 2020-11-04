import { PipeTransform } from '@angular/core';
export declare class ParseIsoPipe implements PipeTransform {
    transform(dateString: any, options?: {
        additionalDigits?: 0 | 1 | 2;
    }): Date;
}
export declare class ParseIsoPipeModule {
}
