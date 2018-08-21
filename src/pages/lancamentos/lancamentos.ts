import { LancamentosProvider } from './../../providers/lancamentos/lancamentos';
import { ModalContasPage } from './../modal-contas/modal-contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Toast, ToastController } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ContasProvider } from '../../providers/contas/contas';
import { ModalLancamentosPage } from '../modal-lancamentos/modal-lancamentos';


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
    private toast: ToastController,
    private providerLancamentos: LancamentosProvider

  ) {


  }

  insert(){
    let modal = this.modalCtrl.create(ModalLancamentosPage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
  }

}

