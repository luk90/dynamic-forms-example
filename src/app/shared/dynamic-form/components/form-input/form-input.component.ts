import {Component, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {FieldConfig} from '../../model/field-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  constructor() {
  }



}
