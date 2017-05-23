import { Component, OnInit } from '@angular/core';
import { Field } from '../../model/field';
import { FieldConfig } from '../../model/field-config';
import { FormGroup } from '@angular/forms';
import { ApplicationStateService } from '../../../../main/application/application-state.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  isInEditState: boolean;
  isOnClick: boolean;
  isOnBlur: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
  }

  ngOnInit(): void {
    this.isInEditState = this.applicationStateService.applicationStateType === 'EDIT';
    this.isOnClick = this.config.messageConfig === 'onClick';
  }

  onBlurMethod(): void {
    if (this.isOnClick) {
      return;
    }
    this.isOnBlur = true;
  }

  onFocusMethod(): void {
    this.isOnBlur = false;
  }

  showValidation(): boolean {
    return !this.group.controls[this.config.name].valid
      && this.group.controls[this.config.name].touched
      && !this.isInEditState
      && this.isOnBlur;
  }

  showOnClickValidation(): boolean {
    return this.config.messageConfig === 'onClick';
  }
}
