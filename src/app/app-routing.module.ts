import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevlopmentenvironmentComponent } from './mycomponents/devlopmentenvironment/devlopmentenvironment.component';
import { ExploreappComponent } from './mycomponents/exploreapp/exploreapp.component';
import { FirstreactappComponent } from './mycomponents/firstreactapp/firstreactapp.component';
import { HelloworldComponent } from './mycomponents/helloworld/helloworld.component';
import { StartserverComponent } from './mycomponents/startserver/startserver.component';
import { MycompilerComponent } from './mycomponents/mycompiler/mycompiler.component';
import { YoutubeComponent } from './mycomponents/youtube/youtube.component';
import { QuizComponent } from './mycomponents/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: DevlopmentenvironmentComponent, outlet: 'secondary' },
  { path: 'devlopmentenvironment', component: DevlopmentenvironmentComponent, outlet: 'secondary' },
  { path: 'exploreapp', component: ExploreappComponent, outlet: 'secondary' },
  { path: 'firstreactapp', component: FirstreactappComponent, outlet: 'secondary' },
  { path: 'helloworld', component: HelloworldComponent, outlet: 'secondary' },
  { path: 'startserver', component: StartserverComponent, outlet: 'secondary' },
  { path: 'quiz', component: QuizComponent, outlet: 'secondary' },
  { path: 'mycompiler', component: MycompilerComponent, outlet: 'secondary' },
  { path: 'youtube', component: YoutubeComponent, outlet: 'secondary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
