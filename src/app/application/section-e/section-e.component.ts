import { AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicFormComponent } from '../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../shared/dynamic-form/model/field-config';
import { Subscription } from 'rxjs';
import { SectionEAComponent } from './section-e-a/section-e-a.component';
import { SectionEBComponent } from './section-e-b/section-e-b.component';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-section-e',
  templateUrl: './section-e.component.html',
  styleUrls: ['./section-e.component.scss']
})
export class SectionEComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  checker: { select: string, radio: string };
  checkerSub: Subscription;
  optionsArray: Array<{ select: string, radio: string, component: any }>;
  config: FieldConfig[] = [
    {
      type: 'select',
      name: 'select',
      options: [
        {key: 'one', value: 'ONE'},
        {key: 'two', value: 'TWO'},
        {key: 'three', value: 'THREE'},
        {key: 'four', value: 'FOUR'}
      ]
    },
    {
      type: 'radio',
      label: 'radio button',
      name: 'radio',
      options: [
        {key: 'Document', value: 'DOCUMENT'},
        {key: 'Statement', value: 'STATEMENT'}
      ]
    }
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private applicationStateService: ApplicationStateService) {
    this.optionsArray = [];
  }

  ngOnInit() {
    this.optionsArray.push(
      {select: 'ONE', radio: 'DOCUMENT', component: SectionEAComponent},
      {select: 'ONE', radio: 'STATEMENT', component: SectionEBComponent},
    );
  }

  ngAfterViewInit(): void {
    this.checkerSub = this.dynamicForm.changes
      .do(form => this.applicationStateService.addFormGroup('sectionE', form))
      .map(() => {
        return {select: this.select, radio: this.radio};
      })
      .subscribe((option) => {
        const object = this.findComponent(this.optionsArray, option);
        if (object) {
          this.loadComponent(object.component);
        } else {
          this.clearComponent();
        }
      });
  }

  ngOnDestroy(): void {
    this.checkerSub.unsubscribe();
  }

  public findComponent(array: Array<{ select: string, radio: string, component: any }>, option): any {
    return array.find((value, index, obj) => value.select === option.select && value.radio === option.radio);
  }

  get select() {
    return this.dynamicForm.form.get('select').value;
  }

  get radio() {
    return this.dynamicForm.form.get('radio').value;
  }

  loadComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<any>(component);
    this.clearComponent();
    this.viewContainerRef.createComponent(componentFactory);
  }

  clearComponent() {
    this.viewContainerRef.clear();
  }

}
