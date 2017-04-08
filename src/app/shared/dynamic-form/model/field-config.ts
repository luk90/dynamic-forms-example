import {ValidatorFn} from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  inputType?: string;
  type: string;
  validation?: ValidatorFn[];
  groupValidation?: ValidatorFn[];
  value?: any;
}
