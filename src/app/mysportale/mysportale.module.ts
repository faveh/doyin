import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysportaleRoutingModule } from './mysportale-routing.module';

import { MysportaleComponent } from './mysportale.component';

import { HeaderComponent, FooterComponent } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    MysportaleRoutingModule
  ],
  declarations: [
    MysportaleComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class MysportaleModule { }
