import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {InputDialogServiceProvider} from "../../providers/input-dialog-service/input-dialog-service";

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  item: any;
  name: any;
  price: any;
  quantity: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public inputDialogService: InputDialogServiceProvider) {
  }

  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.price = this.navParams.get('item').price;
    this.quantity = this.navParams.get('item').quantity;
  }

  async dismissModal() {
    let data = {
      "name": this.name,
      "price": this.price,
      "quantity": this.quantity
    }
    await this.viewCtrl.dismiss(data);
  }

  async editItem() {
    let data = {
      "name": this.name,
      "price": this.price,
      "quantity": this.quantity
    }
    await this.viewCtrl.dismiss(data);
    const toast = this.inputDialogService.createToast(
      `Item edited successfully.`,
      "toast-primary"
    )
    await toast.present();
  }

}
