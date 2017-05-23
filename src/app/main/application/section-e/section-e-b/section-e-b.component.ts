import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../../shared/dynamic-form/model/field-config';
import { SECTION_E } from '../section-e.constants';
import { TYPE } from '../../../../shared/dynamic-form/constants/type.constants';
import { ApplicationUtilsService } from '../../application-utils.service';
import { ApplicationStateService } from '../../application-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-section-e-b',
  templateUrl: './section-e-b.component.html',
  styleUrls: ['./section-e-b.component.scss']
})
export class SectionEBComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  config: FieldConfig[];
  private savedForm: Object = {};
  private formSubscription: Subscription;


  constructor(private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionEA');
    this.config = [
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_A.NAME,
        placeholder: SECTION_E.FIELD_A.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_A.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_B.NAME,
        placeholder: SECTION_E.FIELD_B.PLACEHOLDER,
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
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_F.NAME,
        placeholder: SECTION_E.FIELD_F.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_F.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_G.NAME,
        placeholder: SECTION_E.FIELD_G.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_G.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_H.NAME,
        placeholder: SECTION_E.FIELD_H.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_H.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_I.NAME,
        placeholder: SECTION_E.FIELD_I.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_I.NAME]
      },
      {
        type: TYPE.INPUT,
        name: SECTION_E.FIELD_J.NAME,
        placeholder: SECTION_E.FIELD_J.PLACEHOLDER,
        value: this.savedForm[SECTION_E.FIELD_J.NAME]
      }
    ];
  }

  ngAfterViewInit(): void {
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionEA', form);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
    if (this.applicationStateService.applicationStateType !== 'CLOSE') {
      this.applicationStateService.removeFormGroup('sectionEA');
    }
  }

}
