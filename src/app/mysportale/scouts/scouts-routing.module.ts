import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoutsComponent } from './scouts.component';

const routes: Routes = [
  {path: '', component: ScoutsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoutsRoutingModule { }
