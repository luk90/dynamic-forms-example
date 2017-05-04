import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { EmailValidator } from '../../../shared/validators/email-validator';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.scss']
})
export class SectionAComponent implements OnInit, AfterViewInit {

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Nazwa',
      name: 'name',
      placeholder: 'Nazwa firmy',
      validation: [Validators.required, Validators.minLength(5)]
    },
    {
      type: 'input',
      label: 'E-mail',
      name: 'email',
      inputType: 'text',
      placeholder: 'E-mail',
      validation: [Validators.required, EmailValidator.isValidMailFormat]
    },
    {
      type: 'input',
      label: 'Wpisz NIP',
      name: 'nip',
      placeholder: 'NIP',
      validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum]
    },
    {
      type: 'input',
      label: 'Wpisz REGON',
      name: 'regon',
      placeholder: 'REGON',
      validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


  ngAfterViewInit() {
  }

}
