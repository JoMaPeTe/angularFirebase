import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = environment.title;

  constructor (public auth: AuthService,
                private toastr: ToastrService) {

  }

  signEmail(){
    this.auth.login().catch( error => {
      //console.log('error en mail login: ', error);
      console.log('error code: ', error.code);
      if(error.code==='auth/wrong-password'){
        //alert('Contraseña no válida');
        this.toastr.error('Contraseña no válida','Error Login')
      }else if(error.code==='auth/user-not-found'){
       // alert('El usuario no existe');
       this.toastr.error('El usuario no existe','Error Login')
      }else if(error.code==='auth/invalid-email'){
        //alert('Formato de email no valido');
        this.toastr.error('Formato de email no valido','Error Login')
    }
    })
  }
}
