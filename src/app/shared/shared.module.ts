import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field/dynamic-field.directive';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { ErrorMessageComponent } from './messages/components/error-message/error-message.component';
import { MaterialModule } from '../material/material.module';
import { FormRadioComponent } from './dynamic-form/components/form-radio/form-radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    DynamicFormComponent,
    FormInputComponent,
    FormSelectComponent,
    DynamicFieldDirective,
    FormButtonComponent,
    ErrorMessageComponent,
    FormRadioComponent,
  ],
  exports: [
    DynamicFormComponent,
    MaterialModule
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent,
    FormRadioComponent
  ]
})
export class SharedModule {
}
