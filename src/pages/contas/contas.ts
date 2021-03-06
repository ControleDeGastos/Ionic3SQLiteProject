import { ContasProvider } from './../../providers/contas/contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ModalContasPage } from '../modal-contas/modal-contas';



@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  listaContas: any = this.providerContas.getList();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public providerContas: ContasProvider,
    public modalCtrl: ModalController,
    private toast: ToastController

  ) {

  }

  ionViewDidLoad() {

  }



  insert(){
    let modal = this.modalCtrl.create(ModalContasPage);

    modal.present();
  }

}
