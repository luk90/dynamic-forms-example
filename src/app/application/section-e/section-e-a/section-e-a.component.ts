import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { SECTION_E } from '../section-e.constants';
import { TYPE } from '../../../shared/dynamic-form/constans/types.constants';

@Component({
  selector: 'app-section-e-a',
  templateUrl: './section-e-a.component.html',
  styleUrls: ['./section-e-a.component.scss']
})
export class SectionEAComponent implements OnInit {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: TYPE.INPUT,
      name: SECTION_E.FIELD_A.NAME,
      placeholder: SECTION_E.FIELD_A.PLACEHOLDER
    },
    {
      type: TYPE.INPUT,
      name: SECTION_E.FIELD_B.NAME,
      placeholder: SECTION_E.FIELD_B.PLACEHOLDER,
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

  constructor() {
  }

  ngOnInit() {
  }

}
