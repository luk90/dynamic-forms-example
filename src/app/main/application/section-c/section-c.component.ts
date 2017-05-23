import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { Validators } from '@angular/forms';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { ApplicationStateService } from '../application-state.service';
import { Subscription } from 'rxjs/Subscription';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { SECTION_C } from './section-c.constants';
import { INPUT_TYPE } from '../../../shared/dynamic-form/constants/input-type.constants';
import { ApplicationUtilsService } from '../application-utils.service';

@Component({
  selector: 'app-section-c',
  templateUrl: './section-c.component.html',
  styleUrls: ['./section-c.component.scss']
})
export class SectionCComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private formSubscription: Subscription;
  config: FieldConfig[];
  savedForm: Object = {};

  constructor(private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionC');
    this.config = [
      {
        type: TYPE.INPUT,
        label: SECTION_C.NAME.LABEL,
        name: SECTION_C.NAME.NAME,
        placeholder: SECTION_C.NAME.PLACEHOLDER,
        validation: [Validators.required, Validators.minLength(2)],
        value: this.savedForm[SECTION_C.NAME.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_C.EMAIL.LABEL,
        name: SECTION_C.EMAIL.NAME,
        inputType: INPUT_TYPE.TEXT,
        placeholder: SECTION_C.EMAIL.PLACEHOLDER,
        validation: [Validators.required, EmailValidator.isValidMailFormat],
        value: this.savedForm[SECTION_C.EMAIL.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_C.NIP.LABEL,
        name: SECTION_C.NIP.NAME,
        placeholder: SECTION_C.NIP.PLACEHOLDER,
        validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum],
        value: this.savedForm[SECTION_C.NIP.NAME],
        messageConfig: 'onClick'
      },
      {
        type: TYPE.INPUT,
        label: SECTION_C.REGON.LABEL,
        name: SECTION_C.REGON.NAME,
        placeholder: SECTION_C.REGON.PLACEHOLDER,
        validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum],
        value: this.savedForm[SECTION_C.REGON.NAME]
      },
    ];
  }

  ngAfterViewInit(): void {
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionC', form);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

  validateOnClick() {
    this.config[0].messageConfig = 'onClick';
    console.log(this.config[0]);
    // this.config.forEach((field) => {
    //   field.messageConfig = 'onClick';
    //   console.log(field.messageConfig);
    // });
  }
}
