import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hrsMinutes'
})
export class HrsMinutes implements PipeTransform {
  transform(value: number): string {
    if (value > 0 && value / 60 < 1) {
      return value + ' Minutes';
    } else {
      return Math.floor(value / 60) + ' Hr(s) ' + value % 60 + ' Minute(s)';
    }
  }
}