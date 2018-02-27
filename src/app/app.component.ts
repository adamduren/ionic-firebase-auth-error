import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const app = firebase.initializeApp({
        apiKey: 'AIzaSyALYlIavrojW6PX1xns4X7sgQav7P72WfU',
        authDomain: 'teeboxnow-test.firebaseapp.com',
        databaseURL: 'https://teeboxnow-test.firebaseio.com',
        projectId: 'teeboxnow-test',
        storageBucket: 'teeboxnow-test.appspot.com',
        messagingSenderId: '58371001156',
      });
    });
  }
}

