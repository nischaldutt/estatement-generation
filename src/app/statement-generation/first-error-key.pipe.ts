import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstErrorKey'
})
export class FirstErrorKeyPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    console.log({error})
    const keys = Object.keys(error);
    return keys && keys.length>0 ? keys[0] : null;
  }

}
