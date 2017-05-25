import {ValidatorFn} from '@angular/forms';
import { ValidationControlType } from '../../messages/components/error-message/error-message.component';

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
  validationMessageControl?: ValidationControlType;
}
