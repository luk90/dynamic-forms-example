import { Component, OnInit } from '@angular/core';
import { Field } from '../../model/field';
import { FieldConfig } from '../../model/field-config';
import { FormGroup } from '@angular/forms';
import { ApplicationStateService, ApplicationStateType } from '../../../../main/application/application-state.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  state: ApplicationStateType;
  isOnBlur = true;

  constructor(private applicationStateService: ApplicationStateService) {
  }

  ngOnInit(): void {
    this.state = this.applicationStateService.applicationStateType;
  }

  onBlurMethod(): void {
    this.isOnBlur = true;
  }

  onFocusMethod(): void {
    this.isOnBlur = false;
  }

}
