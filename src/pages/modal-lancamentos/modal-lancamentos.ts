import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lancamentos } from '../../providers/lancamentos/lancamentos';


@IonicPage()
@Component({
  selector: 'page-modal-lancamentos',
  templateUrl: 'modal-lancamentos.html',
})
export class ModalLancamentosPage {

  view: any;

  classe: Lancamentos;

  contas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLancamentosPage');
  }



  cancel(){

  }

  salvar(){

  }

}
