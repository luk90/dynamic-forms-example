import { AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { Subscription } from 'rxjs';
import { ApplicationStateService } from '../application-state.service';
import { ApplicationUtilsService } from '../application-utils.service';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { SECTION_E } from './section-e.constants';
import { DynamicComponentsService } from './dynamic-components.service';

@Component({
  selector: 'app-section-e',
  templateUrl: './section-e.component.html',
  styleUrls: ['./section-e.component.scss']
})
export class SectionEComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  sectionESubscription: Subscription;
  optionsArray: Array<{ select: string, radio: string, component: any }> = [];
  config: FieldConfig[];
  private savedForm;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private applicationStateService: ApplicationStateService,
              private applicationUtilsService: ApplicationUtilsService,
              private dynamicComponentsService: DynamicComponentsService) {
  }

  ngOnInit() {
    const applicationMap = this.applicationStateService.applicationMap;
    this.savedForm = this.applicationUtilsService.checkIfObjectExistAndGet(applicationMap, 'sectionE');
    this.optionsArray = this.dynamicComponentsService.getComponents();
    this.config = [
      {
        type: TYPE.SELECT,
        name: SECTION_E.SELECT.NAME,
        options: SECTION_E.SELECT.OPTIONS,
        value: this.savedForm[SECTION_E.SELECT.NAME],
      },
      {
        type: TYPE.RADIO,
        label: SECTION_E.RADIO.LABEL,
        name: SECTION_E.RADIO.NAME,
        options: SECTION_E.RADIO.OPTIONS,
        value: this.savedForm[SECTION_E.RADIO.NAME],
      }
    ];
    if (this.applicationStateService.applicationStateValue === 'EDIT') {
      const radioAndSelectStateAfterEdit = {select: this.savedForm[SECTION_E.SELECT.NAME], radio: this.savedForm[SECTION_E.RADIO.NAME]};
      this.dynamicComponentHandler(radioAndSelectStateAfterEdit);
    }
  }

  ngAfterViewInit(): void {
    this.sectionESubscription = this.dynamicForm.changes
      .do(form => this.applicationStateService.addFormGroup('sectionE', form))
      .map(() => {
        return {select: this.select, radio: this.radio};
      })
      .subscribe((option) => {
        this.dynamicComponentHandler(option);
      });
  }

  private dynamicComponentHandler(option) {
    const object = this.findComponent(this.optionsArray, option);
    if (object) {
      this.loadComponent(object.component);
    } else {
      this.clearComponent();
    }
  }

  ngOnDestroy(): void {
    this.sectionESubscription.unsubscribe();
  }

  public findComponent(array: Array<{ select: string, radio: string, component: any }>, option): any {
    return array.find((value, index, obj) => value.select === option.select && value.radio === option.radio);
  }

  get select() {
    return this.dynamicForm.form.get(SECTION_E.SELECT.NAME).value;
  }

  get radio() {
    return this.dynamicForm.form.get(SECTION_E.RADIO.NAME).value;
  }

  loadComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<any>(component);
    this.clearComponent();
    this.viewContainerRef.createComponent(componentFactory);
  }

  clearComponent() {
    this.viewContainerRef.clear();
  }

  changeOptions() {
    this.config[0].options = [
      {key: 'one', value: 'ONE'},
      {key: 'two', value: 'TWO'},
      {key: 'three', value: 'THREE'},
      {key: 'four', value: 'FOUR'},
      {key: 'five', value: 'FIVE'}];
    this.config[1].options = [
      {key: 'Document', value: 'DOCUMENT'},
      {key: 'Statement', value: 'STATEMENT'},
      {key: 'three', value: 'THREE'}];
  }

}
