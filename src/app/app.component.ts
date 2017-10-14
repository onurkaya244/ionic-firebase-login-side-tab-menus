import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';

import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HomePage} from '../pages/home/home';
import {AngularFireAuth} from 'angularfire2/auth';
import {TabsPage} from "../pages/tabs/tabs";
import {ResetPasswordPage} from "../pages/reset-password/reset-password";
import {LoginPage} from "../pages/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;


  pages: Array<{ title: string, component: any }>;


  constructor(platform: Platform, afAuth: AngularFireAuth, private splashScreen: SplashScreen,
              private statusBar: StatusBar) {
    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = TabsPage;
        authObserver.unsubscribe();
      } else {
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Tabs Page', component: TabsPage},
      {title: 'Other Page', component: ResetPasswordPage}
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
