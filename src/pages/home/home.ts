import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private appRate: AppRate) {

  }

  promptForRating() {
    this.appRate.promptForRating(true);
  }        
}
