import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pangkat'
})
export class PangkatPipe implements PipeTransform {

  transform(angka: number, pangkat: number): unknown {
    return Math.pow(angka, pangkat);
  }

}
