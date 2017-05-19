import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //rxjs yang transform ke json format

@Injectable()
export class ApiService {
  baseUrl: String;

  constructor(public http: Http) {
    // this.baseUrl = 'http://astadipati.hopto.org/rest/public/all/';
    this.baseUrl ='http://localhost/rest/public/all/';
  }
  // =========================start basic =============================
  //method pertama get profile
  getProfile(username){
    return this.http.get(this.baseUrl + username)
      .map(res=> res.json());
  }
  // ==========================end basic ==============================
  // Info umum
   getInfo(username){
    return this.http.get(this.baseUrl + username)
      .map(res=> res.json());
  }
  // getKeu 
  getKeu(username){
    return this.http.get(this.baseUrl + username + '/keuangan')
    .map(res=> res.json());
  }
  //  ac
  getAktecerai(username){
    return this.http.get(this.baseUrl + username + '/ac')
    .map(res => res.json()); 
  }
  // end  ac 
  //  sidang
  getSidang(username){
    return this.http.get(this.baseUrl + username + '/sidang')
    .map(res => res.json());
  }
  // end sidang


}
