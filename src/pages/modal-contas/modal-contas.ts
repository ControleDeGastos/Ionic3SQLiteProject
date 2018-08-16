import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Conta, ContasProvider } from '../../providers/contas/contas';
import { ContasPage } from './../contas/contas';


@IonicPage()
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {

  view: any;

  classeConta: Conta

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private providerContas: ContasProvider,
    private toast: ToastController

  ) {

    this.classeConta = new Conta();
  }


  cancel(){
    this.view.dismiss();
  }

  salvar(){
    this.salvarConta()
    .then(() => {
      this.toast.create({ message: 'Conta salva.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
      this.navCtrl.push(ContasPage);
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar a conta', duration: 3000, position: 'botton' }).present();
    });
    this.view.dismiss();
  }

  private salvarConta(){
    return this.providerContas.insert(this.classeConta);
  }



}
