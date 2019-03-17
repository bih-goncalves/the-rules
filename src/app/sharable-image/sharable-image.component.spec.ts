import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharableImageComponent } from './sharable-image.component';

describe('SharableImageComponent', () => {
  let component: SharableImageComponent;
  let fixture: ComponentFixture<SharableImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharableImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharableImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
