import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  name: any;
  price: any;
  quantity: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public inputDialogService: InputDialogServiceProvider) {
  }

  ionViewDidLoad() {
  }

  async dismissAddModal() {
    await this.viewCtrl.dismiss(null);
  }

  async addItem() {
    let data = {
      "name": this.name,
      "price": this.price,
      "quantity": this.quantity
    }
    await this.viewCtrl.dismiss(data);
    const toast = this.inputDialogService.createToast(
      `Item: ${data.name} added to the list.`,
      "toast-success"
    )
    await toast.present();
  }

}
