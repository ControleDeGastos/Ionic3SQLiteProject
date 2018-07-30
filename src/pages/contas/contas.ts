import { ContasProvider } from './../../providers/contas/contas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
    public providerContas: ContasProvider

  ) {
    this.getAllContas();
  }

  ionViewDidLoad() {
    this.getAllContas();
  }

  public getAllContas(){


  }

}
