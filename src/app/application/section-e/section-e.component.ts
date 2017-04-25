import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../shared/dynamic-form/containers/dynamic-form.component';
import { FieldConfig } from '../../shared/dynamic-form/model/field-config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-e',
  templateUrl: './section-e.component.html',
  styleUrls: ['./section-e.component.scss']
})
export class SectionEComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  checker: { select: string, radio: string };
  checkerSub: Subscription;
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

  constructor() {

  }

  ngOnInit() {
    this.checker = {select: null, radio: null};
  }

  ngAfterViewInit(): void {
    this.checkerSub = this.dynamicForm.form.valueChanges
      .map(() => this.checker = {select: this.select, radio: this.radio})
      .subscribe();
  }

  ngOnDestroy(): void {
    this.checkerSub.unsubscribe();
  }

  get select() {
    return this.dynamicForm.form.get('select').value;
  }

  get radio() {
    return this.dynamicForm.form.get('radio').value;
  }

}
