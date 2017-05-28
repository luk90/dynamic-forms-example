///<reference path="../../../../shared/dynamic-form/constants/input-type.constants.ts"/>
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NumberValidator } from '../../../../shared/validators/number-validator';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SECTION_E } from '../../../application/section-e/section-e.constants';
import { TYPE } from '../../../../shared/dynamic-form/constants/type.constants';
import { INPUT_TYPE } from '../../../../shared/dynamic-form/constants/input-type.constants';
import { FieldConfig } from '../../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/containers/dynamic-form.component';

@Component({
  selector: 'app-section-e-b-input',
  templateUrl: './section-e-b-input.component.html',
  styleUrls: ['./section-e-b-input.component.scss']
})
export class SectionEBInputComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  appForm: FormGroup;

  private _number: number;
  private fieldAValidators: [(control: AbstractControl) => ValidationErrors] = [Validators.required];
  private fieldBValidators: [(control: AbstractControl) => ValidationErrors] = [Validators.required];
  config: FieldConfig[];


  constructor() {
  }

  ngOnInit() {
    this.config = [
      {
        type: TYPE.INPUT,
        inputType: INPUT_TYPE.DATE,
        name: SECTION_E.FIELD_A.NAME,
        placeholder: SECTION_E.FIELD_A.PLACEHOLDER,
        validation: this.fieldAValidators,
        // value: this.savedForm[SECTION_E.FIELD_A.NAME]
      },
      {
        type: TYPE.INPUT,
        inputType: INPUT_TYPE.NUMBER,
        name: SECTION_E.FIELD_B.NAME,
        placeholder: SECTION_E.FIELD_B.PLACEHOLDER,
        validation: this.fieldBValidators,
        // value: this.savedForm[SECTION_E.FIELD_B.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_C.NAME,
        placeholder: SECTION_E.FIELD_C.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_C.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_D.NAME,
        placeholder: SECTION_E.FIELD_D.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_D.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_E.NAME,
        placeholder: SECTION_E.FIELD_E.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_E.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_F.NAME,
        placeholder: SECTION_E.FIELD_F.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_F.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_G.NAME,
        placeholder: SECTION_E.FIELD_G.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_G.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_H.NAME,
        placeholder: SECTION_E.FIELD_H.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_H.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_I.NAME,
        placeholder: SECTION_E.FIELD_I.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_I.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_J.NAME,
        placeholder: SECTION_E.FIELD_J.PLACEHOLDER,
        // value: this.savedForm[SECTION_E.FIELD_J.NAME]
      }
    ];
  }

  ngAfterViewInit(): void {
    this.appForm.addControl('sectionEChild', this.dynamicForm.form);
    this.updateFieldBValidators();
  }

  ngOnDestroy(): void {
    this.appForm.removeControl('sectionEChild');
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
    if (value && this.dynamicForm.form) {
      this.updateFieldBValidators();
    }
  }


  updateFieldBValidators() {
    const fieldB = this.dynamicForm.form.get(SECTION_E.FIELD_B.NAME);
    fieldB.setValidators(Validators.compose(
      [...this.fieldBValidators,
        NumberValidator.isLower(this.number)
      ]
    ));
    fieldB.updateValueAndValidity();
  }

}
