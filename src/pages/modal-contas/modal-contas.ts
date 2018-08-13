import { Component, LOCALE_ID } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Conta, ContasProvider } from '../../providers/contas/contas';

@IonicPage()
@Component({
  selector: 'page-modal-contas',
  templateUrl: 'modal-contas.html',
})
export class ModalContasPage {

  view: any;
  conta: any;
  classeConta: Conta

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private providerContas: ContasProvider,
    private toast: ToastController

  ) {
    this.view = viewCtrl;

    this.classeConta = new Conta();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalContasPage');
  }

  cancel(){
    this.view.dismiss();
  }

  salvar(){
    this.salvarConta()
    .then(() => {
      this.toast.create({ message: 'Conta salva.', duration: 3000 });
      this.navCtrl.pop();
    })
    .catch(() => {
      this.toast.create({ message: 'Erro ao salvar a conta', duration: 3000 });
    });
    this.view.dismiss(this.conta);
  }

  private salvarConta() {
    return this.conta.insert(this.classeConta);
  }



}
