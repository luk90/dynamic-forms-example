import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { Validators } from '@angular/forms';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { GlobalVariableService } from '../global-variable.service';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationStateService } from '../application-state.service';
import { ApplicationUtilsService } from '../application-utils.service';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { SECTION_B } from './section-b.constants';
import { INPUT_TYPE } from '../../../shared/dynamic-form/constants/input-type.constants';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.scss'],
})
export class SectionBComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private dateSubscription: Subscription;
  private numberSubscription: Subscription;
  private formSubscription: Subscription;
  savedForm: Object = {};
  config: FieldConfig[];

  constructor(private globalVariableService: GlobalVariableService,
              private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionB');
    this.config = [
      {
        type: TYPE.INPUT,
        label: SECTION_B.DATE.LABEL,
        name: SECTION_B.DATE.NAME,
        inputType: INPUT_TYPE.DATE,
        placeholder: SECTION_B.DATE.PLACEHOLDER,
        validation: [Validators.required],
        value: this.savedForm[SECTION_B.DATE.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_B.NUMBER_FIELD.LABEL,
        name: SECTION_B.NUMBER_FIELD.NAME,
        inputType: INPUT_TYPE.NUMBER,
        placeholder: SECTION_B.NUMBER_FIELD.PLACEHOLDER,
        validation: [Validators.required],
        value: this.savedForm[SECTION_B.NUMBER_FIELD.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_B.NIP.LABEL,
        name: SECTION_B.NIP.NAME,
        placeholder: SECTION_B.NIP.PLACEHOLDER,
        validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum],
        value: this.savedForm[SECTION_B.NIP.NAME],
      },
      {
        type: TYPE.INPUT,
        label: SECTION_B.REGON.LABEL,
        name: SECTION_B.REGON.NAME,
        placeholder: SECTION_B.REGON.PLACEHOLDER,
        validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum],
        value: this.savedForm[SECTION_B.REGON.NAME]
      }
    ];

  }

  ngAfterViewInit(): void {
    this.dateSubscription = this.dynamicForm.form.get(SECTION_B.DATE.NAME)
      .valueChanges
      .subscribe((value) => {
        this.globalVariableService.addVariable(SECTION_B.DATE.NAME, value);
      });
    this.numberSubscription = this.dynamicForm.form.get(SECTION_B.NUMBER_FIELD.NAME)
      .valueChanges
      .subscribe((value) => {
        this.globalVariableService.addVariable(SECTION_B.NUMBER_FIELD.NAME, value);
      });
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionB', form);
    });
  }

  ngOnDestroy(): void {
    this.dateSubscription.unsubscribe();
    this.numberSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}
