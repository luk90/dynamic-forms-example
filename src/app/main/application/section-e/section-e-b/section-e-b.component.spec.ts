import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEBComponent } from './section-e-b.component';

describe('SectionEBComponent', () => {
  let component: SectionEBComponent;
  let fixture: ComponentFixture<SectionEBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
