import {Component, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {FieldConfig} from '../../model/field-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
