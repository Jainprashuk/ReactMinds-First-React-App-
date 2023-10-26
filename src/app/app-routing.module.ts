import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevlopmentenvironmentComponent } from './mycomponents/devlopmentenvironment/devlopmentenvironment.component';
import { ExploreappComponent } from './mycomponents/exploreapp/exploreapp.component';
import { FirstreactappComponent } from './mycomponents/firstreactapp/firstreactapp.component';
import { HelloworldComponent } from './mycomponents/helloworld/helloworld.component';
import { StartserverComponent } from './mycomponents/startserver/startserver.component';

const routes: Routes = [
  { path: 'devlopmentenvironment', component: DevlopmentenvironmentComponent, outlet: 'secondary' },
  { path: 'exploreapp', component: ExploreappComponent, outlet: 'secondary' },
  { path: 'firstreactapp', component: FirstreactappComponent, outlet: 'secondary' },
  { path: 'helloworld', component: HelloworldComponent, outlet: 'secondary' },
  { path: 'startserver', component: StartserverComponent, outlet: 'secondary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
