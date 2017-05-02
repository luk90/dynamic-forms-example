import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FieldConfig } from '../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../shared/dynamic-form/containers/dynamic-form.component';
import { Validators } from '@angular/forms';
import { EmailValidator } from '../../shared/validators/email-validator';
import { NipValidator } from '../../shared/validators/nip-validator';
import { RegonValidator } from '../../shared/validators/regon-validator';
import { ApplicationStateService } from '../application-state.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-section-c',
  templateUrl: './section-c.component.html',
  styleUrls: ['./section-c.component.scss']
})
export class SectionCComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private formSubscription: Subscription;

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
    }
  ];

  constructor(private applicationStateService: ApplicationStateService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionC', form);
    });
  }

  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }
}
