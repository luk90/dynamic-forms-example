import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../../shared/dynamic-form/model/field-config';
import { SECTION_E } from '../section-e.constants';
import { TYPE } from '../../../../shared/dynamic-form/constants/type.constants';
import { DateValidator } from '../../../../shared/validators/date-validator';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { GlobalVariableService } from '../../global-variable.service';
import { NumberValidator } from '../../../../shared/validators/number-validator';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationStateService } from '../../application-state.service';
import { INPUT_TYPE } from '../../../../shared/dynamic-form/constants/input-type.constants';
import { ApplicationUtilsService } from '../../application-utils.service';

@Component({
  selector: 'app-section-e-a',
  templateUrl: './section-e-a.component.html',
  styleUrls: ['./section-e-a.component.scss']
})
export class SectionEAComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private savedForm: Object = {};
  private validationSubscription: Subscription;
  private formSubscription: Subscription;
  private number: number;
  private date: string;
  private fieldAValidators: [(control: AbstractControl) => ValidationErrors] = [Validators.required];
  private fieldBValidators: [(control: AbstractControl) => ValidationErrors] = [Validators.required];
  config: FieldConfig[];


  constructor(private globalVariableService: GlobalVariableService,
              private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionEA');
    this.config = [
      {
        type: TYPE.INPUT,
        inputType: INPUT_TYPE.DATE,
        name: SECTION_E.FIELD_A.NAME,
        placeholder: SECTION_E.FIELD_A.PLACEHOLDER,
        validation: this.fieldAValidators,
        value: this.savedForm[SECTION_E.FIELD_A.NAME]
      },
      {
        type: TYPE.INPUT,
        inputType: INPUT_TYPE.NUMBER,
        name: SECTION_E.FIELD_B.NAME,
        placeholder: SECTION_E.FIELD_B.PLACEHOLDER,
        validation: this.fieldBValidators,
        value: this.savedForm[SECTION_E.FIELD_B.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_C.NAME,
        placeholder: SECTION_E.FIELD_C.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_C.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_D.NAME,
        placeholder: SECTION_E.FIELD_D.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_D.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_E.NAME,
        placeholder: SECTION_E.FIELD_E.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_E.NAME]
      }
    ];
  }

  ngAfterViewInit(): void {
    this.validationDate = this.globalVariableService.getVariable('date');
    this.validationNumber = this.globalVariableService.getVariable('numberField');
    this.validationSubscription = this.globalVariableService.globalVariables$.subscribe(value => {
      this.validationDate = value.get('date');
      this.validationNumber = value.get('numberField');
    });
    this.applicationStateService.addFormGroup('sectionEA', this.dynamicForm.form);
    this.formSubscription = this.dynamicForm.changes
      .subscribe(form => this.applicationStateService.addFormGroup('sectionEA', form));
  }

  ngOnDestroy(): void {
    console.log('usuwanie sekcji ea');
    this.validationSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
    if (this.applicationStateService.applicationStateType !== 'CLOSE') {
      this.applicationStateService.removeFormGroup('sectionEA');
    }

  }

  set validationDate(value: string) {
    this.date = value;
    this.updateFieldAValidators();
  }

  set validationNumber(value: number) {
    this.number = value;
    this.updateFieldBValidators();
  }

  updateFieldAValidators() {
    const fieldA = this.dynamicForm.form.get(SECTION_E.FIELD_A.NAME);
    fieldA.setValidators(Validators.compose(
      [...this.fieldAValidators,
        DateValidator.isBeforeDate(this.date)
      ]
    ));
    fieldA.updateValueAndValidity();
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
