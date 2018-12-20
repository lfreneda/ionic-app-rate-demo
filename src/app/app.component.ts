import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRate } from '@ionic-native/app-rate';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              appRate: AppRate,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      appRate.preferences = {
        displayAppName: 'MyApp',
        usesUntilPrompt: 5,
        promptAgainForEachNewVersion: false,
        inAppReview: false,
        storeAppURL: {
          android: 'market://details?id=com.fieldcontrol.orc'
        },
        customLocale: {
          title: "Would you mind rating %@?",
          message: "It won’t take more than a minute and helps to promote our app. Thanks for your support!",
          cancelButtonLabel: "No, Thanks",
          laterButtonLabel: "Remind Me Later",
          rateButtonLabel: "Rate It Now",
          yesButtonLabel: "Yes!",
          noButtonLabel: "Not really",
          appRatePromptTitle: 'Do you like using %@?',
          feedbackPromptTitle: 'Mind giving us some feedback?',
        },
        callbacks: {
          handleNegativeFeedback: function(){
            window.open('mailto:lfreneda@gmail.com','_system');
          },
          onRateDialogShow: function(callback){
            callback(1) // cause immediate click on 'Rate Now' button
          },
          onButtonClicked: function(buttonIndex){
            console.log("onButtonClicked -> " + buttonIndex);
          }
        }
      };
    });
  }
}

