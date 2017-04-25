import { Component } from '@angular/core';
import { Field } from '../../model/field';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../model/field-config';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

}
