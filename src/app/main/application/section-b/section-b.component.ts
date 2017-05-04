import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NipValidator } from '../../../shared/validators/nip-validator';
import { Validators } from '@angular/forms';
import { RegonValidator } from '../../../shared/validators/regon-validator';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { GlobalVariableService } from '../global-variable.service';
import { Subscription } from 'rxjs/Subscription';
import { ApplicationStateService } from '../application-state.service';
import { ApplicationUtilsService } from '../application-utils.service';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.scss'],
})
export class SectionBComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;

  private dateSubscription: Subscription;
  private numberSubscription: Subscription;
  private formSubscription: Subscription;
  savedForm: Object = {};
  config: FieldConfig[];

  constructor(private globalVariableService: GlobalVariableService,
              private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService) {
  }

  ngOnInit() {
    const appMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(appMap, 'sectionB');
    console.log(this.savedForm, ' - loaded data');
    this.config = [
      {
        type: 'input',
        label: 'Data',
        name: 'date',
        inputType: 'date',
        placeholder: 'Data',
        validation: [Validators.required],
        value: this.savedForm['date']
      },
      {
        type: 'input',
        label: 'Number',
        name: 'numberField',
        inputType: 'number',
        placeholder: 'Number',
        validation: [Validators.required],
        value: this.savedForm['numberField']
      },
      {
        type: 'input',
        label: 'Wpisz NIP',
        name: 'nip',
        placeholder: 'NIP',
        validation: [Validators.required, NipValidator.isValidNipPattern, NipValidator.isValidChecksum],
        value: this.savedForm['nip'],
      },
      {
        type: 'input',
        label: 'Wpisz REGON',
        name: 'regon',
        placeholder: 'REGON',
        validation: [Validators.required, RegonValidator.isValidRegonPattern, RegonValidator.isValidChecksum]
      }
    ];

  }

  ngAfterViewInit(): void {
    this.dateSubscription = this.dynamicForm.form.get('date')
      .valueChanges
      .subscribe((value) => {
        this.globalVariableService.addVariable('date', value);
      });
    this.numberSubscription = this.dynamicForm.form.get('numberField')
      .valueChanges
      .subscribe((value) => {
        this.globalVariableService.addVariable('number', value);
      });
    this.formSubscription = this.dynamicForm.changes.subscribe((form) => {
      this.applicationStateService.addFormGroup('sectionB', form);
    });
  }

  ngOnDestroy(): void {
    this.dateSubscription.unsubscribe();
    this.numberSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}
