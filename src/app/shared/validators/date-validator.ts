import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export class DateValidator {
  public static isBeforeDate(date: string) {
    const format = 'YYYY-MM-DD';
    return (c: FormControl) => {
      const cDate = moment(c.value, format, true);
      return moment(cDate).isBefore(date) ?
        {'notBeforeDate': {'beforeDate': date, 'actualValue': c.value}} :
        null;
    };
  }
}
