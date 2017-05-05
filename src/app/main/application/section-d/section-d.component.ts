import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { Validators } from '@angular/forms';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { SECTION_D } from './section-d.constants';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { ApplicationStateService } from '../application-state.service';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationUtilsService } from '../application-utils.service';
import { INPUT_TYPE } from '../../../shared/dynamic-form/constants/input-type.constants';

@Component({
  selector: 'app-section-d',
  templateUrl: './section-d.component.html',
  styleUrls: ['./section-d.component.scss']
})
export class SectionDComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private formSubscription: Subscription;
  config: FieldConfig[];
  private savedForm: Object = {};

  constructor(private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionD');
    this.config = [
      {
        type: TYPE.INPUT,
        label: SECTION_D.NAME.LABEL,
        name: SECTION_D.NAME.NAME,
        placeholder: SECTION_D.NAME.PLACEHOLDER,
        validation: [Validators.required, Validators.minLength(2)],
        value: this.savedForm[SECTION_D.NAME.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_D.EMAIL.LABEL,
        name: SECTION_D.EMAIL.NAME,
        inputType: INPUT_TYPE.TEXT,
        placeholder: SECTION_D.EMAIL.PLACEHOLDER,
        validation: [Validators.required, EmailValidator.isValidMailFormat],
        value: this.savedForm[SECTION_D.EMAIL.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_D.NIP.LABEL,
        name: SECTION_D.NIP.NAME,
        placeholder: SECTION_D.NIP.PLACEHOLDER,
        validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum],
        value: this.savedForm[SECTION_D.NIP.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_D.REGON.LABEL,
        name: SECTION_D.REGON.NAME,
        placeholder: SECTION_D.REGON.PLACEHOLDER,
        validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum],
        value: this.savedForm[SECTION_D.REGON.NAME]
      }
    ];
  }

  ngAfterViewInit(): void {
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionD', form);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

}
