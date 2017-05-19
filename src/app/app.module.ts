import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilesPage } from '../pages/profiles/profiles'; //dari about
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { InfoPage } from '../pages/info/info';
import { AkteceraiPage } from '../pages/aktecerai/aktecerai';
import { KeuanganPage } from '../pages/keuangan/keuangan';
import { SidangPage } from '../pages/sidang/sidang';
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    MyApp,
    ProfilesPage, 
    ContactPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    InfoPage,
    AkteceraiPage,
    KeuanganPage,
    SidangPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilesPage, //dari about
    ContactPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    InfoPage,
    AkteceraiPage,
    KeuanganPage,
    SidangPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService]
})
export class AppModule {}
