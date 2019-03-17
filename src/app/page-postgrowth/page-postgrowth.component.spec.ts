import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostgrowthComponent } from './page-postgrowth.component';

describe('PagePostgrowthComponent', () => {
  let component: PagePostgrowthComponent;
  let fixture: ComponentFixture<PagePostgrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePostgrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePostgrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
