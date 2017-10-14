import {Component} from '@angular/core';

import {NavController, App} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private authData: AuthProvider,
              private app: App) {


  }

  logout() {
    this.authData.logoutUser();
    this.app.getRootNav().setRoot(LoginPage);
  }
}
