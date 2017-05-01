import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NipValidator } from '../../shared/validators/nip-validator';
import { Validators } from '@angular/forms';
import { RegonValidator } from '../../shared/validators/regon-validator';
import { EmailValidator } from '../../shared/validators/email-validator';
import { FieldConfig } from '../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../shared/dynamic-form/containers/dynamic-form.component';
import { GlobalVariableService } from '../global-variable.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.scss']
})
export class SectionBComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private dateSubscription: Subscription;
  private numberSubscription: Subscription;

  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Data',
      name: 'date',
      inputType: 'date',
      placeholder: 'Data',
      validation: [Validators.required]
    },
    {
      type: 'input',
      label: 'Number',
      name: 'numberField',
      inputType: 'number',
      placeholder: 'Number',
      validation: [Validators.required]
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

  constructor(private globalVariableService: GlobalVariableService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.dateSubscription = this.dynamicForm.form.get('date')
      .valueChanges
      .subscribe((value) => {
        console.log(value);
        this.globalVariableService.addVariable('date', value);
      });
    this.numberSubscription = this.dynamicForm.form.get('numberField')
      .valueChanges
      .subscribe((value) => {
        console.log(value);
        this.globalVariableService.addVariable('number', value);
      });
  }

  ngOnDestroy(): void {
    this.dateSubscription.unsubscribe();
    this.numberSubscription.unsubscribe();
  }
}
