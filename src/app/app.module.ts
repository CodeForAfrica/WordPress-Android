import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { StoriesPage } from '../pages/stories/stories';
import { MorePage } from '../pages/more/more';
import { AssignmentsPage } from '../pages/assignments/assignments';
import { AssignmentDetailPage } from '../pages/assignment-detail/assignment-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { SummaryPipe } from '../utils/summary.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from "../pages/about-page/about-page";
import { LoginPage } from "../pages/login-page/login-page";
import { EditUserDetails } from "../pages/edit-user-details/edit-user-details";
import { ViewStoryPage } from "../pages/view-story-page/view-story-page";
import {Constant} from "../utils/constants";

@NgModule({
  declarations: [
    MyApp,
    StoriesPage,
    MorePage,
    AssignmentsPage,
    AssignmentDetailPage,
    TabsPage,
    SummaryPipe,
    AboutPage,
    LoginPage,
    EditUserDetails,
    ViewStoryPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StoriesPage,
    MorePage,
    AssignmentsPage,
    AssignmentDetailPage,
    TabsPage,
    AboutPage,
    LoginPage,
    EditUserDetails,
    ViewStoryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Constant,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}