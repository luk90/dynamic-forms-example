import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { SECTION_A } from './section-a.constants';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationStateService } from '../application-state.service';
import { ApplicationUtilsService } from '../application-utils.service';
import { INPUT_TYPE } from '../../../shared/dynamic-form/constants/input-type.constants';

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.scss']
})
export class SectionAComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  config: FieldConfig[];
  savedForm: Object = {};
  private formSubscription: Subscription;

  constructor(private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionA');
    this.config = [
      {
        type: TYPE.INPUT,
        label: SECTION_A.NAME.LABEL,
        name: SECTION_A.NAME.NAME,
        placeholder: SECTION_A.NAME.PLACEHOLDER,
        validation: [Validators.required, Validators.minLength(5)],
        value: this.savedForm[SECTION_A.NAME.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_A.EMAIL.LABEL,
        name: SECTION_A.EMAIL.NAME,
        inputType: INPUT_TYPE.TEXT,
        placeholder: SECTION_A.EMAIL.PLACEHOLDER,
        validation: [Validators.required, EmailValidator.isValidMailFormat],
        value: this.savedForm[SECTION_A.EMAIL.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_A.NIP.LABEL,
        name: SECTION_A.NIP.NAME,
        placeholder: SECTION_A.NIP.PLACEHOLDER,
        validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum],
        value: this.savedForm[SECTION_A.NIP.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_A.REGON.LABEL,
        name: SECTION_A.REGON.NAME,
        placeholder: SECTION_A.REGON.PLACEHOLDER,
        validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum],
        value: this.savedForm[SECTION_A.REGON.NAME]
      }
    ];

  }


  ngAfterViewInit() {
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionA', form);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
