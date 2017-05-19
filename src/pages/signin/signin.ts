import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController } from "ionic-angular";

import { AuthService } from "../../providers/auth-service";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

	constructor(private authService: AuthService,
				private loadingCtrl: LoadingController,
				private alertCtrl: AlertController){}
	
	onSignin(form: NgForm){
		const loading = this.loadingCtrl.create({
			content: 'Proses Log In ...'
		});
		loading.present();

		this.authService.signin(form.value.email, form.value.password)
		// jika sukses
		.then(data=>{
			loading.dismiss();
			// console.log(data);
		})
		// jika tidak berhasil
		.catch(error => {
			loading.dismiss();
			const alert = this.alertCtrl.create({
				title: 'Log In Gagal !!',
				message: error.message,
				buttons:['Ok']
			});
			alert.present();
			// console.log(error);
		});
    // console.log(form.value)
  }


}
