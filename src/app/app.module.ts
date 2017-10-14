import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';


import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {AuthProvider} from '../providers/auth/auth';
import {HomePage} from '../pages/home/home';


import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {TabsPage} from "../pages/tabs/tabs";
import {ContactPage} from "../pages/contact/contact";
import {AboutPage} from "../pages/about/about";
import {LoginPage} from "../pages/login/login";

// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyDP--tjY0X5If4vxwvRzfx4h8DTGiWBXxY",
  authDomain: "bitirme-app.firebaseapp.com",
  databaseURL: "https://bitirme-app.firebaseio.com",
  projectId: "bitirme-app",
  storageBucket: "bitirme-app.appspot.com",
  messagingSenderId: "556286729847"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    LoginPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar,
    AuthProvider,
  ]
})
export class AppModule {
}
