import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEAInputComponent } from './section-e-a-input.component';

describe('SectionEAInputComponent', () => {
  let component: SectionEAInputComponent;
  let fixture: ComponentFixture<SectionEAInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEAInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEAInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
