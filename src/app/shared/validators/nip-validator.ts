import {FormControl} from '@angular/forms';
export class NipValidator {

  static isValidNipPattern(control: FormControl): { [key: string]: boolean } | null {
    const NIP_REGEXP = /^[0-9]{10}$/i;

    return NIP_REGEXP.test(control.value) ? null : {
      invalidNipPattern: true
    };
  };

  static isValidChecksum(control: FormControl): { [key: string]: boolean } | null {

    if (!NipValidator.isValidNipPattern(control)) {
      const wages: number[] = [6, 5, 7, 2, 3, 4, 5, 6, 7];

      const nipArray: Array<number> = control.value.split('')
        .map(item => parseInt(item, 10));

      const sumArray = wages.map((wage, index) => {
        return wage * nipArray[index];
      });

      const sum = sumArray.reduce((a, b) => {
        return a + b;
      }, 0);

      return sum % 11 !== nipArray.pop()  ? {invalidNipChecksum: true} : null;
    }
    return null;

  }
}
