import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import  firebase  from 'firebase/app';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  pass = '';
  authUser = null;

  constructor(public auth: AngularFireAuth, 
              private route: Router
             ) { } //atributo publico de la clase del tipo AngularFireAuth

  user = this.auth.authState.pipe (map (authState => {
    console.log('authState: ', authState);
   if (authState){ 
     return authState;
  }else{
    return null;
  }
}
))

login(){
  console.log('Login!!');
  return this.auth.signInWithEmailAndPassword( this.email,this.pass )
  .then( user => {
    console.log('user logado con mail: ', user);
    this.email= '';
    this.pass = '';
  })
 
}
 
glogin(){
  console.log('google login!');
  this.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() )
  .then( user => {
    console.log('user logado: ', user);
  
  })
  .catch( error => {
    console.log('error en google login: ', error);
  })
}

logout(){
  console.log('logout!');
  this.auth.signOut();
  this.email = '';
  this.pass = '';
  this.route.navigate(['/']);
}

}
