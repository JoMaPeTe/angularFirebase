import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestorageService } from '../firestorage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private route:Router,
              public firestorage : FirestorageService ) { }

  ngOnInit(): void {
  }

  goHome(){
    this.route.navigate(['/']);
  }
}
