import {FormControl} from '@angular/forms';
export class EmailValidator {

  static isValidMailFormat(control: FormControl) {
    const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

    return EMAIL_REGEXP.test(control.value) ? null : {
        invalidEmail: true
      };
  };
}
