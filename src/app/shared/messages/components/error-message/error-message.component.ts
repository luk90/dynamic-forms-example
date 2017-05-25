import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessageService } from './error-message-service';
import { ApplicationStateService } from '../../../../main/application/application-state.service';
import {ApplicationStateType} from '../../../../main/application/application-state-type';

export type ValidationControlType = 'ON_BLUR' | 'NONE' | 'ON_CLICK';
@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() control: FormControl;
  @Input() validationControl: ValidationControlType = 'ON_BLUR';
  @Input() onBlur: boolean;
  @Input() formState: ApplicationStateType;

  constructor() {
  }

  ngOnInit() {

  }

  get errorMessage() {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key)) {
        return ErrorMessageService.getValidationMessage(key, this.control.errors[key]);
      }
    }
    return null;
  }

  isControlInvalidAndTouched(): boolean {
    return !this.control.valid
      && this.control.touched;
  }

  isControlInvalid(): boolean {
    return !this.control.valid;
  }

  showOnBlurValidation(): boolean {
    return this.isControlInvalidAndTouched() && this.onBlur && this.validationControl === 'ON_BLUR';
  }

  showOnBlurValidationForPristine(): boolean {
    return this.isControlInvalid() && this.onBlur && this.validationControl === 'ON_BLUR';
  }

  showOnClickValidation(): boolean {
    return this.isControlInvalid() && this.validationControl === 'ON_CLICK';
  }

  showValidationForNew(): boolean {
    return (this.showOnBlurValidation() || this.showOnClickValidation()) && this.formState === 'NEW';
  }

  showValidationForEdit(): boolean {
    return (this.showOnBlurValidationForPristine() || this.showOnClickValidation())
      && this.formState === 'EDIT';
  }

  showValidation(): boolean {
    return this.showValidationForNew() || this.showValidationForEdit();
  }
}
