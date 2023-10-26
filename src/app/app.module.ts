import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { DevlopmentenvironmentComponent } from './mycomponents/devlopmentenvironment/devlopmentenvironment.component';
import { FirstreactappComponent } from './mycomponents/firstreactapp/firstreactapp.component';
import { StartserverComponent } from './mycomponents/startserver/startserver.component';
import { ExploreappComponent } from './mycomponents/exploreapp/exploreapp.component';
import { HelloworldComponent } from './mycomponents/helloworld/helloworld.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevlopmentenvironmentComponent,
    FirstreactappComponent,
    StartserverComponent,
    ExploreappComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
