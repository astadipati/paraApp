import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../providers/api-service';
import { InfoPage } from '../info/info';
import { SidangPage } from '../sidang/sidang';
import { KeuanganPage } from '../keuangan/keuangan';
import { AkteceraiPage } from '../aktecerai/aktecerai';

@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {

  profiles: any;
  info: any;
  aktecerai: any;
  keuangan: any;
  sidang: any;
  perkaraID="";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private apiService: ApiService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }
  //===================================== basic  ===============================
  // mengakses dalam form
  onSubmit(){
    this.getProfile(this.perkaraID); 
    this.perkaraID = ''; 
  }

  getProfile(username){
    this.apiService.getProfile(username).subscribe(response =>{
      this.profiles = response; 
      console.log(this.profiles);
    })
  }
  reset(){
    this.profiles='';
    this.perkaraID='';
  }
  //===================================== end basic ============================
  // info data umum
  showInfo(perkaraID){
    this.getInfo(perkaraID);
  }

  getInfo(username){
    this.apiService.getInfo(username).subscribe(response =>{
      this.info = response;
      console.log(this.info);
    })
  }
  
  infoDetil(event, info){
    this.navCtrl.push(InfoPage,{
      info:info
    });
  }
  // end info data umum
  // tampil sidang
  showSidang(perkaraID){
    this.getSidang(perkaraID);
  }

  getSidang(username){
    this.apiService.getSidang(username).subscribe(Response => {
      this.sidang = Response;
      // console.log(this.sidang);
    })
  }
 
  sidTapped(event, sid){
    this.navCtrl.push(SidangPage, {
      sid: sid 
    });
  }
  // end sidang detil
  // biaya perkara
  showKeu(perkaraID){
    this.getKeu(perkaraID);
  }

  getKeu(username){
    this.apiService.getKeu(username).subscribe(Response => {
      this.keuangan = Response;
      // console.log(this.sidang);
    })
  }
 
  keuTapped(event, keu){
    this.navCtrl.push(KeuanganPage, {
      keu: keu 
    });
  }
  // end keuangan perkara 
    // tampil ac
  showAc(perkaraID){
    this.getAC(perkaraID);
  }

  getAC(username){
    this.apiService.getAktecerai(username).subscribe(response =>{
      this.aktecerai = response;
      console.log(this.aktecerai);
    })
  }
  
  acDetil(event, aktecerai){
    this.navCtrl.push(AkteceraiPage,{
      aktecerai:aktecerai
    });
  }
  // end ac

}
