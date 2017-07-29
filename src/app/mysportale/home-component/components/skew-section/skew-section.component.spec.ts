import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewSectionComponent } from './skew-section.component';

describe('SkewSectionComponent', () => {
  let component: SkewSectionComponent;
  let fixture: ComponentFixture<SkewSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkewSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
