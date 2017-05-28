import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEInputComponent } from './section-e-input.component';

describe('SectionEInputComponent', () => {
  let component: SectionEInputComponent;
  let fixture: ComponentFixture<SectionEInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
