import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { SECTION_E } from '../section-e.constants';
import { TYPE } from '../../../shared/dynamic-form/constans/types.constants';
import { DateValidator } from '../../../shared/validators/date-validator';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { GlobalVariableService } from '../../global-variable.service';
import { NumberValidator } from '../../../shared/validators/number-validator';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-section-e-a',
  templateUrl: './section-e-a.component.html',
  styleUrls: ['./section-e-a.component.scss']
})
export class SectionEAComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private validationSubscription: Subscription;
  private number: number;
  private date: string;
  private fieldAValidators: [(control: AbstractControl) => ValidationErrors] = [Validators.required];
  private fieldBValidators: [(control: AbstractControl) => ValidationErrors] = [Validators.required];
  config: FieldConfig[];

  set validationDate(value: string) {
    this.date = value;
    this.updateFieldAValidators();
  }

  set validationNumber(value: number) {
    this.number = value;
    this.updateFieldBValidators();
  }

  constructor(private globalVariableService: GlobalVariableService) {
  }

  ngOnInit() {
    this.config = [
      {
        type: TYPE.INPUT,
        inputType: 'date',
        name: SECTION_E.FIELD_A.NAME,
        placeholder: SECTION_E.FIELD_A.PLACEHOLDER,
        validation: this.fieldAValidators
      },
      {
        type: TYPE.INPUT,
        inputType: 'number',
        name: SECTION_E.FIELD_B.NAME,
        placeholder: SECTION_E.FIELD_B.PLACEHOLDER,
        validation: this.fieldBValidators
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_C.NAME,
        placeholder: SECTION_E.FIELD_C.PLACEHOLDER,
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_D.NAME,
        placeholder: SECTION_E.FIELD_D.PLACEHOLDER,
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_E.NAME,
        placeholder: SECTION_E.FIELD_E.PLACEHOLDER,
      }
    ];
  }

  ngAfterViewInit(): void {
    this.validationDate = this.globalVariableService.getVariable('date');
    this.validationNumber = this.globalVariableService.getVariable('number');
    this.validationSubscription = this.globalVariableService.globalVariables$.subscribe(value => {
      this.validationDate = value.get('date');
      this.validationNumber = value.get('number');
    });
  }

  ngOnDestroy(): void {
    this.validationSubscription.unsubscribe();
  }

  updateFieldAValidators() {
    const fieldA = this.dynamicForm.form.get('fieldA');
    fieldA.setValidators(Validators.compose(
      [...this.fieldAValidators,
        DateValidator.isBeforeDate(this.date)
      ]
    ));
    fieldA.updateValueAndValidity();
  }

  updateFieldBValidators() {
    const fieldB = this.dynamicForm.form.get('fieldB');
    fieldB.setValidators(Validators.compose(
      [...this.fieldBValidators,
        NumberValidator.isLower(this.number)
      ]
    ));
    fieldB.updateValueAndValidity();
  }
}
