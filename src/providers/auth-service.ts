import firebase from 'firebase';

export class AuthService {
	signup(email: string, password: string){
		return firebase.auth().createUserWithEmailAndPassword(email, password); //return akan otomatis ngecek jika sudah register dengan enail sama
	}

	signin(email: string, password: string){
		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	logout(){
		firebase.auth().signOut();
	}
}