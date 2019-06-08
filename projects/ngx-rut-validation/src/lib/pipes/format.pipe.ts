import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'rut.js';

@Pipe({
  name: 'rutFormat'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return format(value);
  }

}
