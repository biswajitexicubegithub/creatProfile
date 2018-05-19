import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPageModule } from '../pages/login/login.module';
import { RegistrationPageModule } from '../pages/registration/registration.module';
import { UserDetailsPageModule } from '../pages/user-details/user-details.module';

import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyD1w95jYQESCSs1HNW5dQFNCJ1dkO8c2Mw",
  authDomain: "createprofile-57893.firebaseapp.com",
  databaseURL: "https://createprofile-57893.firebaseio.com",
  projectId: "createprofile-57893",
  storageBucket: "createprofile-57893.appspot.com",
  messagingSenderId: "886845942496"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    RegistrationPageModule,
    UserDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
