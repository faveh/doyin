import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { PageHeaderModule } from '../../modules';

@NgModule({
  imports: [
    CommonModule,
    PositionRoutingModule,
    PageHeaderModule
  ],
  declarations: [PositionComponent]
})
export class PositionModule { }
