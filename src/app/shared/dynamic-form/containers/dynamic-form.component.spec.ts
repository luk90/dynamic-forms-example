import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DynamicFormComponent} from './dynamic-form.component';
import {DynamicFieldDirective} from '../components/dynamic-field/dynamic-field.directive';
import {ReactiveFormsModule} from '@angular/forms';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DynamicFormComponent, DynamicFieldDirective],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
