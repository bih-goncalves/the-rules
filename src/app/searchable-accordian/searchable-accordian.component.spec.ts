import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableAccordianComponent } from './searchable-accordian.component';

describe('SearchableAccordianComponent', () => {
  let component: SearchableAccordianComponent;
  let fixture: ComponentFixture<SearchableAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
