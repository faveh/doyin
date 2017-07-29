import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreestyleRoutingModule } from './freestyle-routing.module';
import { FreestyleComponent} from './freestyle.component';
import { PageHeaderModule } from '../../modules';

@NgModule({
  imports: [
    CommonModule,
    FreestyleRoutingModule,
    PageHeaderModule
  ],
  declarations: [FreestyleComponent]
})
export class FreestyleModule { }
