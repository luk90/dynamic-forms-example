import {Component, OnInit} from '@angular/core';
import {Field} from '../../model/field';
import {FieldConfig} from '../../model/field-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements Field {

  config: FieldConfig;
  group: FormGroup;
}
