import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search-bar.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
