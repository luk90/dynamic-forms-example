import {
  AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DynamicFormComponent } from '../../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../../shared/dynamic-form/model/field-config';
import { SECTION_E } from '../../application/section-e/section-e.constants';
import { TYPE } from '../../../shared/dynamic-form/constants/type.constants';
import { Subscription } from 'rxjs/Subscription';
import { getComponents } from './dynamic-components.utils';

@Component({
  selector: 'app-section-e-input',
  templateUrl: './section-e-input.component.html',
  styleUrls: ['./section-e-input.component.scss']
})
export class SectionEInputComponent implements OnInit, AfterViewInit {
  private _number: number;

  @Input() appForm: FormGroup;

  @Input()
  set number(value) {
    console.log(value);
    this._number = value;
    if (this.componentReference) {
      this.passDataToChild(value);
    }
  };

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  private optionsArray: Array<{ select: string, radio: string, component: any }> = [];
  private componentReference: ComponentRef<any>;
  config: FieldConfig[];

  sectionESubscription: Subscription;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.optionsArray = getComponents();
    this.config = [
      {
        type: TYPE.SELECT,
        name: SECTION_E.SELECT.NAME,
        options: SECTION_E.SELECT.OPTIONS,
        validation: [Validators.required]
        // value: this.savedForm[SECTION_E.SELECT.NAME],
      },
      {
        type: TYPE.RADIO,
        label: SECTION_E.RADIO.LABEL,
        name: SECTION_E.RADIO.NAME,
        options: SECTION_E.RADIO.OPTIONS,
        validation: [Validators.required]
        // value: this.savedForm[SECTION_E.RADIO.NAME],
      }
    ];
  }

  ngAfterViewInit(): void {
    this.sectionESubscription = this.dynamicForm.changes
      .map(() => {
        return {select: this.select, radio: this.radio};
      })
      .subscribe((option) => {
        this.dynamicComponentHandler(option);
      });
    this.appForm.addControl('sectionE', this.dynamicForm.form);
  }

  get select() {
    return this.dynamicForm.form.get(SECTION_E.SELECT.NAME).value;
  }

  get radio() {
    return this.dynamicForm.form.get(SECTION_E.RADIO.NAME).value;
  }

  get number() {
    return this._number;
  }

  public findComponent(array: Array<{ select: string, radio: string, component: any }>, option): any {
    return array.find((value, index, obj) => value.select === option.select && value.radio === option.radio);
  }

  private dynamicComponentHandler(option) {
    const object = this.findComponent(this.optionsArray, option);
    if (object) {
      this.loadComponent(object.component);
    } else {
      this.clearComponent();
    }
  }

  loadComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<any>(component);
    this.clearComponent();
    this.componentReference = this.viewContainerRef.createComponent(componentFactory);
    this.componentReference.instance.appForm = this.appForm;
    this.componentReference.instance.number = this.number;
  }

  clearComponent() {
    this.viewContainerRef.clear();
  }

  passDataToChild(value) {
    this.componentReference.instance.number = value;
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
