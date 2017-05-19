import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

	info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.info = navParams.get('info');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
