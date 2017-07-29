import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachesRoutingModule } from './coaches-routing.module';
import { CoachesComponent } from './coaches.component';
import { PageHeaderModule, SearchBarModule } from '../../modules';
@NgModule({
  imports: [
    CommonModule,
    CoachesRoutingModule,
    PageHeaderModule,
    SearchBarModule
  ],
  declarations: [CoachesComponent]
})
export class CoachesModule { }
