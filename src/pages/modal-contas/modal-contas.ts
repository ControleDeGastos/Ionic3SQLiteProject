import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {

  view: any;
  conta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, viewCtrl: ViewController) {
    this.view = viewCtrl;
    this.conta = navParams.get("parametro") || { descricao: ""};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContasPage');
  }

  cancel(){
    this.view.dismiss();
  }

  salvar(){
    this.view.dismiss(this.conta);
  }

}
