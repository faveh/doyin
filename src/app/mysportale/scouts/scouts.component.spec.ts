import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutsComponent } from './scouts.component';

describe('ScoutsComponent', () => {
  let component: ScoutsComponent;
  let fixture: ComponentFixture<ScoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
