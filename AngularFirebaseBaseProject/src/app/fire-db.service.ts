import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { AuthService } from './auth.service';
import { FirestorageService } from './firestorage.service';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(private db: AngularFireDatabase,
               public firestorage : FirestorageService,
               public auth: AuthService ) { }
 
  updateUserData(user: any){
    console.log('user: ', user);
    const path = 'users/' + user.uid;
    const u = {
      email: user.email
    }
    this.db.object(path).update(u)
    .catch( error => console.log(error));
   
  }

  updateUserImageURL(){
    
    const path = 'users/' + this.auth.authUser.uid ;

    const u = {
      image: this.firestorage.downloadURL
    }
    this.db.object(path).update(u)
    .catch( error => console.log(error));
    
  }

  getUsers(){
    const path = 'users/';
    //return this.db.list(path).valueChanges();
    return this.db.list(path).snapshotChanges();
  }

  removeUser(userUid: any){
    const path = 'users/' + userUid;
    return this.db.object(path).remove();
  }
}
