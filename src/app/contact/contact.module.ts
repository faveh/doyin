import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { PageHeaderModule} from '../modules';
// import { HeaderComponent } from '../shared';

import { ContactComponent } from './contact.component';
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    PageHeaderModule,
  ],
  declarations: [ ContactComponent ]
})
export class ContactModule { }
