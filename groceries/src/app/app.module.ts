import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroceriesServiceProvider } from '../providers/groceries-service/groceries-service';
import { HttpClientModule } from '@angular/common/http';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import {AddItemPageModule} from '../pages/add-item/add-item.module';
import {EditItemPageModule} from '../pages/edit-item/edit-item.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Home2Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AddItemPageModule,
    EditItemPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Home2Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GroceriesServiceProvider,
    InputDialogServiceProvider
  ]
})
export class AppModule {}
