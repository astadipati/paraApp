import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-aktecerai',
  templateUrl: 'aktecerai.html'
})
export class AkteceraiPage {
	aktecerai: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.aktecerai = navParams.get('aktecerai');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AkteceraiPage');
  }

}
