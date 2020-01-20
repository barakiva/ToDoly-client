import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScheduleListComponent } from './main-workspace-dir/schedule-list/schedule-list.component';
import { FabComponent } from './fab/fab.component';
import { MainWorkspaceComponent } from './main-workspace-dir/main-workspace/main-workspace.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskDetailsComponent } from './main-workspace-dir/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ScheduleListComponent,
    FabComponent,
    MainWorkspaceComponent,
    SideBarComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
