import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonComponent } from './form-button.component';
import {SharedModule} from '../../../shared.module';

describe('FormButtonComponent', () => {
  let component: FormButtonComponent;
  let fixture: ComponentFixture<FormButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
