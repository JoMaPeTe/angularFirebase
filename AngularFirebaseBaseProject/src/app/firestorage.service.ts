import { Injectable } from '@angular/core';
import {  AngularFireStorage } from '@angular/fire/storage'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public firestorage: AngularFireStorage,
              public auth: AuthService  ) { }

  uploadFile(event: any) {
    console.log('event: ', event);

    let ext = '.jpg';
    if (event.target.files[0].type === 'image/png'){
      ext = '.png';
    }
   
    this.firestorage.upload('images/' + this.auth.authUser.uid  + ext, event.target.files[0])
    .then(result => {
      console.log('result: ', result);
    }).catch(error => {
      console.log('error: ', error);
    });
  }

}
