import {
  Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit, Type, OnChanges,
  ComponentRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormInputComponent} from '../form-input/form-input.component';
import {Field} from '../../model/field';
import {FormSelectComponent} from '../form-select/form-select.component';
import {FormButtonComponent} from '../form-button/form-button.component';
import { FormRadioComponent } from '../form-radio/form-radio.component';
import { FieldConfig } from '../../model/field-config';

const components: {[type: string]: Type<Field>} = {
  input: FormInputComponent,
  select: FormSelectComponent,
  button: FormButtonComponent,
  radio: FormRadioComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnChanges, Field {

  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit(): void {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
