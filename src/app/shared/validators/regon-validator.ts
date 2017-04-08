import {FormControl} from '@angular/forms';

export class RegonValidator {
  static isValidRegonPattern(control: FormControl): { [key: string]: boolean } | null {
    const REGON_REGEXP = /^(\d{9}|\d{14})$/i;

    return REGON_REGEXP.test(control.value) ? null : {
      invalidRegonPattern: true
    };
  };


  static isValidChecksum(control: FormControl): { [key: string]: boolean } | null {

    if (!RegonValidator.isValidRegonPattern(control)) {
      const wagesForShorter: number[] = [8, 9, 2, 3, 4, 5, 6, 7];
      const wagesForLonger: number[] = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
      let sumArray = null;
      const regonArray: Array<number> = control.value.split('')
        .map(item => parseInt(item, 10));
      if (control.value.length === 9) {
        sumArray = wagesForShorter.map((wage, index) => {
          return wage * regonArray[index];
        });
      } else {
        sumArray = wagesForLonger.map((wage, index) => {
          return wage * regonArray[index];
        });
      }

      const sum = sumArray.reduce((a, b) => {
        return a + b;
      }, 0);
      let moduloResult = sum % 11;
      moduloResult = moduloResult === 10 ? 0 : moduloResult;
      return moduloResult !== regonArray.pop() ? {invalidRegonChecksum: true} : null;
    }
    return null;

  }
}
