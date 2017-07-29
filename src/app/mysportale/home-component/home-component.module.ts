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

    ]
})
export class HomeComponentModule { }
