import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreestyleComponent } from './freestyle.component';

describe('FreestyleComponent', () => {
  let component: FreestyleComponent;
  let fixture: ComponentFixture<FreestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
