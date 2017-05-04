import { Component } from '@angular/core';
import { Field } from '../../model/field';
import { FieldConfig } from '../../model/field-config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  // styleUrls: ['./form-input.component.scss'],
  styles: [`${this.style}`]
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  style = `
 .dynamic-field{
 font-size:20px;
 background-color: red;
}
`;

  constructor() {
  }


}
