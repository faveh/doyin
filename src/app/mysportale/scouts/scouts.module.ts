import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoutsRoutingModule } from './scouts-routing.module';
import { ScoutsComponent } from './scouts.component';
import { PageHeaderModule, SearchBarModule } from '../../modules';

@NgModule({
  imports: [
    CommonModule,
    ScoutsRoutingModule,
    PageHeaderModule,
    SearchBarModule
  ],
  declarations: [ScoutsComponent]
})
export class ScoutsModule { }
