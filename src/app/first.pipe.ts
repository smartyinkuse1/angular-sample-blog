import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // rest operator
    return `${value} You're welcome!`;
  }

}
