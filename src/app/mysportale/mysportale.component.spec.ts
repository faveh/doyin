import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysportaleComponent } from './mysportale.component';

describe('MysportaleComponent', () => {
  let component: MysportaleComponent;
  let fixture: ComponentFixture<MysportaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysportaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysportaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
