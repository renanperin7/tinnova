import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendido'
})
export class PipePipe implements PipeTransform {

  transform(value: boolean | null): string {
    return value ? 'Vendido' : 'Não vendido';
  }

}
