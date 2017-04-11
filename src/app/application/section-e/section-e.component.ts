import { Component, OnInit, ViewChild } from '@angular/core';
import { RegonValidator } from '../../shared/validators/regon-validator';
import { Validators } from '@angular/forms';
import { NipValidator } from '../../shared/validators/nip-validator';
import { EmailValidator } from '../../shared/validators/email-validator';
import { DynamicFormComponent } from '../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../shared/dynamic-form/model/field-config';

@Component({
  selector: 'app-section-e',
  templateUrl: './section-e.component.html',
  styleUrls: ['./section-e.component.scss']
})
export class SectionEComponent implements OnInit {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Nazwa',
      name: 'name',
      placeholder: 'Nazwa firmy',
      validation: [Validators.required, Validators.minLength(2)]
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
    },
    {
      label: 'Zatwierdź',
      name: 'submit',
      type: 'button',
      disabled: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
