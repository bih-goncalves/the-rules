import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedPageComponent } from './get-involved-page.component';

describe('GetInvolvedPageComponent', () => {
  let component: GetInvolvedPageComponent;
  let fixture: ComponentFixture<GetInvolvedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInvolvedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvolvedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
