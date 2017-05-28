import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEBInputComponent } from './section-e-b-input.component';

describe('SectionEBInputComponent', () => {
  let component: SectionEBInputComponent;
  let fixture: ComponentFixture<SectionEBInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEBInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEBInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
