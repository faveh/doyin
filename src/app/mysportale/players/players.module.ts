import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { PageHeaderModule, SearchBarModule} from '../../modules';

@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule,
    PageHeaderModule,
    SearchBarModule
  ],
  declarations: [PlayersComponent]
})
export class PlayersModule { }
