import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Home2Page } from "../home2/home2";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Home2Page;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
