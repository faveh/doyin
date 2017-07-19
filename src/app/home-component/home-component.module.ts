import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponentComponent } from './home-component.component';
import {HomeComponentRoutingModule} from './home-component-routing.module';

import {
  SliderFormComponent,
  VideosSectionComponent,
  SkewSectionComponent,
  CreateSectionComponent
} from './components';

import { HeaderComponent, FooterComponent } from '../shared';

// import { HomeComponentRoutingModule } from './home-component-routing.module';
// import { SliderFormComponent } from './slider-form/slider-form.component';
// import { VideosSectionComponent } from './videos-section/videos-section.component';
// import { SkewSectionComponent } from './skew-section/skew-section.component';
// import { CreateSectionComponent } from './create-section/create-section.component';

@NgModule({
  imports: [
    CommonModule,
    HomeComponentRoutingModule
  ],
  declarations: [
    HomeComponentComponent,
    SliderFormComponent,
    VideosSectionComponent,
    SkewSectionComponent,
    CreateSectionComponent,
    HeaderComponent,
    FooterComponent
    ]
})
export class HomeComponentModule { }
