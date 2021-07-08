import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from "../../providers/groceries-service/groceries-service";
import { InputDialogServiceProvider } from "../../providers/input-dialog-service/input-dialog-service";
import {AddItemPage} from "../add-item/add-item";
import {EditItemPage} from "../edit-item/edit-item";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'Groceries List';

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public groceryService: GroceriesServiceProvider,
              public inputDialogService: InputDialogServiceProvider,
              public modalController: ModalController) {

  }

  loadItems() {
    return this.groceryService.getAllItems();
  }

  async addItem() {
    const modal = await this.modalController.create(AddItemPage);
    modal.onDidDismiss(data => {
      if (data) {
        this.groceryService.addItem(data);
      }
    });
    return await modal.present();
  }

  async editItem(item, index) {
    const modal = await this.modalController.create(EditItemPage, {item:item});
    modal.onDidDismiss(data => {
      console.log(item)
      console.log(data)
      this.groceryService.editItem(data, index);
    });
    return await modal.present();
  }

  async deleteItem(item, index) {
    this.groceryService.deleteItem(index);
    await this.inputDialogService.createDeleteToast(item);
  }
}
