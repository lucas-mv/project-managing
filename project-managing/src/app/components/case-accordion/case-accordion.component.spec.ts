import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAccordionComponent } from './case-accordion.component';

describe('CaseAccordionComponent', () => {
  let component: CaseAccordionComponent;
  let fixture: ComponentFixture<CaseAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
