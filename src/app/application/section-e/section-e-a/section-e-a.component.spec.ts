import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEAComponent } from './section-e-a.component';

describe('SectionEAComponent', () => {
  let component: SectionEAComponent;
  let fixture: ComponentFixture<SectionEAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
