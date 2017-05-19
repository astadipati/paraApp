import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sidang',
  templateUrl: 'sidang.html'
})
export class SidangPage {
	sidangdetil: any;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams) {
    this.sidangdetil = navParams.get('sid');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SidangPage');
  }


}
