import {ValidatorFn} from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: any[];
  placeholder?: string;
  inputType?: string;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
}
