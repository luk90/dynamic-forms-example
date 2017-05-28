import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAInputComponent } from './section-a-input.component';

describe('SectionAInputComponent', () => {
  let component: SectionAInputComponent;
  let fixture: ComponentFixture<SectionAInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
