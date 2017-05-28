import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationInputComponent } from './application-input.component';

describe('ApplicationInputComponent', () => {
  let component: ApplicationInputComponent;
  let fixture: ComponentFixture<ApplicationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
