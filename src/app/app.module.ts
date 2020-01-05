import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { FabComponent } from './fab/fab.component';
import { MainWorkspaceComponent } from './main-workspace/main-workspace.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ScheduleListComponent,
    FabComponent,
    MainWorkspaceComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
