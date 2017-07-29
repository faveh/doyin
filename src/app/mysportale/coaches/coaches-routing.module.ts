import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachesComponent } from './coaches.component';

const routes: Routes = [
  {path: '', component: CoachesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachesRoutingModule { }
