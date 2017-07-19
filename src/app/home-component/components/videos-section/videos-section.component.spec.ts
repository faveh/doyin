import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSectionComponent } from './videos-section.component';

describe('VideosSectionComponent', () => {
  let component: VideosSectionComponent;
  let fixture: ComponentFixture<VideosSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
