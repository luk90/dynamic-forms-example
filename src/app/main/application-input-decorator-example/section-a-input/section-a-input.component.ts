import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { SECTION_A } from '../../application/section-a/section-a.constants';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { INPUT_TYPE } from '../../../shared/dynamic-form/constants/input-type.constants';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { SECTION_B } from '../../application/section-b/section-b.constants';

@Component({
  selector: 'app-section-a-input',
  templateUrl: './section-a-input.component.html',
  styleUrls: ['./section-a-input.component.scss']
})
export class SectionAInputComponent implements OnInit, AfterViewInit {
  @Input() appForm: FormGroup;
  config: FieldConfig[];

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  constructor() {
  }

  ngOnInit() {
    // const sectionData = this.appForm.get('sectionA');
    // console.log(sectionData);
    this.config = [
      {
        type: TYPE.INPUT,
        label: SECTION_A.NAME.LABEL,
        name: SECTION_A.NAME.NAME,
        placeholder: SECTION_A.NAME.PLACEHOLDER,
        validation: [Validators.required, Validators.minLength(5)],
        // value: this.savedForm[SECTION_A.NAME.NAME]
        // value: sectionData.get('name').value
      },
      {
        type: TYPE.INPUT,
        label: SECTION_B.NUMBER_FIELD.LABEL,
        name: SECTION_B.NUMBER_FIELD.NAME,
        placeholder: SECTION_B.NUMBER_FIELD.PLACEHOLDER,
        validation: [Validators.required],
        // value: this.savedForm[SECTION_A.NAME.NAME]
        // value: name
      },
      {
        type: TYPE.INPUT,
        label: SECTION_A.EMAIL.LABEL,
        name: SECTION_A.EMAIL.NAME,
        inputType: INPUT_TYPE.TEXT,
        placeholder: SECTION_A.EMAIL.PLACEHOLDER,
        validation: [Validators.required, EmailValidator.isValidMailFormat],
        // value: this.savedForm[SECTION_A.EMAIL.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_A.NIP.LABEL,
        name: SECTION_A.NIP.NAME,
        placeholder: SECTION_A.NIP.PLACEHOLDER,
        validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum],
        // value: this.savedForm[SECTION_A.NIP.NAME]
      },
      {
        type: TYPE.INPUT,
        label: SECTION_A.REGON.LABEL,
        name: SECTION_A.REGON.NAME,
        placeholder: SECTION_A.REGON.PLACEHOLDER,
        validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum],
        // value: this.savedForm[SECTION_A.REGON.NAME]
      }
    ];
  }


  ngAfterViewInit(): void {
    this.appForm.addControl('sectionA', this.dynamicForm.form);
  }
}
