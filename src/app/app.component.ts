import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { MenuController } from "ionic-angular";
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { AuthService } from "../providers/auth-service";

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { InfoPage } from '../pages/info/info';
import { SidangPage } from '../pages/sidang/sidang';
import { KeuanganPage } from '../pages/keuangan/keuangan';
import { AkteceraiPage } from '../pages/aktecerai/aktecerai'

import { ApiService } from '../providers/api-service';


@Component({
  templateUrl: 'app.html',
  providers: [ApiService] 
})
export class MyApp {
  rootPage :any = SigninPage;
   // tabsPage = TabsPage;
   signinPage = SigninPage;
   signupPage = SignupPage;
   infoPage = InfoPage;
   sidangPage = SidangPage;
   keuanganPage = KeuanganPage;
   akteceraiPage = AkteceraiPage;
   isAuthenticated = false;
   @ViewChild('nav') nav: NavController; 

  constructor(platform: Platform, 
              private menuCtrl: MenuController,
              private authService: AuthService ) {

    firebase.initializeApp({
        apiKey: "AIzaSyAszfS8RKPZPa4dDcDcx6kEv_UtnyfMkO4",
        authDomain: "parapihak-c5ca2.firebaseapp.com",
        databaseURL: "https://parapihak-c5ca2.firebaseio.com",
        projectId: "parapihak-c5ca2",
        storageBucket: "parapihak-c5ca2.appspot.com",
        messagingSenderId: "661476956572"

    });
    // user state 
    firebase.auth().onAuthStateChanged(user=>{
    if(user){
      this.isAuthenticated = true;
      // this.nav.setRoot(this.tabsPage);
      this.rootPage=TabsPage;
    }else{
      this.isAuthenticated = false;
      // this.nav.setRoot(this.signinPage);
      this.rootPage = SigninPage;
    }
    });
    // end user state

    platform.ready().then(() => {

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
  }

}
