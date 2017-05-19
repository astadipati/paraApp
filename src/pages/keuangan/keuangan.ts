import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-keuangan',
  templateUrl: 'keuangan.html'
})
export class KeuanganPage {
	keuangandetil: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.keuangandetil = navParams.get('keu');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad KeuanganPage');
  }

}
