import { FormControl } from '@angular/forms';

export class NumberValidator {

  public static isLower(number: number) {
    return (c: FormControl) => {
      return +c.value < number ?
        {'invalidLowerNumber': {'number': number, 'actualValue': c.value}} :
        null;
    };
  }

}
