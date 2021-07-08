import { Component } from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {GroceriesServiceProvider} from "../../providers/groceries-service/groceries-service";
import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";


/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  title = 'Groceries List';

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public groceryService: GroceriesServiceProvider,
              public inputDialogService: InputDialogServiceProvider) {
  }

  loadItems() {
    return this.groceryService.getAllItems();
  }

  async addItem() {
    await this.inputDialogService.showPrompt();
  }

  async editItem(item, index, itemSliding) {
    console.log(item)
    console.log(index)
    console.log(itemSliding)
    await this.inputDialogService.showPrompt(item, index, itemSliding);
  }

  async deleteItem(item, index) {
    this.groceryService.deleteItem(index);
    await this.inputDialogService.createDeleteToast(item);
  }

}
