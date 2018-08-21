import { ModalContasPage } from './../modal-contas/modal-contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Toast, ToastController } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ContasProvider } from '../../providers/contas/contas';


@IonicPage()
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private providerContas: ContasProvider,
    public modalCtrl: ModalController,
    private toast: ToastController

  ) {


  }

  insert(){
    let modal = this.modalCtrl.create(ModalContasPage)
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
  }

}

