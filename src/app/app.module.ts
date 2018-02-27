import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ErrorComponent } from '../pages/error/error';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ErrorComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(modalCtrl: ModalController, errorHandler: ErrorHandler) {
    window.addEventListener('error', (error) => {
      modalCtrl.create(ErrorComponent, {
        error,
      }).present();
      errorHandler.handleError(error);
    })

  }
}
