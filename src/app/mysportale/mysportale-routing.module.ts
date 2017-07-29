import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MysportaleComponent } from './mysportale.component';


const routes: Routes = [
  {
    path: '', component: MysportaleComponent,
    children:[
      { path: 'home', loadChildren: './home-component/home-component.module#HomeComponentModule' },
      { path: 'coaches', loadChildren: './coaches/coaches.module#CoachesModule'},
      { path: 'freestyle', loadChildren: './freestyle/freestyle.module#FreestyleModule' },
      { path: 'players', loadChildren: './players/players.module#PlayersModule' },
      { path: 'position', loadChildren: './position/position.module#PositionModule' },
      { path: 'scouts', loadChildren: './scouts/scouts.module#ScoutsModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MysportaleRoutingModule { }
