import {FieldConfig} from './field-config';
import {FormGroup} from '@angular/forms';

export interface Field {
  config: FieldConfig;
  group: FormGroup;
}
